# 📊 Leaderboard Points System

A full-stack web app where users can:

- 🎯 Claim random points
- 🧍 Add new users
- 🏆 View dynamic leaderboard rankings
- 📜 Track claim history (in backend)

---

## 🌐 Live Demo

- **Frontend:** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- **Backend:** [https://leaderboard-task-ten.vercel.app](https://leaderboard-task-ten.vercel.app)

---

## ⚙️ Tech Stack

| Frontend        | Backend           | Database           |
|----------------|-------------------|--------------------|
| ReactJS + Bootstrap | Node.js + Express | MongoDB Atlas (Mongoose) |

---

## 🚀 Features

- Display a list of 10 users with their points
- Add new users from the frontend (saved to MongoDB)
- Click “Claim” to award 1–10 random points to a user
- Points update dynamically and leaderboard reorders automatically
- Claim history is recorded in a separate MongoDB collection

---
## 🔄 API Endpoints

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| GET    | `/api/users`         | Get all users          |
| POST   | `/api/users`         | Add a new user         |
| POST   | `/api/claim/:userId` | Claim random points    |
| GET    | `/api/history`       | (Optional) Get history |

## 💻 Setup
```
git clone https://github.com/Rekhakumari28/Leaderboard.git
cd Leaderboard
npm install
npm run dev
```



