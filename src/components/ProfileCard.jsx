import React from 'react';
import { Card, Button } from 'react-bootstrap';
import img1 from '../assets/girl.jpg'
function ProfileCard() {
  return (
    <Card className="shadow-sm p-3 mt-4 w-100 w-md-25" style={{borderRadius: '15px' , height:"602px", maxWidth:"calc(150% - 150px)"}}>
      <Card.Body>
        <div className="d-flex flex-column align-items-center justify-content-center gap-1 ">
        
       <div style={{ width: '150px', height: '150px', borderRadius: '50%',position:"relative" }}>
       <span
        
         style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            position:'absolute',
            top:'5px',
            right:"10px",
            boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)",
           
          }}>
            <i class="bi bi-pencil-fill"></i>
            </span>
         <img src={img1} alt="Profile" className="rounded-circle me-3"  style={{width:'100%',height:"100%"}}/>
         </div>
      
        <Card.Title className='h1'style={{fontWeight:"bold"}}>Harriet Nunez</Card.Title>
        <Card.Subtitle className="m-2 p-2 text-success text-center" style={{borderRadius:'8px', background:"#EAF8EE", fontSize:"12px" , width:'90px'}}>New Client</Card.Subtitle>
          
        <Button variant="info" className="mt-2 p-2 shadow-sm text-white" style={{borderRadius:'10px',background:"#38A3FF"}}>Add New Appointment</Button>
      <div className='d-flex flex-column m-2 mt-4 p-4 justify-content-center ' style={{borderRadius: '15px', width:'100%' , height:'70px',background:"#F9FAFC", border: '1px solid #e9e9e9'}}>
        <label>Email</label>
        <strong >runolfsdir.gillian@hotmail.com</strong>   
      </div>
      <div className='d-flex flex-column m-2 mt-0 p-4 justify-content-center ' style={{borderRadius: '15px', width:'100%' , height:'70px',background:"#F9FAFC", border: '1px solid #e9e9e9'}}>
        <label>Gender</label>
        <strong >Female</strong>   
      </div>
      <div className='d-flex flex-column m-2 mt-0 p-4 justify-content-center ' style={{borderRadius: '15px', width:'100%' , height:'70px',background:"#F9FAFC", border: '1px solid #e9e9e9'}}>
        <label>Alerts</label>
        <strong >Allows Marketing Notifications</strong>   
      </div>

    </div>

      </Card.Body>
    </Card>
    
  );
}

export default ProfileCard;
