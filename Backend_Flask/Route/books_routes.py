from flask import request
from flask_restx import Namespace, Resource, fields
from Service.book_services import(
                                  add_new_book,
                                  show_books
                                  )
book_route = Namespace(
    "book",
    description="books",
    path="/book"
)

book_model = book_route.model(
    "Books",
    {
        "book_isbn": fields.String(description="books isbn number"),
        "book_title": fields.String(description="book title"),
        "book_author": fields.String(description="books author"),
        "book_genre": fields.String(description="books genre"),
        "publication_year": fields.String(description="books publication year"),
        "total_copies": fields.String(description="books total copies"),
        "available_copies": fields.String(description="books available copies"),
        "book_image": fields.String(description="books image path")
    }
)

# to add new book
@book_route.route("/add_new_book", methods=["POST"])
class add_book(Resource):

    @book_route.expect(book_model)
    def post(self):
        
        data = request.get_json()
        return add_new_book(data)
    
# to show all books
@book_route.route("/show_all_books", methods=["GET"])
class show_book(Resource):
    
    def get(self):
        return show_books()
