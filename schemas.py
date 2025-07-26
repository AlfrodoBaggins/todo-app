from pydantic import BaseModel, EmailStr

class TodoBase(BaseModel):
    task: str
    done: bool = False

class TodoCreate(TodoBase):
    pass

class TodoOut(TodoBase):
    id: int

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    email: EmailStr
    username: str

class UserCreate(UserBase):
    username: str
    password: str

class UserOut(UserBase):
    id: int

    class Config:
        orm_mode = True
