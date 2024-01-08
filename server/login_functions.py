from fastapi import APIRouter, HTTPException, status

router = APIRouter()
BASE_PATH = "http://localhost:3000/"


@router.post(f"{BASE_PATH}login")
def login(email, password):
    
    user = authenticate_user(email, password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password ",
            headers={"WWW-Authenticate": "Bearer"}, )
    return {"success": True, "user": user}