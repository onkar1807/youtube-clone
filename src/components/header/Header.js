import React from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import './_header.scss'


const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="header">
            <FaBars
                className="header_menu"
                size={26}
                onClick={handleToggleSidebar}
            />

            <img
                src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
                alt=""
                className="header_logo"
            />

            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header_icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default Header
