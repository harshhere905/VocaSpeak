import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IconMicrophone, IconMicrophoneOff } from "@tabler/icons-react"; // Importing icons

const SpeechRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  // Update the parent component with the transcript
  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Microphone Icon */}
      <button
        onClick={handleVoiceRecording}
        className="p-2 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition"
      >
        {listening ? (
          <IconMicrophoneOff size={22} className="text-red-600" />
        ) : (
          <IconMicrophone size={22} className="text-green-600" />
        )}
      </button>

      {/* Reset Transcript Button */}
      {transcript && (
        <button
          onClick={resetTranscript}
          className="text-sm text-gray-500 dark:text-gray-400 underline"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default SpeechRecognitionComponent;
