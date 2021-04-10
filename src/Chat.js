
import React, { useEffect, useState } from 'react'
import "./Chat.css"
import ChatHeader from './Chatheader.js'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appslice';
import { selectUser } from './features/userSlice';
import db from "./firebase"
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import firebase from "firebase";


function Chat() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
    
    
    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }


    }, [channelId])

    const sendMessages=e=>{
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').
        add({
            message:input,
            user:user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }
    
    return (
        <div className="chat">
            <ChatHeader  channelName={channelName}/>

            <div className="chat__messages">
               {messages.map((message)=>(
                   <Message
                    message={message.message}
                    timestamp={message.timestamp}
                    user={message.user}
                   />
                  
               ))}
                

            </div>

            <div className="chat__input">

                    <form action="">
                        <input value={input} 
                        disabled={!channelId}
                        onChange={e=> setInput(e.target.value)} 
                        placeholder={`Message #${channelName}`}/>
                        <button type="submit"
                        onClick={sendMessages}
                         className="chat__inputButton">
                        Send Message</button>
                    </form>
                <div className="chat__inputIcons">
                        <PictureAsPdfIcon className="sidebar__addChannel"  />
                        <InsertPhotoIcon className="sidebar__addChannel" />
                        
                </div>
            </div>
        </div>
    )
}

export default Chat
