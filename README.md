# 🧠 ChillPill AI – Your Supportive AI Companion

ChillPill AI is an **interactive and empathetic web-based chatbot** that provides **mental wellness support**. It detects the user's mood, offers **personalized activities**, and provides a safe, supportive space with a **modern, responsive UI**.

---

## ✨ Features

-   🧠 **Real-time Mood Detection** – Understands emotions (happy, sad, anxious) from user messages.
-   🙂 **Dynamic Mood Indicator** – A visual emoji that fills a circular border as the user's mood improves.
-   🎮 **Personalized Activity Suggestions** – Offers interactive suggestions like games, music, memes, and journaling.
-   🎨 **Modern UI/UX** – Features a hover-to-expand sidebar, an animated emoji background, and a dynamic input bar.
-   ❤️ **Crisis Intervention Support** – Detects messages indicating a crisis and provides immediate helpline information.
-   📓 **Private Journal** – An integrated journal for users to write down their thoughts, with AI-powered summarization.

---

## 🛠️ Tech Stack

-   **Frontend:** React.js, CSS
-   **Backend:** Python (Flask)
-   **AI Model:** Google Gemini API
-   **APIs:** Audius (for music), Giphy (for memes)
-   **Client-side Storage:** Session Storage (for chat history)

---

## 📂 Project Structure

```
Gen-AI-Chill-Pill/
│
├── backend/              # Flask server
│   ├── app.py            # Main backend file
│   └── requirements.txt  # Python dependencies
│
├── frontend/             # React client
│   ├── src/              # React source code
│   ├── public/           # Static assets
│   └── package.json      # Node dependencies
│
├── .gitignore
└── README.md             # Project documentation
```

---

## 🚀 Quick Start

Run ChillPill AI locally in **3 main steps**:

```bash
# 1. Clone the repository
git clone [https://github.com/your-username/Gen-AI-Chill-Pill.git](https://github.com/your-username/Gen-AI-Chill-Pill.git)
cd Gen-AI-Chill-Pill

# 2. Setup and run the Backend (in one terminal)
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
pip install -r requirements.txt
python app.py

# 3. Setup and run the Frontend (in a new terminal)
cd ../frontend
npm install
npm start
```

👉 **Backend** will be running on: `http://127.0.0.1:5000`
👉 **Frontend** will be running on: `http://localhost:3000`

---

## ⚙️ Detailed Installation

### **Backend (Flask)**

1.  Navigate to the backend directory:
    `cd backend`
2.  Create and activate a virtual environment:
    -   Windows: `python -m venv venv` then `venv\Scripts\activate`
    -   macOS/Linux: `python3 -m venv venv` then `source venv/bin/activate`
3.  Install dependencies:
    `pip install -r requirements.txt`
4.  Create a `.env` file and add your Google API key:
    `GOOGLE_API_KEY="YOUR_API_KEY_HERE"`
5.  Run the server:
    `python app.py`

### **Frontend (React)**

1.  Navigate to the frontend directory:
    `cd frontend`
2.  Install dependencies:
    `npm install`
3.  Run the client:
    `npm start`

---

## 📸 Screenshots

*(You can add screenshots of your application here later)*




---

## 🤝 Contributing

Contributions are welcome! Please feel free to fork this repository and open a pull request.

1.  Fork the repository
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 💡 Acknowledgements

-   Google Gemini API
-   Audius API
-   Giphy API

---

## 🌟 Support

If you like this project, please give it a star ⭐ on GitHub and share it with others!
