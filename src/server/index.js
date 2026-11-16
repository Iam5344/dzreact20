const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'profile.json');

app.use(cors());
app.use(express.json());


app.post('/api/update-profile', async (req, res) => {
  try {
    const profileData = req.body;

    await fs.writeFile(DATA_FILE, JSON.stringify(profileData, null, 2), 'utf-8');

    res.status(200).json({ message: 'Профіль успішно збережено!', data: profileData });
  } catch (error) {
    console.error('Помилка запису файлу:', error);
    res.status(500).json({ message: 'Помилка сервера при збереженні профілю' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
