import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    port = PORT
    for attempt in range(10):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                print("=" * 60)
                print(f"🌿 PectiShield™ Web App is running!")
                print(f"👉 Local URL: http://localhost:{port}")
                print(f"👉 Directory: {DIRECTORY}")
                print("=" * 60)
                print("Tekan Ctrl+C untuk menghentikan server.")
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\nServer dihentikan.")
                break
        except OSError:
            port += 1

if __name__ == "__main__":
    run()
