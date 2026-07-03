import os
from datetime import datetime, timedelta

from dotenv import load_dotenv
from jose import jwt
from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "120")
)


def hash_password(password: str):
    return generate_password_hash(password)


def verify_password(password: str, hashed_password: str):
    return check_password_hash(hashed_password, password)


def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({"exp": expire})

    return jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )