from flask import request
from flask_restx import Resource, fields, Namespace
from Service.membership_services import *

membership_route = Namespace("member", description="memberships detail", path="/member")

# membership_table_model = membership_route.model(
#     "Table_member",
#     {
#         "plan": fields.Strings(description="memberships plan"),
#         "start_date": fields.Strings(description="memberships plan"),
#         "end_date": fields.Strings(description="memberships plan"),
#         "status": fields.Strings(description="memberships plan"),
#         "user_id": fields.Strings(description="memberships plan")
#     }
# )

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
