import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { lighten } from 'polished';

function SidebarCard({ iconClass, title ,color ,isActive = false }) {
  const [active]= useState(isActive);
  const lightColor = lighten(0.3, color);
  return (
    <Card className="text-center mb-3 p-2 border-1 align-items-center" style={{ backgroundColor: `${active ? "#38A3FF": "#ffffff"}` ,width:"85px",  borderRadius: '25%',position:"relative" }}>
      <Card.Body className="p-2">
        <div className="d-flex justify-content-center align-items-center mb-2" style={{ backgroundColor:`${active ? "#ffffff": lightColor}`,borderRadius: '50%', width: '40px', height: '40px' }}>
          <i className={`bi ${iconClass}`} style={{ fontSize: '15px', color: color }}></i>
        </div>
        <Card.Text className="m-0" style={{ fontSize: '12px', color: `${active ? "#f6f7fa": "#6c757d"}`}}>{title}</Card.Text>
      </Card.Body>
      {active && <div style={{width:"20px",height:"20px", background:"#38A3FF" ,borderRadius:"5px",position:"absolute", right :"-8px",top:"40px", transform:"rotate(45deg)"}}></div>}
    </Card>
    

  );
}

export default SidebarCard;
