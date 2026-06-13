from DataBase.database import db
from Modules.membership_module import Members
from Modules.user_module import User
from datetime import date, datetime, timedelta
from Util.Response import error_response, success_response

Weekly = 6
Monthly = 29
Quarterly = 179
Yearly = 364


def create_member(data):

    try:
        user = db.session.get(User, data["user_id"])

        if not user:
            return error_response("user not found")

        start_date = date.today()
        membership = data["membership"]

        if membership == "weekly":
            end_date = start_date + timedelta(days=Weekly)
        elif membership == "monthly":
            end_date = start_date + timedelta(days=Monthly)
        elif membership == "quarterly":
            end_date = start_date + timedelta(days=Quarterly)
        else:
            end_date = start_date + timedelta(days=Yearly)

        user.address = data["address"]
        user.contact = data["contact"]
        user.pin_code = data["pin_code"]

        member_record = Members(
            plan=data["membership"],
            start_date=start_date,
            end_date=end_date,
            status=f"{membership} member",
            user_id=data["user_id"],
        )
        db.session.add(member_record)
        db.session.commit()

        return success_response("new member added")
    except Exception as e:
        return error_response(str(e))


def show_members():

    try:
        data = Members.query.all()
        print(data)

        if not data:
            return error_response("table is empty")

        allMembers = []
        for member in data:
            allMembers.append(
                {
                    "id": member.user_id,
                    "plan": member.plan,
                    "status": member.status,
                    "start_date": (
                        member.start_date.isoformat() if member.start_date else None
                    ),
                    "end_date": (
                        member.end_date.isoformat() if member.end_date else None
                    ),
                }
            )

        return success_response("Member List:", allMembers)

    except Exception as e:
        return error_response(str(e))

def change_plan(plan, id):
    
    try:
        member = db.session.query(Members, id)
        
        if not member:
            return error_response("member not found")
        
        if plan == member.plan:
            return error_response("already purchsed, try another plan")
        
        member.plan = plan
        
        db.session.commit()
        
        return success_response("your plan was updated")
    
    except Exception as e:
        return error_response(str(e))