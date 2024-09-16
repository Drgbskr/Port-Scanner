const net = require('net');

function scanPort(host, port, callback) {
    const socket = new net.Socket();
    let timeout = setTimeout(() => {
        socket.destroy();
        callback(false);
    }, 2000);

    socket.on('connect', () => {
        clearTimeout(timeout);
        socket.destroy();
        callback(true);
    }).on('error', () => {
        clearTimeout(timeout);
        callback(false);
    }).connect(port, host);
}

function scanPorts(host, ports) {
    ports.forEach(port => {
        scanPort(host, port, (open) => {
            if (open) {
                console.log(`Port ${port} is open on ${host}`);
            } else {
                console.log(`Port ${port} is closed on ${host}`);
            }
        });
    });
}

const host = 'localhost'; // Change to the target host
const ports = [22, 80, 443, 8080]; // Change to the ports you want to scan

scanPorts(host, ports);
