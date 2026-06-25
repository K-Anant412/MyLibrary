from DataBase.database import db
from datetime import datetime


class MembershipPlan(db.Model):
    __tablename__ = "MembershipPlans"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    duration_days = db.Column(db.Integer, nullable=False)
    borrow_limit = db.Column(db.Integer, nullable=False)
    due_date_days = db.Column(db.Integer, nullable=False)
    has_early_access = db.Column(db.Boolean, default=False, nullable=False)


class Members(db.Model):
    __tablename__ = "Membership"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("Users.user_id"), nullable=False)
    plan_id = db.Column(db.Integer, db.ForeignKey("MembershipPlans.id"), nullable=False)

    start_date = db.Column(db.Date, nullable=False, default=datetime.utcnow)
    end_date = db.Column(db.Date, nullable=False)
    status = db.Column(db.String(300), nullable=False, default="Active")

    plan = db.relationship("MembershipPlan", backref="subscriptions")
