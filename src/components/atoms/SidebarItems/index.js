import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { isMobile } from 'helpers/Mobile';
import "./styles.scss"


const SidebarItems = ({ item }) => {
  const [isCollapsed, collapse] = useState(true)

  return (
    <div className={isCollapsed ? "item" : "item active-item"} onClick={() => collapse(!isCollapsed)}>
      {item.submenu && <div className="item-icon">
        <svg className={!isCollapsed ? "transform" : undefined} width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.22504 6.76923L0.906287 12.6316L0.906287 0.906905L9.22504 6.76923Z" fill="white" />
        </svg>
      </div>
      }

      {!isMobile && <div className={item.submenu ? "item-title" : "item-title home"}>{item.title}</div>}

      {item.submenu &&
        <div className={isCollapsed ? "item-submenu" : "item-submenu active-submenu"}>
          {item.submenu.map((submenu, index) => (
            <Link className="item-submenu-link" key={index} activeclassname="active-item" to='/home'>
              {submenu.title}
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

export default SidebarItems