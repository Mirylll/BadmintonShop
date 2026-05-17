from fastapi import APIRouter, Depends
from app.core.database import get_db
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter(prefix="/orders", tags=["orders"])


@router.get("/")
async def get_orders(current_user: User = Depends(get_current_user)):
    return {"message": "Orders endpoint", "user_id": current_user.id}
