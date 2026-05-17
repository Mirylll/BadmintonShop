from pydantic import BaseModel
from typing import Optional


class ProductBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    price: float
    compare_price: Optional[float] = None
    images: Optional[str] = None
    stock: int = 0
    category_id: Optional[int] = None


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: Optional[str] = None
    slug: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    compare_price: Optional[float] = None
    images: Optional[str] = None
    stock: Optional[int] = None
    category_id: Optional[int] = None
    is_active: Optional[bool] = None


class ProductResponse(ProductBase):
    id: int
    is_active: bool

    class Config:
        from_attributes = True
