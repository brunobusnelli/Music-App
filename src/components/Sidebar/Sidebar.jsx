import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import SidebarButton from './SidebarButton';
import { MdDashboard } from 'react-icons/md';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import apiClient from '../../spotify';

const Sidebar = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get('me').then((response) => {
      setUser(response.data);
    });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  return (
    <div className="sidebar-container">
      <div className="user-container flex">
        <img src={user?.images?.[0]?.url} alt="profile img" className="profile-img" />
        <p className="user-name">{user?.display_name}</p>
      </div>
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdDashboard />} />
        <SidebarButton title="Library" to="/" icon={<MdOutlineLibraryMusic />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
      </div>
      <SidebarButton title="Sign out" onClick={handleSignOut} icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
