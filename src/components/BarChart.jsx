import React from 'react';

const BarChart = ({ data=[2,3,5,2] ,color }) => {
  return (
    <div className="bar-chart">
 
        <div style={{ height: `20px` ,color: {color} , width:"3px"}} />
    
    </div>
  );
};

export default BarChart;
