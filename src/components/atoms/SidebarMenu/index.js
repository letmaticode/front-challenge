import React from 'react'
import SidebarItems from 'components/atoms/SidebarItems'

const SidebarMenu = ({ options }) => {
  return options.map((option, index) => (
    <SidebarItems item={option} key={index}/>
  ))
}

export default SidebarMenu