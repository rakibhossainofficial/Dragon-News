
<h3>Dragon News</h3>

# 📰 News Application

A modern **News Application** built with **React.js**, styled using **Tailwind CSS**, and powered by **Firebase Authentication**. The app delivers dynamic news content with seamless navigation, authentication features, and a clean UI.

---

## 🚀 Features

* **Dynamic News Content** – Browse and read news dynamically based on navigation.
* **Authentication System** –

  * Register and Login with email & password.
  * Sign out functionality.
  * **Google Authentication** integrated via Firebase.
* **Private Routes** – Secure routes accessible only to logged-in users.
* **User Profile Display** – After login, users can see their name and profile photo.
* **Realtime Date Display** – Keeps track of the current date dynamically.


---

## 🛠️ Tech Stack

* **Frontend**: React.js, Tailwind CSS
* **Routing**: React Router
* **Authentication**: Firebase Authentication (Email/Password & Google Login)
* **State Management**: React Hooks & Context API 

---

## 📂 Project Structure

```bash
├── public/               # Static assets  
├── src/  
│   ├── components/       # Reusable UI components  
│   ├── pages/            # Application pages (Home, Login, Register, etc.)  
│   ├── routes/           # Private and public route handling  
│   ├── App.js            # Main app component  
│   ├── main.jsx          # Entry point  
│   └── ...  
├── package.json  
└── tailwind.config.js  
```

---

## ⚡ Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/news-application.git
cd news-application
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Firebase Setup

* Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
* Enable **Email/Password** and **Google Authentication**
* Add your Firebase config to your project (usually in a `.env.local` file):

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

### 4️⃣ Run the Application

```bash
npm run dev
```



---

## 🔐 Authentication Flow

* **Public Routes**: Home, Login, Register
* **Private Routes**: Profile, News Details

---

## 📸 Screenshots

<img src="https://i.ibb.co/6R9fwwCS/Screenshot-2025-09-09-033324.png" alt="Home page" />
<img src="https://i.ibb.co/9Hryy5YV/Screenshot-2025-09-09-033351.png" alt="News Details" />
<img src="https://i.ibb.co/8DmmhPmy/Screenshot-2025-09-09-033416.png" alt="Login Page" />



