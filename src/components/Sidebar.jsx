import React from 'react';
import SidebarCard from './SidebarCard';
function Sidebar() {
  return (
    
    <div className="d-flex flex-column align-items-center pt-3 p-4 bg-white " style={{ borderTopRightRadius:"40px", overflow:'hidden', minWidth:"110px"}} >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" viewBox="0 0 16 16" className='bi bi-infinity m-3 mb-4 mt-4 rounded-top'>
  <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
</svg>
      <SidebarCard iconClass="bi-bar-chart-fill" title="Overview" color="#38A3FF" />
      <SidebarCard iconClass="bi-calendar" title="Calendar" color="#7c41dc" />
      <SidebarCard iconClass="bi-people-fill" title="Clients" color="#EB61D0" />
      <SidebarCard iconClass="bi-person-badge" title="Staff" color="#38A3FF"  isActive="true"/>
      <SidebarCard iconClass="bi-check2-square" title="Services" color="#F56A1E" />
      <SidebarCard iconClass="bi-gear" title="Setup" color="#979DA7" />
    
    </div>
  );
}

export default Sidebar;
