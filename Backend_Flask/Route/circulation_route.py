from flask import request
from flask_restx import Namespace, fields, Resource

circulation_route = Namespace(
    "circulation",
    description="books circulation",
    path="/circulation"
)

circulation_model = circulation_route.model(
    "Circulations",{
        "book_status": fields.String(description="enter current status"),
        "user_id": fields.String(description="enter user id"),
        "book_id": fields.String(description="enter book id")
    }
)