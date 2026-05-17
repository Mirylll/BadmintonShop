from fastapi import APIRouter, Depends
from app.api.deps import require_admin
from app.models.user import User

router = APIRouter(prefix="/admin/dashboard", tags=["admin"])


@router.get("/")
async def get_dashboard(admin: User = Depends(require_admin)):
    return {
        "total_products": 0,
        "total_orders": 0,
        "total_users": 0,
        "revenue": 0,
    }
