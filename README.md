# Project-4Sem


Got it! I'll create a **Node.js backend** with **Express** and **MongoDB**, including:  

✅ **User Management** (CRUD operations for users)  
✅ **Real-Time Updates** using **Socket.io**  
✅ **MongoDB Database** with a **Users Collection**  
✅ **JWT Authentication** for secure access  

I'll generate the backend files now. Give me a moment! ⏳🚀

Here's a **Node.js + Express + MongoDB** backend for your React frontend with **real-time updates** using **Socket.io** and a **Users collection**.

---

### 📁 Folder Structure  
```
Backend/
│── server.js
│── config/
│   └── db.js
│── models/
│   └── User.js
│── routes/
│   └── userRoutes.js
│── controllers/
│   └── userController.js
│── middleware/
│   └── authMiddleware.js
│── .env
│── package.json
```

---

### 1️⃣ **Install Dependencies**  
Run this inside your **backend folder**:
```sh
npm init -y
npm install express mongoose dotenv cors bcryptjs jsonwebtoken socket.io
```

---

### 2️⃣ **Database Connection (config/db.js)**
Create `config/db.js`:
```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

### 3️⃣ **User Model (models/User.js)**
```js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
```

---

### 4️⃣ **User Routes (routes/userRoutes.js)**
```js
const express = require("express");
const { registerUser, loginUser, getUsers } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);

module.exports = router;
```

---

### 5️⃣ **User Controller (controllers/userController.js)**
```js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

---

### 6️⃣ **Socket.io for Real-Time Updates (server.js)**
```js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("message", (data) => {
    io.emit("message", data); // Broadcast message to all clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### 7️⃣ **Environment Variables (.env)**
Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

### 8️⃣ **Run the Server**
```sh
node server.js
```

---

### 9️⃣ **How to Use Real-Time Updates**
On the **client-side (React.js)**, connect to the **Socket.io server**:
```js
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("message", (data) => {
  console.log("Received real-time update:", data);
});

// Send a real-time update
socket.emit("message", { text: "Hello from client!" });
```

---

### 🎯 **Features Implemented**
✅ **User Registration & Login** (JWT Auth)  
✅ **MongoDB User Storage**  
✅ **Real-Time Updates via WebSockets**  
✅ **REST API Endpoints**  
