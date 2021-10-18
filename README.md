# PhotoManagementSystem
This a Photo Management System that allows users to upload their photos in MongoDB Atlas Database through a web-application made with Expess Node.js.

# 1. Prerequisites
1. You should have Node.js and npm installed on your system. For Information on installation, read https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. You should have an account created on MongoDB Atlas . For Information on Account and cluster creation, read https://www.knowi.com/blog/getting-started-with-mongodb-atlas-overview-and-tutorial/
. After following the instructions, keep your username and password ready as they will required further.

# 1. Setting up the Environment
After Locally installing the repo, navigate to Photo_Management_System\server\database\database.js . In the line 6, replace "YOUR USERNAME"  and "YOUR PASSWORD" with your username and password repectively.
```
 const con = await mongoose.connect("mongodb+srv://<YOUR USERNAME>:<YOUR PASSWORD>@cluster0.afdor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
```

# 2. Starting the server
In the CMD/Terminal, navigate to the Photo_Management_System Folder.

#### Run the following :
```
npm start
```
Open a brower and open localhost 3000 port or http://localhost:3000/ .
#### You should see the interface as below :
![Preview image](https://github.com/rushabhj-hub/PhotoManagementSystem/blob/main/Photo_Management_System/first.png)


# 3. Executing the functionalities
Now you can add images to your database. All images will be visible as you add them. Use the Filter Options available as required.
![After uploading photos](https://github.com/rushabhj-hub/PhotoManagementSystem/blob/main/Photo_Management_System/second.png)
You can go and check the metadata of the image objects in your MongoDB Atlas.
