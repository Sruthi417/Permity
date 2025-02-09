from fastapi import FastAPI, File, HTTPException, Request, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
import uvicorn
app = FastAPI()
from google import genai
client = genai.Client(api_key="AIzaSyDEsIUmzR670vfVqyd13QR52rt1GKIuUIw")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




class LetterInfo(BaseModel):
    prompt: str

@app.post("/letter")
async def create_letter(letter_info : LetterInfo):
    response = client.models.generate_content(
    model="gemini-1.5-pro",
    contents=[letter_info.prompt])
    print(response.text)
    return response.text
# app.mount("/", StaticFiles(directory="static"), name="static")
# uvicorn.run(app, port=8000)