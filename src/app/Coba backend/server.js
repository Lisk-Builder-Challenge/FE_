const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simpan data
app.post('/data', (req, res) => {
  fs.writeFileSync('data.json', JSON.stringify(req.body));
  res.json({ message: "Data disimpan" });
});

// Ubah data
app.put('/data', (req, res) => {
  fs.writeFileSync('data.json', JSON.stringify(req.body));
  res.json({ message: "Data diubah" });
});

// Ambil data
app.get('/data', (req, res) => {
  if (fs.existsSync('data.json')) {
    const data = fs.readFileSync('data.json');
    res.json(JSON.parse(data));
  } else {
    res.json({ message: "Belum ada data" });
  }
});

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
