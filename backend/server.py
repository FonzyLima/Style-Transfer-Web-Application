from flask import Flask
import random

app = Flask(__name__)

@app.route("/image")
def image():
    return {"Hello":random.randint(0,9)}

if __name__ == "__main__":
    app.run(debug=True)