import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_API_KEY, // Ensure this is set in your .env file
});

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash", // Update with the correct Google GenAI model if needed
          contents: `Translate the following text to ${selectedLanguage}: ${sourceText} Do not give anything else but the translation`,
        });

        setTargetText(response.text); // Assumes `response.text` contains the translated result
      } catch (error) {
        console.error("Error translating text with Google GenAI:", error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500); // Adjust delay as needed

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;
