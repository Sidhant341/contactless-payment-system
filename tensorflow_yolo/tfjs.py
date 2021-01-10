import os
os.environ['CUDA_VISIBLE_DEVICES'] = '0'
import cv2
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
from yolov3.utils import detect_image, detect_realtime, detect_video, Load_Yolo_model, detect_video_realtime_mp
from yolov3.configs import *



yolo = Load_Yolo_model()
yolo.summary()
# yolo.save('mymodel.h5')
# filepath = 'tfjs-models2'
# filepath = 'tfjs-models4'
# tf.keras.models.save_model(
#     yolo, filepath, overwrite=True, include_optimizer=True, save_format=None,
#     signatures=None, options=None
# )

# tf.saved_model.save(yolo, 'tfjs-models3')
# tfjs.converters.save_keras_model(yolo, 'tfjs-models')