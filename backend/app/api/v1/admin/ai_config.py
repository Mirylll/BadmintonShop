from fastapi import APIRouter, Depends
from app.api.deps import require_admin
from app.models.user import User

router = APIRouter(prefix="/admin/ai", tags=["admin"])


@router.post("/ingest")
async def ingest_product_data(admin: User = Depends(require_admin)):
    """Trigger re-indexing of product data into vector store."""
    return {"message": "Ingestion started"}


@router.get("/config")
async def get_ai_config(admin: User = Depends(require_admin)):
    return {"model": "gpt-4o-mini", "status": "active"}
