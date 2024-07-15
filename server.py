import http.server
import socketserver
import os
import sys
import signal
import subprocess
import argparse

PORT = 8000


def kill_process_on_port(port):
    """Kill the process running on the given port."""
    try:
        result = subprocess.check_output(["lsof", "-t", f"-i:{port}"])
        if result:
            pid = int(result.strip())
            os.kill(pid, signal.SIGKILL)
            print(f"Killed process {pid} running on port {port}")
    except subprocess.CalledProcessError:
        print(f"No process is running on port {port}")
    except Exception as e:
        print(f"Error: {e}")


def start_server(port):
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", port), Handler) as httpd:
        print(f"Serving at port {port}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("Shutting down server...")
            httpd.shutdown()
            print("Server shut down")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Simple HTTP Server with kill option.")
    parser.add_argument(
        "--kill",
        action="store_true",
        help="Kill the process running on the specified port.",
    )
    args = parser.parse_args()

    if args.kill:
        kill_process_on_port(PORT)
    else:
        start_server(PORT)
