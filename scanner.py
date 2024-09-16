import socket

def scan_port(host, port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(2)
        try:
            s.connect((host, port))
            return True
        except (socket.timeout, socket.error):
            return False

def scan_ports(host, ports):
    for port in ports:
        if scan_port(host, port):
            print(f"Port {port} is open on {host}")
        else:
            print(f"Port {port} is closed on {host}")

host = 'localhost'  # Change to the target host
ports = [22, 80, 443, 8080]  # Change to the ports you want to scan

scan_ports(host, ports)
