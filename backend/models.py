from sqlalchemy import Column, Integer, String, Float
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)


class DebtProfile(Base):
    __tablename__ = "debt_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    monthly_income = Column(Float)
    monthly_expenses = Column(Float)
    total_debt = Column(Float)
    settlement_amount = Column(Float)