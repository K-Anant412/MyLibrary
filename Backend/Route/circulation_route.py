from flask import request
from flask_restx import Namespace, fields, Resource
from Service.circulation_service import *

circulation_route = Namespace(
    "circulation",
    description="books circulation",
    path="/circulation"
)

borrow_book_model = circulation_route.model(
    "borrow_book",{
        "user_id": fields.Integer(required=True),
        "book_id": fields.Integer(required=True)
    }
)
return_time = 7
fine_perday = 20

# user borrow a book
@circulation_route.route("/borrow_book", methods=["POST"])
class borrow(Resource):
    
    @circulation_route.expect(borrow_book_model)
    def post(self):
        data = request.get_json()
        print("Route data: ", data)
        return borrow_book(data)
    
# user return a borrowed book
@circulation_route.route("/return_book", methods=["POST"])
class book_return(Resource):
    
    @circulation_route.expect(borrow_book_model)
    def post(self):
        data = request.get_json()
        return return_book(data)
    
# display all circulation records
@circulation_route.route("/show_records", methods=["GET"])
class show_records(Resource):
    
    def get(self):
        return show_circulations()
    
# user buy an Book
@circulation_route.route("/book_purchase", methods=["POST"])
class purchase(Resource):
    
    @circulation_route.expect(borrow_book_model)
    def post(self):
        data = request.get_json()
        return book_purchase(data)