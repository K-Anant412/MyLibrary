from DataBase.database import db
from datetime import datetime

class Circulation(db.Model):
    
    __tablename__ = "circulation"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    status = db.Column(db.String(100), nullable=False)
    issue_date = db.Column(db.DateTime, nullable=False)
    return_date = db.Column(db.DateTime, nullable=False)
    
    user_id = db.Column(
              db.Integer,
              db.ForeignKey("Users.user_id"),
              nullable=False        
             )
    
    book_id = db.Column(
              db.Integer,
              db.ForeignKey("Books.book_id"),
              nullable=False
             )
    
    
    