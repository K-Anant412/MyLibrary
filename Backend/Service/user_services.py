from DataBase.database import db
from Modules.user_module import User
from Util.Response import error_response, success_response


def show_user():

    try:
        users = User.query.all()

        if not users:
            return error_response("Users not found")

        data = []
        for user in users:
            data.append({"id": user.user_id, "name": user.name, "contact": user.email})

        return success_response("User's", data)

    except Exception as e:
        return error_response(str(e))


def update_user(id, data):
    try:
        user = db.session.get(User, id)

        if not user:
            return error_response("User not exist")

        if "user_name" in data  and data["user_name"] != "":
            user.name = data["user_name"]
        if "user_email" in data and data["user_email"] != "":
            user.email = data["user_email"]

        db.session.commit()

        return success_response("Data updated")

    except Exception as e:
        return error_response(str(e))


def delete_user(id):

    try:
        user = db.session.get(User, id)

        if not user:
            return error_response("User not found")

        db.session.delete(user)
        db.session.commit()

        return success_response("User was removed")

    except Exception as e:
        return error_response(str(e))

def find_user_id(id):
    
    try:
        user = db.session.get(User, id)
        
        if not user:
            return error_response("user not found")
        
        result = {
            "id": user.user_id,
            "name": user.name,
            "email": user.email
        }
        
        return success_response("User Details:", result)
    except Exception as e:
        return error_response(str(e))