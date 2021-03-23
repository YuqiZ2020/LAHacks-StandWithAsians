import React from 'react';
import { Bar } from '@ant-design/charts';

const Map1: React.FC = () => {
  var data = [
    {
      type: 'Verbal Harrassment/Name Calling',
      value: 0.681,
    },
    {
      type: 'Avoidanc/Shunning',
      value: 0.205,
    },
    {
      type: 'Physical Assault',
      value: 0.111,
    },
    {
      type: 'Other',
      value: 0.086,
    },
    {
      type: 'Coughed At/Spat Upon',
      value: 0.072,
    },
    {
      type: 'Online',
      value: 0.068,
    },
    {
      type: 'Workplace Discrimination',
      value: 0.045,
    },
    {
      type: 'Barred from Establishment',
      value: 0.031,
    },
    {
      type: 'Vandalism/Graffiti',
      value: 0.028,
    },
  ];
  var config = {
    data: data,
    xField: 'value',
    yField: 'type',
    seriesField: 'type',
    color:'darkorange',
    // width: '100vw',
    barWidthRatio: 0.5,
    // legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default Map1;