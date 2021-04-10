import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import "./Chatheader.css"
import CallIcon from '@material-ui/icons/Call';

function ChatHeader({channelName}) {
    return (
            <div className='chatHeader'>

            <div className="chatHeader__left">
            <h3>
                <spam className="chatHeader__hash">
                    #
                </spam>
                {channelName}
            </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon/>
                <PeopleAltRoundedIcon/>
                <CallIcon/>
                <div className="chatHeader__search">
                    <input type="text" placeholder ="Search"/>
                    <SearchRoundedIcon/>
                </div>

            </div>    
        </div>
    )
}

export default ChatHeader
