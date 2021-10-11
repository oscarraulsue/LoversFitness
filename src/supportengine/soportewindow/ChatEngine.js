import React, { useEffect, useState } from 'react'
import {ChatEngineWrapper, Socket, ChatFeed} from 'react-chat-engine'


const ChatEngine = (props) => {
    const [showChat, setShowChat] = useState(false)

    useEffect(() => {
        if(props.visible){
        setTimeout(() => {
            setShowChat(true)
        }, 500)
    }
    })
    return (
        <div
        className = 'transition-5'
            style = {{
                    height: props.visible ? '100%' : '0%',
                    zIndex: props.visible ? '100' : '0',
                    width: "100%",
                    backgroundColor:"white"
            }}
        >
            {
                showChat && 
                <ChatEngineWrapper>
                <Socket
                    projectID='497e79ac-497e-42b3-9cd4-742722a12565'
                    userName={props.user.username}
                    userSecret={props.user.username}
                    
                />
                <ChatFeed activeChat={props.chat.id}/>
                </ChatEngineWrapper>
            }
        </div>
    )
}

export default ChatEngine
