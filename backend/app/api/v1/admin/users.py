from fastapi import APIRouter, Depends
from app.api.deps import require_admin
from app.models.user import User

router = APIRouter(prefix="/admin/users", tags=["admin"])


@router.get("/")
async def get_all_users(admin: User = Depends(require_admin)):
    return {"users": []}
