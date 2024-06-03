import express from 'express';
import { publicIpv4 } from 'public-ip';
import cors from 'cors';
const app = express();

app.set("trust proxy", true);
app.use(cors());

app.get('/', async (req, res) => {
    const ip = req.ip;
    res.send(`Tu IP es: ${ip}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
