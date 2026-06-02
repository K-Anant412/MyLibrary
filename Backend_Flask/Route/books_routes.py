from flask import request
from flask_restx import Namespace, Resource, fields
from Service.book_services import(
                                  add_new_book,
                                  show_books,
                                  update_books,
                                  delete_book,
                                  search_book_id,
                                  search_book_name,
                                  search_book_genre
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
    
# update books info
@book_route.route("/update_book/<int:id>", methods=["PUT"])
class update_book(Resource):
    
    @book_route.param("id", description="book id", _in="path")
    @book_route.expect(book_model)
    def put(self, id):
        data = request.get_json()
        return update_books(id, data)
    
#delete book by ID
@book_route.route("/delete_book/<int:id>", methods=["DELETE"])
class remove_book(Resource):
    
    @book_route.param("id", description="book id", _in="path")
    def delete(self, id):
        return delete_book(id)
    
# search book by ID
@book_route.route("/search_book_id/<int:id>", methods=["GET"])
class find_book(Resource):
    
    @book_route.param("id", description="book id", _in="path")
    def get(self, id):
        return search_book_id(id)
    
# search book by name
@book_route.route("/search_by_title/<string:name>", methods=["GET"])
class find_name(Resource):
    
    @book_route.param("name", description="book name", _in="path")
    def get(self, name):
        return search_book_name(name)
    
# search books by genre
@book_route.route("/search_by_genre/<string:genre>", methods=["GET"])
class find_name(Resource):
    
    @book_route.param("genre", description="books genre", _in="path")
    def get(self, genre):
        return search_book_genre(genre)