import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Message( {timestamp, user, message}) {
    return (
        <div className="Message">
            <Avatar src={user.photo}/>
            <div className="Message__info">
                <h4>{user.displayName}
                <span className="Message__timestamp">
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
                </h4>
                <p>{message}</p>

            </div>
            {/* <DeleteIcon className="Message__timestamp1" onClick={handleDelete}/> */}
           
        </div>
    )
}

export default Message

// rules_version = '2';
// 2
// service cloud.firestore {
// 3
//   match /databases/{database}/documents/users/{uid} {
// 4
//     match /{document=**} {
// 5
//       allow read, write: if
// 6
//           request.time < timestamp.date(2021, 5, 9);
// 7
//     }
// 8
//   }
// 9
// }
