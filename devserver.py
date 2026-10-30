import http.server
import functools
import os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    handler = functools.partial(NoCacheHandler, directory=".")
    http.server.test(HandlerClass=handler, port=port)
