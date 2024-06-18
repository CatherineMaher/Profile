import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Invoices from './Invoices';
import Appointments from './Appointments';

function AppointmentInvoicesCard() {
  const [nav , setNav]= useState("appointments")

  const handleAppointmentClick = () => {
    setNav("appointments"); 
  }
  const handleInvoicesClick = () => {
    setNav("invoices");

  }
  

  return (
    <Card className="mb-4 ms-4 " style={{ maxWidth: '95%' , borderRadius:"15px" }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <div className='d-flex gap-3 position-relative '>
          <div onClick={handleAppointmentClick} style={{ cursor:"pointer" , opacity:`${nav==="appointments"? '100%':'50%'}`}}>Appointments</div>
          <div style={{background:"#38A3FF", width:`${nav==="appointments"? '80px' : '50px' }`, height:"5px",borderRadius:'5px',position:'absolute', top:'38px',left:`${nav==="appointments"? '0px' : '115px' }`,transition:"left 0.3s ease-out, width 0.2s ease-out" }}></div>
          <div onClick={handleInvoicesClick} style={{ cursor:"pointer",opacity:`${nav==="invoices"? '100%':'50%'}` }} >Invoices</div>
          
        </div>
        <hr />
        <div className='shadow-sm ps-3 pe-3 p-2 mb-3' style={{width:'155px' , borderRadius:"10px" , opacity:'50%'}}>
          All Time (5)&nbsp;&nbsp;&nbsp;
        <span style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#d2d1d1' 
          }}>
            <i class="bi bi-caret-down-fill"></i>
            </span>
        </div>
      { nav==="appointments" ? <Appointments/> : <Invoices/>}
      </Card.Body>
    </Card>
  );
}

export default AppointmentInvoicesCard;
