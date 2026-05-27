from flask import request
from flask_restx import Namespace, Resource, reqparse, fields

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
        "password":fields.String(description="password"),
        "user_role":fields.String(description="user role"),
        "membership": fields.String(description="membership plan")
    }
)

