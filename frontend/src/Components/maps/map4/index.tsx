import React from 'react';
import { Line } from '@ant-design/charts';

const Map4: React.FC = () => {
  var data = [
    {
      type: '1996',
      value: 355,
    },
    {
        type: '1997',
        value: 347,
    },
    {
        type: '1998',
        value: 293,
    },
    {
        type: '1999',
        value: 298,
    },
    {
        type: '2000',
        value: 281,
    },
    {
        type: '2001',
        value: 280,
    },
    {
        type: '2002',
        value: 217,
    },
    {
        type: '2003',
        value: 231,
    },
    {
        type: '2004',
        value: 217,
    },
    {
        type: '2005',
        value: 199,
    },
    
    {
        type: '2006',
        value: 181,
    },
    {
        type: '2007',
        value: 188,
    },
    {
        type: '2008',
        value: 137,
    },
    {
        type: '2009',
        value: 126,
    },
    {
        type: '2010',
        value: 150,
    },
    {
        type: '2011',
        value: 138,
    },
    {
        type: '2012',
        value: 121,
    },
    {
        type: '2013',
        value: 135,
    },
    {
        type: '2014',
        value: 140,
    },
    {
        type: '2015',
        value: 115,
    },
    {
        type: '2016',
        value: 122,
    },
    {
        type: '2017',
        value: 147,
    },
    {
        type: '2018',
        value: 168,
    },
    {
        type: '2019',
        value: 179,
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
    color:'#2a9d8f',
   
  };
  return <Line {...config} />;
};

export default Map4;