import React, { useState } from 'react'
import { ChatEngineWrapper, ChatSocket, ChatFeed, getOrCreateChat } from 'react-chat-engine'
import { Col } from 'react-grid-system';
// import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { useForm } from '../hooks/useForm';

const DirectChatPage = (name, email2) => {


	const [username, setUsername] = useState('oscarSue')
    console.log(name, email2)
    console.log(name, email2)

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: 'oscarSue' },
			
		)
	}

 


		
	return (
		<div>
			<Col xs={11} ms={8} md={6} lg={4} >
				<ChatEngineWrapper>
					<ChatSocket
						height='100vh'
			userName="oscar@gmail.com"
			userSecret= "1"
			projectID='497e79ac-497e-42b3-9cd4-742722a12565'
			renderNewChatForm={(creds) => createDirectChat(creds)}

					/>
				</ChatEngineWrapper>
			</Col>
		</div>
		// <ChatEngine
		// 	height='100vh'
		// 	userName="oscar@gmail.com"
		// 	userSecret= "1"
		// 	projectID='497e79ac-497e-42b3-9cd4-742722a12565'
		// 	renderNewChatForm={(creds) => createDirectChat(creds)}
		// />
	)
}

export default DirectChatPage;
