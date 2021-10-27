import React, { useState } from 'react'
import {styles} from '../styles'
import { LoadingOutlined } from '@ant-design/icons'
import Avatar from '../Avatar'
import axios from 'axios'

const ChatForm = (props) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const getOrCreateUser = (callback) => {
        axios.put('https://api.chatengine.io/users/',
        {
            "username": email,
            "secret": email,
            
        },
        {headers: {"Private-Key": "9cd8488d-13cc-4d3a-8ecf-ee89a5690313"}}
        )
        .then(res => callback(res.data))
    }
    
    const getOrCreateChat = (callback) => {
        console.log(callback, email)
        axios.put('https://api.chatengine.io/chats/',
        {
            "usernames": ["Ana Lucía Contreras Durán", email],
            "is_direct_chat": true
        },
        {headers: {"Private-Key": "9cd8488d-13cc-4d3a-8ecf-ee89a5690313"}}
        )
        .then(res => callback(res.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log('email', email)
        
        getOrCreateUser(
                       (user) => {
                        props.setUser(user);
                getOrCreateChat(
                    chat => props.setChat(chat)
                )
            }
        )
    }
    

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible ? "100%" : "0%",
                    opacity: props.visible ? "1" : "0"
                }
            }}
            >
            <div style={{height:'0px'}}>
                <div style={styles.stripe} />
            </div>
            <div
                className = 'transition-5'
                style= {{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading? '0.333' : '0',
                    }
                }}
            />
            <LoadingOutlined
                className= 'transition-5'
                style= {{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading? '1' : '0',
                        fontSize: '82px',
                        marginTop: 'calc(50% -41px)',
                        marginLeft: 'calc(50% -41px)'
                    }
                }}
            />
            <div style={{position: 'absolute', height: '100%', width: '100%', textAlign: 'center', alignItems: 'center'}}>
                <Avatar 
                    style={{
                        position: 'relative',
                        left: '35%',
                        top: '10%',
                      }}
                />
                <div style={styles.topText}>
                      Bienvenido a <br/>nuestro chat
                </div>
                <form
                style={{position: 'relative', width: '100%', marginLeft:"-3px", top:'19.75%'}}
                    onSubmit={(e) => handleSubmit(e)}
                >
                <input 
                style={styles.emailInput}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder = "Ejemplo@ejemplo.com"
                    />
                
                </form>
                <div style={styles.bottomText}>
                Ingrese su Email <br/> para continuar
                </div>
            </div>
        </div>
    )
}

export default ChatForm
