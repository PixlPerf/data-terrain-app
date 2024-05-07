import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  horizontalPoints
} from 'recharts';

const data = [
    {
      name: 'Jan',
      Received: 1800,
      Processed: 2100,
 
    },
    {
      name: 'Feb',
      Received: 900,
      Processed: 2700,
    },
    {
      name: 'Mar',
      Received: 1500,
      Processed: 3200,
  
    },
    {
      name: 'Apr',
      Received: 2700,
      Processed: 2600,
   
    },
    {
      name: 'May',
      Received: 3100,
      Processed: 3500,
  
    },
    {
      name: 'June',
      Received: 1400,
      Processed: 1500,

    },
    {
      name: 'Jul',
      Received: 500,
      Processed: 3100,
 
    },
    {
      name: 'Aug',
      Received: 2000,
      Processed: 2500,
    },
    {
      name: 'Sep',
      Received: 3900,
      Processed: 4100,
  
    },
    {
      name: 'Oct',
      Received: 3000,
      Processed: 700,
   
    },
    {
      name: 'Nov',
      Received: 500,
      Processed: 2900,
  
    },
    {
      name: 'Dec',
      Received: 1400,
      Processed: 3900,

    },
  ];

const ChartComponents = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid  horizontal={true} vertical={false} stroke='#D6D6D6'/>
          <horizontalPoints stroke="#f5f5f5" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Processed" barSize={25} fill="#277ACC"  radius={[5, 5, 0, 0]}/>
          <Line  type="monotone" dataKey="Received" stroke="#002b55b3"  strokeWidth='4'/>
        </ComposedChart>
      </ResponsiveContainer>
    );
};

ChartComponents.propTypes = {};

export default ChartComponents;