# 🚨 Emergency Hotline Web App

A simple and responsive web app that provides **emergency hotline numbers**, tracks **call history**, and allows users to interact with **coins, hearts, and copy counts**. Built with **HTML, Tailwind CSS, DaisyUI**, and **vanilla JavaScript**.

---

## 🖼 Project Overview

- **Navbar**  
  - Website name & logo on the left  
  - Heart icon 💗, Coin count 🪙 (default: 100), Copy count 📋 on the right  

- **Hero Section**  
  - Full background gradient 🌈  
  - Logo at the top-center  
  - Section title and slogan in the center and bottom-center  

- **Main Section**  
  - **Card Section**: Minimum 6 cards showing  
    - Icon or image  
    - Name & English Name  
    - Hotline number  
    - Category badge  
    - Heart icon 💗  
    - Buttons: Copy 📋 and Call 📞  
  - **History Section**  
    - White background  
    - Title with icon  
    - Clear History button  
  - **Emergency Hotline Section**  

- **Responsiveness** 📱  
  - Fully responsive for mobile devices  

---

## ⚡ Functionalities

### 1. Heart Icons 💗
- Clicking a card's heart icon increases the **heart count** in the navbar.

### 2. Call Buttons 📞
- Clicking a call button:  
  - Shows an alert with service name and number  
  - Deducts **20 coins** per call  
  - If coins < 20 → alert and stop  
  - Adds service to **Call History** with **name, number, and time**  

### 3. Call History 📜
- Displays all called services dynamically  
- Initially empty  
- **Clear History** button removes all history  

### 4. Copy Buttons 📋
- Copies the hotline number to the clipboard  
- Shows an alert when copied  
- Increases **copy count** in navbar  

---

## 🛠 Technology Stack

- **HTML**  
- **CSS**: Tailwind CSS, DaisyUI, or custom vanilla CSS  
- **JavaScript**: Vanilla JS (No framework/library allowed)  

---

## 📝 How It Works

1. **DOM Manipulation**:  
   - `document.getElementById` → select element by ID  
   - `document.getElementsByClassName` → select elements by class  
   - `document.querySelector` → select first matching element  
   - `document.querySelectorAll` → select all matching elements  

2. **Creating Elements**:  
   ```js
   const newElement = document.createElement('div');
   newElement.textContent = 'Hello!';
   parentElement.appendChild(newElement);