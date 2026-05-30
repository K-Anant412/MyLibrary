from Util.Response import *
from DataBase.database import db
from Modules.user_module import User

def register_new_user(data):
    
    try:
        print(data)
        if not data:
            return error_response("enter required information")
        
        new_user = User(
            name=data.get("user_name"),
            email=data.get("user_email"),
            password=data.get("user_password")
        )
        
        db.session.add(new_user)
        db.session.commit()
        
        return success_response("new user was added")
        
    except Exception as e:
        return error_response(str(e))