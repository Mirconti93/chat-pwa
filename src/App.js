import logo from './logo.svg';
import './App.css';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  StarButton,
  VoiceCallButton,
  InfoButton,
  VideoCallButton
} from "@chatscope/chat-ui-kit-react";


function App() {
  return (
    <div className="App">

      <div style={{ position: "relative", height: "500px" }}>

        <ChatContainer MessageList ="[]" />
      </div>;
    </div>
  );
}

export default App;
