const WebSocket = require('ws');

// WebSocketサーバーをポート8080で立ち上げる
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client connected');

    // サンプルの姿勢データを定期的に送信
    setInterval(() => {
        const postureData = {
            rotationX: Math.random() * 360,
            rotationY: Math.random() * 360,
            rotationZ: Math.random() * 360,
            posX: 0,
            posY: 0,
            posZ: 0
        };

        ws.send(JSON.stringify(postureData));
    }, 1000); // 毎秒送信
});

console.log('WebSocket server is running on ws://localhost:8080');
