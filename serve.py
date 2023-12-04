#!/usr/bin/env python3
import sys, webbrowser, http.server as hs, socketserver as ss

# open tmp.html in the default browser
path = sys.argv[1] if len(sys.argv) > 1 else ""
webbrowser.open("http://127.0.0.1:8000/" + path)

# minimal web server, for files in current dir
ss.TCPServer.allow_reuse_address = True
httpd = ss.TCPServer(("", 8000), hs.SimpleHTTPRequestHandler)
print("serving at port", 8000)
httpd.serve_forever()

