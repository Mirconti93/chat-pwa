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

        <ConversationHeader>

          <ConversationHeader.Back />

          <Avatar src={logo} name="Emily" />

          <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />                                   

          <ConversationHeader.Actions>                                                                             

            <StarButton title="Add to favourites" />

            <VoiceCallButton title="Start voice call" />

            <VideoCallButton title="Start video call" />

            <InfoButton title="Show info" />

          </ConversationHeader.Actions>

          </ConversationHeader>
          <MainContainer>  
          <ChatContainer>
            <MessageList>
              <Message
                model={{
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe",
                }}
              />
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>;
    </div>
  );
}

export default App;
