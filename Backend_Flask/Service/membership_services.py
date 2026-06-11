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
