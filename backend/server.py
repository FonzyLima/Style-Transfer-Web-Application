from flask import Flask, flash, request, redirect, url_for, session, send_file
from werkzeug.utils import secure_filename

import logging
import random
import os
import tensorflow_hub as hub
import tensorflow as tf
from matplotlib import pyplot as plt
import numpy as np
import cv2
from werkzeug.utils import secure_filename
UPLOAD_FOLDER = './uploads'
STYLE_FOLDER = "./styles"
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config["STYLE_FOLDER"] = STYLE_FOLDER
model = hub.load('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')
@app.route("/image",methods=["POST","GET"])
def image():
    files = request.files["file"]
    styles = request.files["style"]
    print(styles.filename)
    print(files.filename)
    # filename = secure_filename(files.filename)
    # stylename = secure_filename(styles.filename)
    # files.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    # styles.save(os.path.join(app.config['STYLE_FOLDER'], stylename))
    # content_img = tf.io.read_file(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    content_img = tf.image.decode_image(files, channels=3)
    content_img = tf.image.convert_image_dtype(content_img, tf.float32)
    content_img = content_img[tf.newaxis, :]
    # style_img = tf.io.read_file(os.path.join(app.config['STYLE_FOLDER'], stylename))
    style_img = tf.image.decode_image(styles, channels=3)
    style_img = tf.image.convert_image_dtype(style_img, tf.float32)
    style_img = style_img[tf.newaxis, :]
    stylized_image = model(tf.constant(content_img), tf.constant(style_img))[0]
    cv2.imwrite('generated_img.jpg', cv2.cvtColor(np.squeeze(stylized_image)*255, cv2.COLOR_BGR2RGB))
    response={"HEllo":"success"}
    return response

@app.route("/get/<filename>",methods=["GET"])
def get_image(filename):
    filen = "./"+filename+".jpg"
    print("HEREE")
    return send_file(filen)
    
if __name__ == "__main__":
    app.run(debug=True)