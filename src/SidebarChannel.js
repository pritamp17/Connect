import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appslice'
import "./SidebarChannel.css"
import DeleteIcon from '@material-ui/icons/Delete';
import db, { auth } from './firebase';
import firebase from "firebase";

function SidebarChannel({id, channelName}) {
    const dispatch = useDispatch()

    const handleDeleteChannel = (e) => {
        e.preventDefault()
            db.collection("channels").doc(id).delete().then(()=>{console.log("successfully deleted! ")})
            .catch((error)=>{ console.log("Error removing document:", error)}) 
    }

    return (
        <div className="SidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>

         <h4><span className="SidebarChannel_hash">#</span>{channelName}</h4>
         <DeleteIcon className="sidebar__addChannel" onClick={handleDeleteChannel}/>
         
        
        </div>
    )
}

export default SidebarChannel
