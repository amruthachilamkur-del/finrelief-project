from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class DebtProfileCreate(BaseModel):
    monthly_income: float
    monthly_expenses: float
    total_debt: float


class Token(BaseModel):
    access_token: str
    token_type: str