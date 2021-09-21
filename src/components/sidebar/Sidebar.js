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
import { useDispatch } from 'react-redux';
import { LogOut } from '../../redux/action/authAction';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebar, handleToggleSidebar}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(LogOut())
    }

    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}>
            <Link to="/">
                <li>
                    <MdHome size={23} onClick={handleToggleSidebar}/>
                    <span>Home</span>
                </li>
            </Link>

            <Link to="/feed/subscriptions">
                <li>
                    <MdSubscriptions size={23} onClick={handleToggleSidebar} />
                    <span>Subscriptions</span>
                </li>
            </Link>

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

            <li
                onClick={handleClick}
            >
                <MdExitToApp size={23} onClick={handleToggleSidebar} />
                <span>Log Out</span>
            </li>

            <hr/>

        </nav>
    )
}

export default Sidebar
