
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from routers.auth import router as auth_router
from routers.debt import router as debt_router
# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="FinRelief AI Backend")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(auth_router)
app.include_router(debt_router)

@app.get("/")
def root():
    return {"message": "FinRelief AI Backend Running Successfully"}