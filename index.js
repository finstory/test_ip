import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set("trust proxy", true);
app.use(cors());

app.get('/', async (req, res) => {
    const ip = req.ip;
    const url = `https://api.ipdata.co/${ip}?api-key=${process.env.IP_KEY}`;
    const response = await axios.get(url);
    res.send(response.data);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
