from DataBase.database import db
from Util.Response import success_response, error_response
from Modules.books_module import Books


def add_new_book(data):

    try:

        if not data:
            return error_response("Enter required info")

        book = Books(
            isbn=data.get("book_isbn"),
            title=data.get("book_title"),
            author=data.get("book_author"),
            genre=data.get("book_genre"),
            publication_year=data.get("publication_year"),
            total_copies=data.get("total_copies"),
            available_copies=data.get("available_copies"),
            book_img=data.get("book_image"),
        )

        db.session.add(book)
        db.session.commit()
        return success_response("new book was added successfully")

    except Exception as e:
        return error_response(str(e))


def show_books():

    try:
        data = Books.query.all()

        if not data:
            return error_response("Books not available yet")

        catalogue = []
        for book in data:

            catalogue.append(
                {
                    "id": book.book_id,
                    "title": book.title,
                    "author": book.author,
                    "genre": book.genre,
                    "image": book.book_img,
                }
            )

        return success_response("Books List", catalogue)

    except Exception as e:
        return error_response(str(e))


def update_books(id, data):

    try:
        book = db.session.get(Books, id)

        if not book:
            return error_response("Sorry book not found")

        if "book_isbn" in data:
            data.isbn = data["book_isbn"]

        if "book_title" in data:
            data.title = data["book_title"]

        if "book_author" in data:
            data.author = data["book_author"]

        if "book_genre" in data:
            data.genre = data["book_genre"]

        if "publication_year" in data:
            data.publication_year = data["publication_year"]

        if "total_copies" in data:
            data.total_copies = data["total_copies"]

        if "available_copies" in data:
            data.available_copies = data["available_copies"]

        if "book_image" in data:
            data.book_image = data["book_image"]
            
        db.session.commit()
        return success_response("book was updated")

    except Exception as e:
        return error_response(str(e))
    

def delete_book(id):
    
    try:
        book = db.session.get(Books, id)
        
        if not book:
            return error_response("Book not found")
        
        db.session.delete(book)
        db.session.commit()
        
        return success_response("book has been removed")
        
    except Exception as e:
        return error_response(str(e))


def search_book_id(id):
    
    try:
        data = db.session.get(Books, id)
        
        if not data:
            return error_response("book not found")
        
        book = [
            data.title,
            data.author,
            data.genre,
            data.book_img
        ]
        
        return success_response("book found", book)
    except Exception as e:
        return error_response(str(e))
    
def search_book_name(name):
    
    try:
        data = db.session.query(Books).filter_by(title=name).first()
        
        if not data:
            return error_response("book not found")
        
        book = [
            data.title,
            data.author,
            data.genre,
            data.book_img
        ]
        
        return success_response("book found", book)
    except Exception as e:
        return error_response(str(e))
    
    
def search_book_genre(genre):
    
    try:
        data = db.session.query(Books).filter_by(genre=genre).all()
        
        if not data:
            return error_response("book not found")
        
        books = []
        
        for book in data:
            books.append({
                "title":book.title,
                "author":book.author,
                "genre":book.genre,
                "we have":book.available_copies,
                "cover":book.book_img
            })
        
        return success_response("book found", books)
    except Exception as e:
        return error_response(str(e))