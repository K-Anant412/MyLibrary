from flask import request
from flask_restx import Namespace, fields, Resource

circulation_route = Namespace(
    "circulation",
    description="books circulation",
    path="/circulation"
)

circulation_model = circulation_route.model(
    "Circulations",{
        
    }
)