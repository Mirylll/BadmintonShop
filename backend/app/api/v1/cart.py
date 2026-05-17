from fastapi import APIRouter, Depends
from app.core.database import get_db
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter(prefix="/cart", tags=["cart"])


@router.get("/")
async def get_cart(current_user: User = Depends(get_current_user)):
    return {"message": "Cart endpoint", "user_id": current_user.id}
