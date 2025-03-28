# VocaSpeak

Bridging Voices, Connecting Worlds

---

## **Overview**
VocaSpeak is a cutting-edge translation and voice recognition web application designed to break language barriers and enable seamless communication. With features like real-time translation, speech recognition, and audio playback, VocaSpeak connects people across the globe, fostering understanding and collaboration.

---

## **Features**
- **Text Translation**: Translate text between multiple languages including English, Hindi, Spanish, French, German, and Chinese.
- **Speech Recognition**: Convert spoken words into text for easy translation.
- **File Upload Support**: Upload `.txt` and `.rtf` files for direct text extraction and translation.
- **Audio Playback**: Listen to the source and translated text in selected languages.
- **Feedback System**: Provide feedback with options to like, dislike, or save translations as favorites.
- **Dynamic Language Selector**: Choose target languages dynamically from a dropdown menu.
- **User-Friendly Interface**: Responsive and intuitive design optimized for all devices.

---

## **Technologies Used**
- **Frontend**: React, Next.js, TypeScript, TailwindCSS
- **Libraries**: 
  - `@tabler/icons-react` for interactive icons
  - `react-toastify` for notifications
  - `speech-synthesis` for audio playback
- **Hooks**: Custom hooks for managing translations and state
- **Utilities**: RTF to text conversion for file uploads

---
## Screenshots

### Home Page

![Screenshot 2025-03-29 044532](https://github.com/user-attachments/assets/0845f27b-95d4-497b-ae4e-5d0674f4ab51)
")

---
## **Getting Started**

### **Prerequisites**
Ensure you have the following installed on your system:
- Node.js (v14 or higher)
- npm, yarn, or pnpm

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/harshhere905/VocaSpeak.git
   ```
2. Navigate to the project directory:
   ```bash
   cd VocaSpeak
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### **Running the Development Server**
Start the application locally:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## **Usage**
### **1. Input Text or Speech**
- Enter text manually or use the speech recognition feature.
- Upload files to extract and translate text directly.

### **2. Select Target Language**
- Choose from a variety of supported languages via the dropdown menu.

### **3. Translate and Listen**
- Click on the "Translate" button to get instant translations.
- Play audio for both the source and translated text.

### **4. Provide Feedback**
- Like, dislike, or save translations as favorites for future reference.

---

## **Project Structure**
```
VocaSpeak
├── components
│   ├── Inputs
│   │   ├── FileUpload.tsx
│   │   ├── LanguageSelector.tsx
│   │   └── TextArea.tsx
│   ├── SpeechRecognition
│   │   └── SpeechRecognition.tsx
│   ├── SvgDecorations.tsx
│   └── categoryLinks.tsx
├── hooks
│   └── useTranslate.ts
├── utils
│   └── rtfToText.ts
├── pages
│   └── index.tsx
├── public
├── styles
├── README.md
├── package.json
└── tsconfig.json
```

---

## **Contributing**
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork and submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
For any inquiries or support, reach out to:
- **Name**: Priyanshu Varshney
- **Email**: itspriyanshu905@gmail.com
