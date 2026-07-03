from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import DebtProfile
from schemas import DebtProfileCreate

router = APIRouter(prefix="/debt", tags=["Debt"])


@router.post("/create")
def create_debt_profile(profile: DebtProfileCreate, db: Session = Depends(get_db)):
    debt = DebtProfile(
        user_id=1,
        monthly_income=profile.monthly_income,
        monthly_expenses=profile.monthly_expenses,
        total_debt=profile.total_debt,
        settlement_amount=profile.total_debt * 0.75
    )

    db.add(debt)
    db.commit()
    db.refresh(debt)

    return {
        "message": "Debt profile created successfully",
        "settlement_amount": debt.settlement_amount
    }


@router.get("/all")
def get_all_debt_profiles(db: Session = Depends(get_db)):
    return db.query(DebtProfile).all()