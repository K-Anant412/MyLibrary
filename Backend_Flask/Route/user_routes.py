from flask import request
from flask_restx import Namespace, Resource, reqparse, fields

from Service.user_services import (
    add_new_user
)

user_route = Namespace(
    "user",
    description="users",
    path="/user"
)

user_model = user_route.model(
    "User",
    {
        "user_name": fields.String(description="user name"),
        "user_email": fields.String(description="user email"),
        "password":fields.String(description="password")
    }
)

@user_route.route("/add_new_user", methods=["POST"])
class add_user(Resource):
    
    @user_route.expect(user_model)
    def post(self):
        
        data = request.get_json()
        return add_new_user(data)