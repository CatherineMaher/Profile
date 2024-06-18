import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import '../App.css'; 

function OneAppointment({
  day,
  month,
  title,
  time,
  status,
  price,
  pricePerHr
}) {
  let statusElement;
  let backgroundColor, textColor, width;

  switch (status) {
    case "Done":
      backgroundColor = "#EAF8EE";
      textColor = "green";
      width = '90px';
      break;
    case "Booked":
      backgroundColor = "#EBF5FF";
      textColor = "gray";
      width = '80px';
      break;
    default:
      backgroundColor = "#F9EBE3";
      textColor = "orange";
      width = '100px';
  }

  statusElement = (
    <div className="ps-2 pe-2 text-center mt-2 p-1" style={{ backgroundColor, color: textColor, width, borderRadius: "5px" }}>
      {status === "Done" ? (
        <>
          <i className="bi bi-check-circle-fill h-fit"></i>&nbsp; {status}
        </>
      ) : status}
    </div>
  );

  return (
    <div className="table-responsive">
      <table className="table table-borderless m-0 p-0 ps-2">
        <thead>
          <tr>
            <th style={{ fontSize: '20px' }}>{day}
              <div className='opacity-50' style={{ fontSize: "15px", fontWeight: "lighter" }}>{month}</div>
            </th>
            <th className="ps-5" style={{ fontSize: '16px', fontWeight: 'normal', width: "60%" }}>{title}
              <div className='opacity-50' style={{ fontSize: "15px", fontWeight: "lighter" }}>{time}</div>
            </th>
            <th style={{ fontSize: '16px', fontWeight: 'normal', display: 'flex', justifyContent: "flex-end", width: "200px" }}>
              <div style={{ width: "100px" }}>
                {statusElement}
              </div>
            </th>
            <th>
              <span style={{ display: 'flex', justifyContent: 'end', alignItems: 'baseline', flexDirection: 'column', alignContent: 'flex-end', flexWrap: "wrap" }}>
                <div className="price" style={{ fontSize: '18px', fontWeight: 'normal' }}>${price}</div>
                <div className="price-info" style={{ opacity: 0.5, fontSize: '15px', fontWeight: 'lighter' }}>${pricePerHr}/hr</div>
              </span>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default OneAppointment;
