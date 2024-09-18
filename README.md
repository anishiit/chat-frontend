# 💬 **Real-time Chat Application**

![Chat App](https://via.placeholder.com/800x400.png?text=Real-time+Chat+App)

**Live Demo**: [Explore the App Here](https://unrivaled-melba-047ef2.netlify.app/)  
⚠️ *Backend deployed on Render (free tier, may take a few seconds to load)*

---

## 🚀 **Overview**
Welcome to the **Real-time Chat Application**—an interactive chat platform that allows users to connect, message, create groups, video call, and even seek therapy assistance via **TheraWin AI ChatBot**. This app is perfect for individuals and groups who value seamless communication with advanced features.

---

## 🌟 **Key Features**

- **Real-time Messaging**: Chat instantly with friends, powered by **Socket.io**.
- **Group Chats**: Create and manage groups effortlessly.
- **TheraWin AI ChatBot**: Get therapy assistance directly from our AI-powered chatbot.
- **Video Calls**: Face-to-face conversations using the built-in **WebRTC** video call feature.
- **Modern UI**: Experience elegant design and fluid animations with **Framer Motion** and **ShadCN UI**.
- **Secure**: Robust authentication with **JWT**.

---

## 🔧 **Tech Stack**

| **Technology** | **Usage** |
| -------------- | --------- |
| **Frontend**   | Next.js, Framer Motion, ShadCN UI |
| **Backend**    | Node.js, Express.js, Socket.io |
| **Database**   | MongoDB |
| **Auth**       | JWT (JSON Web Tokens) |
| **Deployment** | Frontend on Netlify, Backend on Render |

---

## 🛠 **Architecture & Workflows**

### 🔐 **User Authentication Flow**
```mermaid
graph TD;
  A[Sign Up/Login] --> B[JWT Token Issued]
  B --> C[Authenticate User]
  C --> D[Socket.io Connection Established]
