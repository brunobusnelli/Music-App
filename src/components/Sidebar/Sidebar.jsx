import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarButton from './SidebarButton'
import { MdDashboard } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from '../../spotify';



const Sidebar = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
     apiClient.get("me").then(response =>{
      console.log(response.data)
      setUser(response.data)
      console.log(user)
    } )
  }, [])
  
  return (
    <div className='sidebar-container'>
        <img src={user?.images?.[0]?.url}  alt="profile img" className='profile-img' />
        <p className='user-name'>{user?.display_name}</p>
        <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdDashboard />} />
          <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
          <SidebarButton title="Player" to="/player" icon={<FaPlay />
} />
        </div>
        <SidebarButton title="Sign out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}

export default Sidebar