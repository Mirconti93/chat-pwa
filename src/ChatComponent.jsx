  // MyComponent.js
import React ,  { useRef, useEffect } from 'react';
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

class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      msgInputValue: "",
      groups: []
    };

    this.remoteSender = "Kai";

    this.localSender = "You";
  
    this.groupIdRef = useRef(0);
  
    this.msgIdRef = useRef(0);
  
    this.remoteMsgCnt = useRef(0);
  
    this.inputRef = useRef();

  }


  handleSend = (message, sender, notCancel) => {
    addToGroup(message, sender, notCancel)
  };


  render() { <div style={{height: "500px"}}>
    <Button border={true} onClick={() => handleSend(`Beautiful day no: ${remoteMsgCnt.current++}`, remoteSender, true)} style={{marginBottom: "1em"}}>Add remote message</Button>                

        <ChatContainer>

            <ConversationHeader>

                <Avatar src={kaiIco} name="Kai" />

                <ConversationHeader.Content userName="Kai" info="Active 10 mins ago" />

                <ConversationHeader.Actions>

                    <VoiceCallButton />

                    <VideoCallButton />

                    <InfoButton />

                </ConversationHeader.Actions>          

                </ConversationHeader>

                <MessageList typingIndicator={<TypingIndicator content="Emily is typing" />}>

                  {groups.map(g => <MessageGroup key={g._id} data-id={g._id} direction={g.direction}>

                    <MessageGroup.Messages key={g._id}>

                        {g.messages.map(m => <CustomMessage as={Message} key={m._id} data-id={m._id} model={m} />)}

                    </MessageGroup.Messages>

                  </MessageGroup>)}

                </MessageList>

                <MessageInput placeholder="Type message here" onSend={m => handleSend(m, localSender)} onChange={setMsgInputValue} value={msgInputValue} ref={inputRef} />

      </ChatContainer>

</div>;


  function addToGroup(message, sender, notCancel) {
    if (groups.length > 0) {

      const lastGroup = groups[groups.length - 1];


      if (lastGroup.sender === sender) {

        // Add to group

        const newMessages = [...lastGroup.messages].concat({

          _id: `m-${++msgIdRef.current}`,

          message,

          sender

        });

        const newGroup = { ...lastGroup,

          messages: newMessages

        };

        const newGroups = groups.slice(0, -1).concat(newGroup);

        setGroups(newGroups);

      } else {

        // Sender different than last sender - create new group 

        const newGroup = {

          _id: `g-${++groupIdRef.current}`,

          direction: sender === localSender ? "outgoing" : "incoming",

          messages: [{

            _id: `m-${++msgIdRef.current}`,

            message,

            sender

          }]

        };

        setGroups(groups.concat(newGroup));

      }

    } else {

      const newGroup = {

        _id: `g-${++groupIdRef.current}`,

        direction: sender === localSender ? "outgoing" : "incoming",

        messages: [{

          _id: `m-${++msgIdRef.current}`,

          message,

          sender: sender

        }]

      };

      setGroups([newGroup]);

    }


    if (!notCancel) {

      setMsgInputValue("");

      inputRef.current.focus();

    }
  }


  }
}


export default ChatComponent;