import React from 'react';
import { Card, Button } from 'react-bootstrap';
import BarChart from './BarChart';

function StatisticsCard({ number, title, percentage , color ,arrowDirection }) {
  let heights =[50, 80, 35, 70, 20];
  return (
    <Card className="mb-4 mt-4 m-4" style={{ borderRadius:"15px"}}>
      <Card.Body>
        <div className='d-flex justify-content-between '>
          <Card.Title className="ms-2 "style={{fontSize:"40px" , color:color}}>{number}</Card.Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightgrey" class="bi bi-question-circle-fill mt-2 me-3" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
          </svg>
        </div>
        <Card.Text className='d-flex justify-content-between'>
      <div>
      <p className="text-muted mt-1 ms-2" style={{fontSize:"20px"}}>{title}</p>
        <p className="text-muted">
            <i className={`bi bi-arrow-${arrowDirection}-right-circle-fill ms-2 mt-4`}></i>
            &nbsp;
            {percentage}%
          </p>
      </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="80" fill={color} viewBox="0 0 24 24"><path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z"/></svg>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StatisticsCard;
