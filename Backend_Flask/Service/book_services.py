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
            
          catalogue.append({
                "id": book.book_id,
                "title": book.title,
                "author": book.author,
                "genre": book.genre,
                "image": book.book_img
            })
            
        return success_response("Books List", catalogue)
        
    except Exception as e:
        return error_response(str(e))