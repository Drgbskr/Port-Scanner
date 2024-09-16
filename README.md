Project Description
PortScanner is a network scanning tool designed to identify open ports on a target system. Ports are critical to network communication, and knowing which ports are open on a system can help in assessing security or troubleshooting network issues. This project aims to provide a simple yet effective solution for scanning ports using both Python and npm (Node.js).

Key Objectives:
Identify Open Ports: Determine which ports on a target system are open and listening for connections.
Support for TCP and UDP: Implement scanning for both TCP and UDP ports to cover a wide range of use cases.
User Interface: Provide an easy-to-use interface for interacting with the port scanner, utilizing npm and Node.js for frontend functionality.
Implementation
The project is implemented using a combination of Python and npm (Node.js), leveraging the strengths of both to create a functional and user-friendly port scanning tool.

1. Python Implementation
Python is used for the core functionality of the port scanner due to its simplicity and effectiveness in handling network tasks.

Scanner Logic: The Python script (scanner.py) performs the actual port scanning. It creates connections to the specified ports and determines if they are open or closed.

TCP Scanning: Uses the socket library to attempt connections to target ports. If the connection is successful, the port is considered open.
UDP Scanning: Also uses the socket library but with different handling to detect open UDP ports. UDP scanning may involve sending packets and waiting for responses.
Configuration: Parameters such as target IP address and port range are defined within the script or provided by the user during execution.

2. npm (Node.js) Implementation
npm (Node.js) is used for the frontend interface and additional functionalities, making it easier for users to interact with the port scanner.

Frontend Interface: Provides a web-based interface to configure and start the port scan. It allows users to input the target IP address, select the type of scan (TCP/UDP), and view results.

Server: An npm server is set up to serve the frontend application. This server interacts with the Python backend to send scan requests and display results.
User Experience: The interface is designed to be intuitive, offering clear options for starting and managing scans.
Integration: The frontend communicates with the Python backend through API calls or local connections. This integration allows users to start scans and view results directly from the web interface.

3. Workflow
User Input: The user enters the target IP address and port range through the npm-based web interface.
Initiate Scan: The frontend sends the scan request to the Python backend.
Perform Scan: The Python script executes the port scanning process, checking each port in the specified range.
Return Results: The results are sent back to the frontend and displayed to the user, showing which ports are open and which are closed.
