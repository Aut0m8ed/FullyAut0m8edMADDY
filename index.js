const express = require('express');
const bodyParser = require('body-parser');
const phemexBot = require('./phemexBot');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/test-trade', async (req, res) => {
    try {
        const result = await phemexBot.executeTestTrade();
        res.json({ success: true, tradeId: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Bot backend running on port ${PORT}`);
});