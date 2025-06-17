const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const API_KEY = process.env.GOOGLE_API_KEY; // ✅ pulled from Render

app.post("/translate", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      {},
      {
        params: {
          q: text,
          target: "fr",
          format: "text",
          key: API_KEY
        }
      }
    );

    const translated = response.data.data.translations[0].translatedText;
    res.json({ translated });
  } catch (error) {
    console.error("Translation error:", error.message);
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/translate', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await axios.post('https://translation.googleapis.com/language/translate/v2', null, {
      params: {
        q: text,
        target: 'fr',
        key: process.env.GOOGLE_API_KEY
      }
    });
    const translated = response.data.data.translations[0].translatedText;
    res.json({ translated });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Translation failed' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});


