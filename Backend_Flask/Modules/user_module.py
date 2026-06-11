from DataBase.database import db
from datetime import datetime


class User(db.Model):

    __tablename__ = "Users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(400), nullable=False)

    role = db.Column(db.String(100), nullable=False, default="user")

    max_book_allowed = db.Column(db.Integer, nullable=False, default=20)
    create_at = db.Column(db.DateTime, default=datetime.utcnow)
    address = db.Column(db.String(700), nullable=True)
    pin_code = db.Column(db.Integer, nullable=True)
    contact = db.Column(db.String(12), nullable=True)

    circulation = db.relationship("Circulation", backref="user", lazy=True)
    membership = db.relationship("Members", backref="user", lazy=True)
