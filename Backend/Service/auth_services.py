from Util.Response import *
import jwt
import datetime
from DataBase.database import db
from Modules.user_module import User
from werkzeug.security import check_password_hash, generate_password_hash
from flask import session

JWT_SECRET = 'jwtsecretkey123'

def register_new_user(data):

    try:
        if not data:
            return error_response("enter required information")

        new_user = User(
            name=data.get("user_name"),
            email=data.get("user_email"),
            password=generate_password_hash(data.get("user_password")),
        )

        db.session.add(new_user)
        db.session.commit()

        return success_response("new user was added")

    except Exception as e:
        return error_response(str(e))


def user_login(data):

    try:
        user = User.query.filter_by(name=data["user_name"]).first()

        if user and check_password_hash(user.password, data.get("account_password")):
            session["user_id"] = user.user_id
            
            username = user.name
            password = user.password
            
            payload = {
                "user": username,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2)
            }
            
            token = jwt.encode( payload, JWT_SECRET, algorithm="HS256")
             
            # result = {"name": user.name, "email": user.email}

            # return success_response("user login successfully", result)

            return {
                "message": "Login successful",
                "token": token
            }, 200
            
        return error_response("user not found")

    except Exception as e:
        return error_response(str(e))
