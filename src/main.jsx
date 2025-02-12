import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ChatBot from "./Components/ChatBot";
import { ModeProvider } from "./context/ModeContext"; // Import ModeProvider


const RootComponent = () => {
  const [chat, setChat] = useState(false);

  return (
    <StrictMode>
      <ModeProvider>
        <Router>
          <Header />
          <App />
          <Footer />

          <div className="fixed bottom-5 right-5">
            <img
              src="https://testapi.unomiru.com/static/bot-gif.gif"
              alt="Chatbot"
              className="w-25 cursor-pointer"
              title="Hey there! I am LUMI G24R. Click here for assistance"
              onClick={() => setChat(!chat)}
            />
          </div>

          {chat && <ChatBot chat={chat} setchat={setChat} />}
        </Router>
      </ModeProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);
