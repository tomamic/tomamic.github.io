#!/usr/bin/env python3
import sys, webbrowser, http.server as hs, socketserver as ss

# open tmp.html in the default browser
webbrowser.open("http://127.0.0.1:8000/" + (len(sys.argv) > 0 and sys.argv[1]))

# minimal web server, for files in current dir
ss.TCPServer.allow_reuse_address = True
httpd = ss.TCPServer(("", 8000), hs.SimpleHTTPRequestHandler)
print("serving at port", 8000)
httpd.serve_forever()

