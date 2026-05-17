"""
Script to index product data into vector store for AI chatbot.
Run: python -m ai.ingest
"""

import asyncio
import json


async def ingest_products():
    """Fetch all products from DB and create vector embeddings."""
    # TODO: 
    # 1. Fetch products from database
    # 2. Generate embeddings using OpenAI
    # 3. Store in pgvector
    print("Ingestion script - to be implemented")


if __name__ == "__main__":
    asyncio.run(ingest_products())
