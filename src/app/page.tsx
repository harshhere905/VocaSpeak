"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent } from "react";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
} from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import TextArea from "../components/Inputs/TextArea";
import FileUpload from "../components/Inputs/FileUpload";
import LanguageSelector from "../components/Inputs/LanguageSelector";
import useTranslate from "../hooks/useTranslate";
import { rtfToText } from "../utils/rtfToText";

import SvgDecorations from "../components/SvgDecorations";
import CategoryLinks from "../components/categoryLinks";

const Home: React.FC = () => {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [languages] = useState<string[]>([
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Hindi",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const [translatedText, setTranslatedText] = useState<string>("");
  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleTranslate = () => {
    setTranslatedText(targetText);
    toast.info("Translation updated!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    toast.success("Thanks for your feedback!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleDislike = () => {
    toast.error("We would try to improve!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      localStorage.setItem("favoriteTranslation", translatedText);
    } else {
      localStorage.removeItem("favoriteTranslation");
    }
  };

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");

    if (hindiVoice) {
      utterance.voice = hindiVoice;
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Hindi voice not available in your browser.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 flex items-center justify-center px-4 sm:px-6">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-700 via-gray-800 to-black opacity-50 pointer-events-none" />

      {/* Main Content */}
      <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-gray-900 shadow-xl rounded-2xl border border-gray-800">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
             Voca<span className="text-orange-500">Speak</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-400">
            Bridging Voices, Connecting Worlds.
          </p>
        </div>

        {/* Input & Output Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 sm:mt-12">
          {/* Source Section */}
          <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md">
            <TextArea
              id="source-language"
              value={sourceText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setSourceText(e.target.value)
              }
              placeholder="Enter source text here..."
              className="w-full h-32 sm:h-40 p-4 rounded-lg text-gray-200 bg-gray-900 border border-gray-700 focus:ring-orange-500 focus:ring-2"
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-3">
                <SpeechRecognitionComponent setSourceText={setSourceText} />
                <IconVolume
                  size={24}
                  onClick={() => handleAudioPlayback(sourceText)}
                  className="cursor-pointer text-orange-400 hover:text-orange-500"
                />
                <FileUpload handleFileUpload={handleFileUpload} />
                {/* <LinkPaste handleLinkPaste={handleLinkPaste} /> */}
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {sourceText.length} / 2000
              </span>
            </div>
          </div>

          {/* Target Section */}
          <div className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-md">
            <TextArea
              id="target-language"
              value={translatedText}
              readOnly
              placeholder="Translated text will appear here..."
              className="w-full h-32 sm:h-40 p-4 rounded-lg text-gray-200 bg-gray-900 border border-gray-700 focus:ring-orange-500 focus:ring-2"
            />
            <button
              onClick={handleTranslate}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"
            >
              Translate
            </button>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-3">
                <LanguageSelector
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  languages={languages}
                />
                <IconVolume
                  size={24}
                  onClick={() => handleAudioPlayback(translatedText)}
                  className="cursor-pointer text-orange-400 hover:text-orange-500"
                />
              </div>
              <div className="flex items-center space-x-3">
                <IconCopy
                  size={24}
                  onClick={handleCopyToClipboard}
                  className="cursor-pointer text-orange-400 hover:text-orange-500"
                />
                {copied && <span className="text-sm text-green-500">Copied!</span>}
                <IconThumbUp
                  size={24}
                  onClick={handleLike}
                  className="cursor-pointer text-gray-400 hover:text-green-500"
                />
                <IconThumbDown
                  size={24}
                  onClick={handleDislike}
                  className="cursor-pointer text-gray-400 hover:text-red-500"
                />
                <ToastContainer />
                <IconStar
                  size={24}
                  onClick={handleFavorite}
                  className={`cursor-pointer ${
                    favorite ? "text-yellow-500" : "text-gray-400 hover:text-yellow-500"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 sm:mt-12">
          <SvgDecorations />
          <CategoryLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
