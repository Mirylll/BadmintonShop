"""
Embedding utilities for vector search.
"""

from typing import list


async def generate_embedding(text: str) -> list[float]:
    """Generate embedding vector for text using OpenAI."""
    # TODO: Implement with OpenAI embeddings API
    return []


async def generate_product_embedding(product: dict) -> list[float]:
    """Generate embedding for a product based on name, description, specifications."""
    text = f"{product['name']} {product.get('description', '')} {product.get('specifications', '')}"
    return await generate_embedding(text)
