from flask import request
from flask_restx import Resource, fields, Namespace
from Service.membership_services import *

membership_route = Namespace("member", description="memberships detail", path="/member")

member_model = membership_route.model(
    "Member",
    {
        "user_id": fields.String(description="user id"),
        "membership": fields.String(description="membership plan"),
        "address": fields.String(description="user address"),
        "pin_code": fields.String(description="user pin code"),
        "contact": fields.String(description="user contact")
    }
)

@membership_route.route("/add_new_member", methods=["POST"])
class add_member(Resource):
    
    @membership_route.expect(member_model)
    def post(self):
        data = request.get_json()
        return create_member(data)

@membership_route.route("/show_all", methods=["GET"])
class get_members(Resource):
    
    def get(self):
        return show_members()

@membership_route.param("plan", description="changing the plan", _in="path")
@membership_route.param("id", description="user id", _in="path")
@membership_route.route("/change_plan", methods=["PUT"])
class change_plan(Resource):
    
    def put(self, id, plan):
        return change_plan(plan, id)