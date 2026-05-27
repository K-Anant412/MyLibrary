from DataBase.database import db

class Books(db.Model):
    __tablename__ ="Books"
    
    book_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    isbn = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    publication_year = db.Column(db.Integer)    
    total_copies = db.Column(db.Integer, nullable=False)
    available_copies = db.Column(db.Integer, nullable=False)
    
    circulation = db.relationship(
                    "Circulation",
                    backref="book",
                    lazy=True 
                    )