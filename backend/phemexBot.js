const crypto = require('crypto');
const axios = require('axios');

const API_KEY = process.env.PHEMEX_API_KEY;
const API_SECRET = process.env.PHEMEX_API_SECRET;

function generateSignature(timestamp, method, path, queryString = '', body = '') {
    const payload = `${timestamp}${method}${path}${queryString}${body}`;
    return crypto.createHmac('sha256', API_SECRET).update(payload).digest('hex');
}

async function executeTestTrade() {
    const timestamp = Date.now().toString();
    const method = 'POST';
    const path = '/orders';
    const body = JSON.stringify({
        symbol: 'BTCUSDT',
        side: 'Buy',
        type: 'Market',
        quantity: 0.001
    });

    const signature = generateSignature(timestamp, method, path, '', body);

    const headers = {
        'x-phemex-access-token': API_KEY,
        'x-phemex-request-expiry': timestamp,
        'x-phemex-request-signature': signature,
        'Content-Type': 'application/json'
    };

    const url = 'https://api.phemex.com' + path;

    const response = await axios.post(url, body, { headers });
    return response.data.data.orderID;
}

module.exports = { executeTestTrade };
