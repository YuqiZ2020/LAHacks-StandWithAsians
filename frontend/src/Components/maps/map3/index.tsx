import React from 'react';
import { Column } from '@ant-design/charts';

const Map3: React.FC = () => {
  var data = [
    {
      type: 'Chinese',
      value: 0.422,
    },
    {
      type: 'Korean',
      value: 0.148,
    },
    {
      type: 'Vietnamese',
      value: 0.085,
    },
    {
      type: 'Filipino',
      value: 0.079,
    },
    {
      type: 'Japanese',
      value: 0.069,
    },
   
  ];
  var paletteSemanticRed = '#F4664A';
  var brandColor = '#5B8FF9';
  var config = {
    data: data,
    xField: 'type',
    yField: 'value',
    
    seriesField: '',
    legend: false,
    color:'#457b9d',
   
  };
  return <Column {...config} />;
};

export default Map3;