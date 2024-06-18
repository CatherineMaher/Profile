import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Invoices() {
  const data = [
    {
      date: '03/31/2019',
      invoiceId: 315462,
      amount: '$99.00',
      status: 'Paid',
    },
    {
      date: '03/31/2019',
      invoiceId: 315462,
      amount: '$99.00',
      status: 'Paid',
    },
    {
      date: '03/31/2019',
      invoiceId: 315462,
      amount: '$99.00',
      status: 'Paid',
    },
  ];

  return (
    <div className="table-responsive">
      <table className="table table-borderless" style={{ width: '100%', borderRadius: "15px", overflow: "hidden" }}>
        <thead className="table-secondary opacity-50">
          <tr>
            <th style={{ padding: "15px" }}>Date</th>
            <th style={{ padding: "15px" }}>Invoice ID</th>
            <th style={{ padding: "15px" }}>Amount</th>
            <th style={{ padding: "15px" }}>Status</th>
            <th style={{ padding: "15px" }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((invoice, index) => (
            <tr key={index}>
              <td className='opacity-50' style={{ padding: "15px" }}>{invoice.date}</td>
              <td className='opacity-50' style={{ padding: "15px" }}>{invoice.invoiceId}</td>
              <td className='opacity-50' style={{ padding: "15px" }}>{invoice.amount}</td>
              <td style={{ padding: "15px" }}>
                <div className='ps-2 pe-2 text-success text-center' style={{ width: "80px", background: "#b8dec7", borderRadius: "5px" }}>
                  <span>
                    <i className="bi bi-check-circle-fill"></i>
                  </span>
                  &nbsp;
                  {invoice.status}
                </div>
              </td>
              <td className='opacity-50' style={{ width: '10%', textAlign: 'right', padding: "15px" }}>
                <span style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#d2d1d1',
                  marginRight: '8px'
                }}>
                  <i className="bi bi-eye-fill"></i>
                </span>
                <span style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#d2d1d1'
                }}>
                  <i className="bi bi-download"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Invoices;
