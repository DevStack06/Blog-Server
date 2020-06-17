### The Backend code of the YouTube Series Blog app development from scratch using (Flutter, ExpressJS, NodeJS, MongoDB, Heroku, MongoDB Atlas) :smile: .

### The YouTube Channle Link -: [Channle link](https://www.youtube.com/channel/UCE9YNto5Fc8u7DdOTuCm8rw?view_as=subscriber)

#### Mian Youtube Playlist Link-: [Playlist Link](https://www.youtube.com/playlist?list=PLtIU0BH0pkKoE2PBvgbHEBPAP-sd670VI)

#### Only Backend Development part playlist -: [Playlist Link](https://www.youtube.com/playlist?list=PLtIU0BH0pkKqypuOtDhcXZ4oATJfji49r)

#### Only UI Development part playlist -: [https://www.youtube.com/playlist?list=PLtIU0BH0pkKpitsp5jzt-yDAoXAFBkcPb)

Before going to code make sure to install mongoDB database on your local system :sweat_smile: .For installing mongoDB you can take help from the [This video](https://www.youtube.com/watch?v=3Pol218EKcQ) .For this project I am using the [Mongoose](https://mongoosejs.com/).

Below are the some basic syntax for your help after installing the mongoDB.

- For starting the server
  > sudo service mongod start
- For stoping the server
  > sudo service mongod stop
- For restarting the server
  > sudo service mongod restart

**Note -:Above codes are valid for linux only.For more info, you can follow the official mongoDB website :wink:**

**Fork this repository and then clone it because after forking it you will be updated if i will change the code here:wink:**

## **Back End Code**

Inside the backend folder all the backend codes are available . This is the folder structure of backend code-:

- model
  - All Mongoose model schemas
- routes
  - All end points codes are here(routes folder)
  <!-- - uploads
  - After uploading any profile picture the image will be stored in this folder -->
- index.js file (main Source file)
- middleware.js (middleware for token validation)
- config.js(helper function for middleware.js file)

**To run the backend server on system ip and port 5000**

```javascript
app.listen(PORT, "0.0.0.0", () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
```

**However if you want to run the server on localhost just replace the above code with the following code**

```javascript
app.listen(PORT, () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
```

For executing the backend server you have to execute the following codes-:

1. For installing all the necessary npm packages-

> \$ npm install

2.Now,the app is connected to the local mongoDb databse .You must start the mongoDb server before running the backend server .

> sudo service mongod start

3. Below given,is the code of connecting the mongoDB with nodeJs (index.js file) for more details you can follow this video [Link](https://www.youtube.com/watch?v=kFJaXNP_YpI&t=1s)-:

```javascript
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
```

**Note: You can also connect the remote mongoDb server to NodeJs app ,for that you can take help of this video [Link](https://www.youtube.com/watch?v=8hYmtIi9Pfk&t=43s)**

4. Start the server by using below code

> \$ npm run dev

5. It will launch the server on [http://[Your IP address]:5000](http://localhost:5000) this url.

**Note -: Make sure you Subscribed my YouTube channle also give star to this repository :sweat_smile:**
