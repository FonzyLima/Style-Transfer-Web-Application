from flask import Flask
import random

app = Flask(__name__)

@app.route("/image",methods=["POST","GET"])
def image(data):
    return {data}

if __name__ == "__main__":
    app.run(debug=True)