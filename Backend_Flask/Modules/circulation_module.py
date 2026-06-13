from DataBase.database import db


class Circulation(db.Model):

    __tablename__ = "circulation"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    status = db.Column(db.String(100), nullable=False)
    transaction_type = db.Column(db.String(20), default=None)

    issue_date = db.Column(db.Date, nullable=True)
    due_date = db.Column(db.Date, nullable=True)
    return_date = db.Column(db.Date, nullable=True)
    purchase_date = db.Column(db.Date, nullable=True)

    user_id = db.Column(db.Integer, db.ForeignKey("Users.user_id"), nullable=False)

    book_id = db.Column(db.Integer, db.ForeignKey("Books.book_id"), nullable=False)
