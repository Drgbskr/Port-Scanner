**Port Scanner**

A basic Port Scanner 🔎 using Python with an Express Server to test!

With this port scanner, I just attempt to connectThis is a form of "reconnaissance" for hackers and penetration testers at various ports, and do nothing else. If I'm able to connect to open ports, then I know at least the port is open.

**Pre-requisites 🚨**

Python >= v2.7.0

Install Python from here.
Node.js >= v0.10.0

Install Node.js from here.
Pip >= v9.0.1

Install pip from here.
**How to run? 🚀**
To run Port Scanner: (Via Terminal)
Open terminal and type npm install: This will install the dependencies (Express).

In the same terminal and type npm start: This will start multiple servers within the given range.

Open another terminal and type python src/scanner.py: Enter localhost or 127.0.0.1. It will scan all the ports and print the open ports.

**Note:** You can enter remote host if you want to scan the ports for any remote host. Check the DISCLAIMER.md before doing this.

**To run Port Scanner: (Via UI)**
Install flask
Make sure you have Python27\Scripts path added to your system's environment variables.

1. In PowerShell,

pip install flask
Install virtual environment
This step is required only if you are using Python2.7, skip this step when running Python3.X.

2. For Python 2, (via pip)

In PowerShell,

pip install virtualenv
virtualenv --help
Kindly check this if pip installation fails.

Create virtual environment
3. Create a venv folder inside src,

python -m virtualenv venv
\Python27\Scripts\virtualenv.exe venv
Activate the virtual environment
4. Activate venv,

venv\Scripts\activate
5. Run mainScanner.py,

pip install flask
python src/mainScanner.py
6. Go to the port url returned by your terminal.

To run IP Scanner:
Open terminal and type python src/ipscanner.py: Enter any IP address XXX.XXX.XXX.YYY. It will scan all the addresses in the range XXX.XXX.XXX.0 to XXX.XXX.XXX.255 and print the addresses which are live.
Configuration ⚙️
The servers are opened at multiple ports, you can change the low range and high range for the ports to be listened by the Express server.

{
    "range": {
        "low": "1",
        "high": "8888"
    },
    "ipRange": {
        "low": "0",
        "high": "255"
    },
    "count": "10",
    "thread": { 
        "count": 8
    }
}
range.low: lowest port number (inclusive)
range.high: highest port number (exclusive)
ipRange.low: lowest IP address range (inclusive)
ipRange.high: highest IP address range (inclusive)
count: total number of ports
thread.count: total number of concurrent threads
