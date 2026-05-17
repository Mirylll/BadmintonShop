from fastapi import APIRouter, Depends
from app.api.deps import require_admin
from app.models.user import User

router = APIRouter(prefix="/admin/orders", tags=["admin"])


@router.get("/")
async def get_all_orders(admin: User = Depends(require_admin)):
    return {"orders": []}
