from flask import Flask, request
from flask_cors import CORS
from DataBase.database import db
from config import config
from flask_restx import Api
from Route.user_routes import user_route
from Route.books_routes import book_route
from Route.auth_routes import authentication_route
from Route.circulation_route import circulation_route
from Route.membership_routes import membership_route
from Modules.user_module import User
from Modules.books_module import Books
from Modules.circulation_module import Circulation

app = Flask(__name__)
CORS(app)

app.config.from_object(config)
app.secret_key = "mySecondProject123"
db.init_app(app)


with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return "Welcome"


api = Api(
    app,
    title="library management API",
    description="a simple employee management API build with Flask",
    doc="/swagger",
    prefix="/api/v1",
)

api.add_namespace(user_route)
api.add_namespace(book_route)
api.add_namespace(authentication_route)
api.add_namespace(circulation_route)
api.add_namespace(membership_route)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
