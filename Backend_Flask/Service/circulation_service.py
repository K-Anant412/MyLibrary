from DataBase.database import db
from Modules.user_module import User
from Modules.books_module import Books
from datetime import date, timedelta
from Modules.circulation_module import Circulation
from Util.Response import error_response, success_response


def borrow_book(data):

    try:
        issue_date = date.today()
        due_date = issue_date + timedelta(days=7)
        
        book = db.session.get(Books, data["book_id"])
        
        if not book:
            return error_response("book not found,")
        
        if book.available_copies <=0:
            return error_response("currently not available,")
        
        book.available_copies -= 1

        new_record = Circulation(
            status="borrowed",
            transaction_type="borrow",
            issue_date=issue_date,
            due_date=due_date,
            return_date=None,
            purchase_date=None,
            user_id=data["user_id"],
            book_id=data["book_id"],
        )

        db.session.add(new_record)
        db.session.commit()

        return success_response("Book borrowed successfully")

    except Exception as e:
        return error_response(str(e))


def return_book(data):

    try:
        user_id = data["user_id"]
        book_id = data["book_id"]

        user = db.session.get(User, user_id)
        book = db.session.get(Books, book_id)
        
        if circulation.status == "returned":
            return error_response("Book already returned")

        if not user or not book:
            return error_response("User or Book does not exist")

        circulation = Circulation.query.filter_by(
            user_id=user_id, book_id=book_id, status="borrowed"
        ).first()

        if not circulation:
            return error_response("something is missing in database( user or book )")

        circulation.status = "return"
        circulation.return_date = date.today()
        book.available_copies += 1
        book.read_by += 1

        db.session.commit()

        return success_response("book was return")

    except Exception as e:
        return error_response(str(e))


def show_circulations():

    try:
        data = Circulation.query.all()
        print(data)

        if not data:
            return error_response("nothing to show")

        circulations = []

        for book in data:
            circulations.append(
                {
                    "user_id": book.user_id,
                    "book_id": book.book_id,
                    "status": book.status,
                }
            )

        return success_response("Circulation Details:", circulations)

    except Exception as e:
        return error_response(str(e))


def book_purchase(data):
    
    try:
        book = db.session.get(Books, data["book_id"])
        
        if not book:
            return error_response("book not found,")
        
        if book.available_copies <=0:
            return error_response("currently not available,")
        
        book.available_copies -= 1
        
        new_record = Circulation(
            status="purchase",
            transaction_type="purchase",
            issue_date=None,
            due_date=None,
            return_date=None,
            purchase_date=date.today(),
            user_id=data["user_id"],
            book_id=data["book_id"],
        )

        db.session.add(new_record)
        db.session.commit()

        return success_response("thank you for Purchase")
        
    except Exception as e:
        return error_response(str(e))