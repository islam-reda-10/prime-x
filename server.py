#!/usr/bin/env python3
"""
Simple local web server for testing Prime X Gym website
Usage: python3 server.py
Then open: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def main():
    # Change to the script's directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("🏋️  Prime X Gym - Local Development Server")
        print("=" * 60)
        print(f"\n✅ Server running at: http://localhost:{PORT}")
        print(f"\n📱 To test on mobile:")
        print(f"   1. Make sure your phone is on the same WiFi")
        print(f"   2. Find your computer's local IP address")
        print(f"   3. Open http://YOUR_IP:{PORT} on your phone")
        print(f"\n🛑 Press Ctrl+C to stop the server\n")
        print("=" * 60)
        
        # Try to open browser automatically
        try:
            webbrowser.open(f'http://localhost:{PORT}')
            print("✅ Opening browser...")
        except:
            print("ℹ️  Please open http://localhost:{PORT} in your browser")
        
        print("\n⏳ Serving... (watching for requests)\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Server stopped. Goodbye! 👋\n")

if __name__ == "__main__":
    main()
