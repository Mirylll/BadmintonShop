from fastapi import APIRouter, Depends
from app.api.deps import require_admin
from app.models.user import User

router = APIRouter(prefix="/admin/categories", tags=["admin"])


@router.post("/")
async def create_category(admin: User = Depends(require_admin)):
    return {"message": "Category created"}
