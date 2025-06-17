const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text } = req.body;
 const API_KEY = process.env.GOOGLE_API_KEY;
 // Replace with your actual API key

  const result = await fetch(\`https://translation.googleapis.com/language/translate/v2?q=\${encodeURIComponent(text)}&target=fr&format=text&key=\${API_KEY}\`);
  const data = await result.json();
  res.json({ translated: data.data.translations[0].translatedText });
});

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
