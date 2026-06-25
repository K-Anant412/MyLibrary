from flask import request
from flask_restx import Resource, fields, Namespace
from Service.auth_services import *

# from user_routes import user_model
authentication_route = Namespace(
    "auth", 
    description="users", 
    path="/auth"
    )

registration_model = authentication_route.model(
    "RegistrationUser",
    {
        "user_name": fields.String(description="user name"),
        "user_email": fields.String(description="user email-address"),
        "user_password": fields.String(description="account password"),
    },
)


# ======================================================================================
@authentication_route.route("/register", methods=["POST"])
class add_user(Resource):

    @authentication_route.expect(registration_model)
    def post(self):
        data = request.get_json()
        
        print("React data", data)
        
        return register_new_user(data)


# ======================================================================================

login_model = authentication_route.model(
    "login",
    {
        "user_name": fields.String(description="user name"),
        "account_password": fields.String(description="account password"),
    },
)


@authentication_route.route("/login", methods=["POST"])
class login_user(Resource):

    @authentication_route.expect(login_model)
    def post(self):
        data = request.get_json()
        print(data)
        return user_login(data)


# ======================================================================================
