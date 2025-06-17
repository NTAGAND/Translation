# Meet Translate Backend

This is a simple Node.js backend to be deployed on Render.com.

It accepts POST requests with English text and returns a French translation using the Google Translate API.

## How to Deploy on Render

1. Push this folder to GitHub.
2. Go to [https://render.com](https://render.com).
3. Click **New Web Service** and link your GitHub repository.
4. Set the following:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add your **Google Translate API key** in `server.js` where noted.

## API Endpoint

**POST** `/translate`

**Request Body:**
```json
{ "text": "Hello, how are you?" }
```

**Response:**
```json
{ "translated": "Bonjour, comment ça va ?" }
```
