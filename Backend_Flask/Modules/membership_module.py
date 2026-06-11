from DataBase.database import db

class Members(db.Model):
    __tablename__ = "Membership"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    plan = db.Column(db.String(200), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    status = db.Column(db.String(300), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("Users.user_id"), nullable=False)