# MoboShop
Our NW Hacks project - a new way to shop!

Have you ever found yourself in long checkout lines? Not Anymore.
We offer an innovative way to shop without having to wait in long lines anymore. Just launch our app, 
snap your phone onto any shopping cart and start shopping!

Our solution consists of using object detection to automatically sense what you are putting inside your
shopping cart through your cellphone camera, and once you are done shopping just tap checkout and you're
on your way!

Existing autonomous checkout solutions are expensive or require a lot of hardware. Our app suggests
a much more economically viable alternative by using the customer's phone as a means to shop.


# Awards Won

## <div align="center" style="font-size: 30px">🏆Honorable Mention at nwHacks 2021🏆</div>
### <div align="center" style="font-size: 15px">Western Canada's Largest Hackathon with ~ 800 participants </div>
### <div align="center" ><img src ="https://user-images.githubusercontent.com/48921721/107247834-c0cd5500-6a42-11eb-8cbc-cfb46ddd7e73.png" style="vertical-align:middle; align:center"></div>

#### <div align="center" >https://devpost.com/software/moboshop</div>


## Model

![alt text](https://lucidworks.com/wp-content/uploads/2019/05/tf_logo_1200x420.png)

The Model we used is a custom YOLO-v3Tiny model implemented in Tensorflow. Originally the Yolov3 model has been popularly implemented
in DarkNet and pre-trained on the COCO Dataset. We chose Tensorflow so that we could run the model using TensorflowJS on mobile.
You can find the open source files for building the custom model in the github repo posted below. Shout out to Python Lessons!

https://github.com/pythonlessons/TensorFlow-2.x-YOLOv3

For the dataset we scrapped over 500 images over 5 classes for the demo. We have included the tfjs model files along with the keras h5 file.
Similarly you can run the custom model for detection by cloning the files from the above repo.

We chose the YOLO model as its very lightweight compared to other models such as RCNN's which is important during real-time prediction.
This model in the original research paper is said to have achieved a prediction rate of 220 FPS on modern GPU's!

## App

The Front-end App was built using React and the Ionic Framework which makes it easier to deploy on both Android, ios and Web.

The Back-end was created using Node.js and uses PostgreSQL as a Database.

