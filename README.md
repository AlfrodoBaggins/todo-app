## Install Dependencies
`pip install fastapi uvicorn sqlalchemy`
`pip install alembic`

## Run Local API Server
`uvicorn main:app --reload`

## Any change to model.py run..
1. Run: `alembic revision --autogenerate -m "Describe the change"`
2. Then: `alembic upgrade head`

## Run Dev Server
`npx nuxi cleanup; yarn dev`
