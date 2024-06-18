import React from 'react';
import OneAppointment from './OneAppointment';

function Appointments() {
 
  return (
    <>
      <OneAppointment day="29" month="Sep" title="Plumbing" time="11:00-19:30" status="Cancelled" price="50" pricePerHr={10}/>
      <hr className='m-0'/>
      <OneAppointment day="15" month="Oct" title="Carpenting" time="13:45-15:30" status="Booked" price="345" pricePerHr={45}/>
      <hr className='m-0'/>
      <OneAppointment day="11" month="Nov" title="Painting" time="9:00-12:30" status="Done" price="130" pricePerHr={55}/>
      <hr className='m-0'/>
      <OneAppointment day="13" month="Apr" title="Hair Drying" time="11:00-15:30" status="Done" price="50" pricePerHr={5}/>
      <hr className='m-0'/>
      <OneAppointment day="24" month="Feb" title="Blue Print Structure" time="10:00-19:30" status="Booked" price="50" pricePerHr={5}/>
    </>
    
  );
}

export default Appointments;
