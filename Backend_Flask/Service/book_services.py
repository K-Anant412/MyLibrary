from DataBase.database import db
from Util.Response import success_response, error_response
from Modules.books_module import Books

def add_new_book(data):

    try:
        pass

    except Exception as e:
        return error_response(str(e))