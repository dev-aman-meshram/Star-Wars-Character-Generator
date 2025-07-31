# star-wars-character-generator
Star Wars Character Generator in HTML/CSS, jQuery, &amp; React. A comparative project showcasing frontend evolution from static styling to dynamic, component-based UIs. Explore diverse web dev approaches in one repo.
# ⭐ Star Wars Character Generator: Multi-Technology Showcase

This repository presents a comparative study of three distinct implementations of a **Star Wars Character Generator**, each built with a different core frontend technology:

- **HTML/CSS/JavaScript**
- **jQuery**
- **React**

The project demonstrates the evolution of web development practices, API integration, and the shift from direct DOM manipulation to component-based architectures.
---

## 🚀 Project Overview

All versions fetch and display random Star Wars character details (name, height, homeworld, gender, image, etc.) from public APIs.

---

## 📂 Project Structure

```
.
├── html-css-js-version/   # Pure HTML, CSS, and vanilla JavaScript
│   ├── index.html
│   ├── style.css
│   └── app.js
├── jquery-version/        # HTML, CSS (inline), and jQuery
│   └── index.html
├── react-version/         # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── google.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── .gitignore
```

---

## ✨ Version Details & Features

### 1️⃣ HTML/CSS/JavaScript Version

- **Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+), [SWAPI](https://swapi.py4e.com), [Akabab Star Wars API](https://akabab.github.io/starwars-api/)
- **Features:**
  - Generates a random Star Wars character on button click
  - Displays comprehensive details: Name, Birth Year, Gender, Hair/Skin/Eye Color, Height, Mass, Homeworld
  - Fetches character images with fallback placeholder
  - Loading spinner during API fetches
  - Responsive design
  - Basic footer with social links
- **How to Run:**  
  1. Navigate to `html-css-js-version/`
  2. Open `index.html` in your browser (no server needed)

---

### 2️⃣ jQuery Version

- **Technologies:** HTML5, CSS (inline), jQuery (via CDN), [Akabab Star Wars API](https://akabab.github.io/starwars-api/)
- **Features:**
  - Generates a random character (Name and Image) on button click
  - Uses jQuery’s `$.get()` for API calls
  - Simplified code for dynamic UI updates
- **How to Run:**  
  1. Navigate to `jquery-version/`
  2. Open `index.html` in your browser (no server needed, jQuery loaded via CDN)

---

### 3️⃣ React Version

- **Technologies:** React.js (Class Components), JavaScript (ES6+), [Akabab Star Wars API](https://akabab.github.io/starwars-api/)
- **Features:**
  - Generates a random character (Name, Height, Homeworld, Image)
  - Manages data using React state
  - Error messages for failed API fetches
  - "Generate Character" button triggers API calls and state updates
- **How to Run:**  
  1. Ensure [Node.js](https://nodejs.org/) is installed
  2. Open terminal and navigate to `react-version/`
  3. Install dependencies:  
     ```
     npm install
     
     ```
  4. Start the development server:  
     ```
     npm start
     ```

  5. Visit [http://localhost:3000](http://localhost:3000) in your browser

---

## 💡 Comparison & Learning Points

- **DOM Manipulation:**  
  - Vanilla JS: `document.getElementById`
  - jQuery: `$()`, `.attr()`, `.text()`
  - React: Declarative UI, state-driven rendering

- **Code Organization:**  
  - Monolithic HTML files → Modular JS functions → Componentized React structure

- **State Management:**  
  - Global variables & direct DOM updates (Vanilla/jQuery) vs. React’s state

- **Developer Experience:**  
  - Setup, tooling, and workflow differences across technologies

This project is a hands-on case study for understanding the evolution and trade-offs in frontend development.

---

## ⚙️ Installation & Setup (Overall Repository)

To run all versions locally:

1. **Clone the repository:**
   ```
   git clone [https://github.com/meshram-aman/star-wars-character-generator].git
   cd star-wars-character-generato
   ```
2. Follow the "How to Run" instructions for each version above.

---

## 🤝 Contributing

Contributions are welcome!  
If you have suggestions or find issues, please open an issue or submit a pull request.

---

## 📸 Screenshots

<!-- Add screenshots here if available -->

---

## 📜 License

[MIT](LICENSE)

---
