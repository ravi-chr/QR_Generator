# ⚡ QR Code Generator

A fast, modern QR Code Generator built with **React + TypeScript**, powered by **Vite** and styled using **Tailwind CSS**. This app allows users to generate and scan QR codes for various content types like URLs, text, emails, and more.

### 🌐 Live Site
👉 [Try it Live](https://qr-code-generator-orcin-three.vercel.app/)

---

## 📂 Folder Structure

```bash
QR-CODE-GENERATOR/
├── node_modules/
├── public/
├── src/
│ ├── components/ # React components
│ ├── i18n/ # Internationalization config
│ ├── App.tsx # Main App component
│ ├── main.tsx # Entry point
│ ├── index.css # Tailwind base styles
│ └── vite-env.d.ts # Vite TypeScript env types
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```


---

## 🚀 Features

- ✅ Generate QR codes for:
  - URLs, text, email, phone, location, etc.
- 🎨 Customization:
  - Change colors, size, and optionally embed a logo.
- 📷 QR Scanning:
  - Scan using your **camera** or by uploading a QR image.
- 💾 Download as PNG
- 📱 Fully responsive UI
- 🌐 Vercel hosted for blazing-fast access

---

## 🛠️ Tech Stack

- **Framework**: React (with TypeScript)
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **QR Generator**: `qrcode.react` or similar
- **QR Scanner**: `react-qr-reader` or similar
- **Deployment**: Vercel

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
```
2. Install Dependencies
```bash
npm install
# or
yarn install
```
3. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Then open http://localhost:5173 in your browser.

📦 Build for Production
```bash
npm run build
```
To preview the build:

```bash
npm run preview
```
🤝 Contributing
- Fork this repo
- Create a new branch (git checkout -b feature/feature-name)
- Make your changes
- Commit and push
- Submit a Pull Request 🚀

💬 Contact
For any questions or suggestions, feel free to reach out at:
📧 smohithreddy000@gmail.com
