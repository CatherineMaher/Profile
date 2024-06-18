import React from 'react';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import StatisticsCard from './components/StatisticsCard';
import img1 from './assets/girl.jpg';
import AppointmentInvoicesCard from './components/AppointmentInvoicesCard';
import './App.css'; 

function App() {
  const chart1 = [50, 80, 35, 70, 20];
  return (
    <div className="d-flex position-relative bg-light vh-100">
     
      <Sidebar />
      <main className="flex-grow-1 p-3 bg-light main-scroll">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h5 className="h2">Client Profile</h5>
          <div className='d-flex gap-2 w-60%'>
            <div className='d-flex align-items-center p-2 mt-1' style={{ borderRadius: '10px', width: '70%', height: '38px', background: '#E3E5EB' }}>
              <i className="bi bi-search me-2"></i>
              <input type="search" placeholder="Search" aria-label="Search" className='form-control border-0 justify-content-center' style={{ background: '#E3E5EB', outline: "none" }} />
            </div>
            <div className="mb-2 bg-white align-items-center shadow-sm d-flex justify-content-center" style={{ borderRadius: '50%', width: '40px', height: '40px' }}>
              <i className={`bi bi-bell-fill`} style={{ fontSize: '15px', color: '#abaaaa' }}></i>
            </div>
            <div className="mb-2 bg-white align-items-center shadow-sm d-flex justify-content-center me-5" style={{ borderRadius: '50%', width: '40px', height: '40px', overflow: 'hidden' }}>
              <img src={img1} alt="profileImage" style={{ width: "160%" }} />
            </div>
          </div>
        </div>

        <div className='d-flex flex-column flex-lg-row'>
          <div className=''>
            <ProfileCard />
          </div>
          <div className='d-flex flex-column flex-grow-1'>
            <div className='d-flex flex-column flex-md-row flex-wrap justify-content-center'>
              <StatisticsCard number='5' title='All Bookings' percentage="35.67" color="#38A3FF" arrowDirection="up" data={chart1} />
              <StatisticsCard number='2' title='Completed' percentage="25" color="#835BEB" arrowDirection="down" />
              <StatisticsCard number='5' title='Cancelled' percentage="35.67" color="#F56C22" arrowDirection="up" />
            </div>
            <div>
              <AppointmentInvoicesCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
