from DataBase.database import db
from Modules.membership_module import Members
from Modules.user_module import User
from datetime import date,  timedelta
from Util.Response import error_response, success_response

PLAN_DETAILS = {
    "weekly": {"days":7, "max_books": 6, "status": "Weekly Member"},
    "monthly": {"days":30, "max_books": 9, "status": "Silver Member"},
    "quarterly": {"days":90, "max_books": 14, "status": "Gold Member"},
    "yearly": {"days":365, "max_books": 20, "status": "Platinum Member"}
}


def create_member(data):

    try:
        user = db.session.get(User, data["user_id"])
        if not user:
            return error_response("user not found")

        plan_name = data["membership"].lower()
        if plan_name not in PLAN_DETAILS:
            return error_response("invalide membership plan selected")
        
        plan_info = PLAN_DETAILS[plan_name]
        start_date = date.today()
        end_date = start_date + timedelta(days=plan_info["days"])

        user.address = data["address"]
        user.contact = data["contact"]
        user.pin_code = data["pin_code"]
        user.max_book_allowed = plan_info["max_books"]

        member_record = Members(
            plan=data["membership"],
            start_date=start_date,
            end_date=end_date,
            status=plan_info["status"],
            user_id=user.user_id,
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

def change_plan(plan, user_id):
    
    try:
        member = db.session.query(Members).filter_by(user_id=user_id).first()
        user = db.session.get(User, user_id)
        
        if not member or not user:
            return error_response("active member record not found")
        
        new_plan = plan.lower()
        if new_plan not in PLAN_DETAILS:
            return error_response("invalid plan type provided")
        
        if new_plan == member.plan:
            return error_response("you are already on this plan tier")
        
        plan_info = PLAN_DETAILS[new_plan]
        start_date = date.today()
        
        member.plan = new_plan
        member.start_date = start_date
        member.end_date = start_date + timedelta(days=plan_info["days"])
        member.status =plan_info["status"]
        user.max_book_allowed = plan_info["max_books"]
        
        db.session.commit()
        return success_response(f"your new plan is: {new_plan}")
    
    except Exception as e:
        return error_response(str(e))