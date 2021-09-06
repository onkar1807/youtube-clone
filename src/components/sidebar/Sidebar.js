import React from 'react'
import './_sidebar.scss'

import { MdSubscriptions,
        MdExitToApp,
        MdThumbUp,
        MdHistory,
        MdLibraryBooks,
        MdHome,
        MdSentimentDissatisfied
     } from 'react-icons/md'

const Sidebar = ({sidebar, handleToggleSidebar}) => {
    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}>
            <li>
                <MdHome size={23} onClick={handleToggleSidebar}/>
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23} onClick={handleToggleSidebar} />
                <span>Subscriptions</span>
            </li>
            <li>
                <MdThumbUp size={23} onClick={handleToggleSidebar} />
                <span>Likes</span>
            </li>
            <li>
                <MdHistory size={23} onClick={handleToggleSidebar} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} onClick={handleToggleSidebar} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} onClick={handleToggleSidebar} />
                <span>I don't know</span>
            </li>

            <hr/>

            <li>
                <MdExitToApp size={23} onClick={handleToggleSidebar} />
                <span>Log Out</span>
            </li>

            <hr/>

        </nav>
    )
}

export default Sidebar
