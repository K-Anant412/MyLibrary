from flask import request
from flask_restx import Namespace, Resource, fields
from Service.user_services import *

user_route = Namespace("user", description="users", path="/user")

user_model = user_route.model(
    "User",
    {
        "user_name": fields.String(description="user name"),
        "user_email": fields.String(description="user email"),
        "password": fields.String(description="password"),
    },
)


@user_route.route("/read_all_users", methods=["GET"])
class show_all(Resource):

    def get(self):
        return show_user()


@user_route.route("/update_user/<int:id>", methods=["PUT"])
class change_user(Resource):

    @user_route.param("id", description="enter user id", _in="path")
    @user_route.expect(user_model)
    def put(self, id):
        data = request.get_json()
        return update_user(id, data)

@user_route.route("/delete_user/<int:id>", methods=["DELETE"])
class remove_user(Resource):
    
    @user_route.param("id", description="enter user id", _in="path")
    def delete(self, id):
        return delete_user(id)