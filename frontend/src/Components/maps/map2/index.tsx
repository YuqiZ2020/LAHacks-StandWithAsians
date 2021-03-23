import React from 'react';
import { Column } from '@ant-design/charts';

const Map2: React.FC = () => {
  var data = [
    {
      type: 'CA',
      value: 1691,
    },
    {
      type: 'NY',
      value: 517,
    },
    {
      type: 'WA',
      value: 158,
    },
    {
      type: 'TX',
      value: 103,
    },
    {
      type: 'PA',
      value: 97,
    },
    {
      type: 'MA',
      value: 96,
    },
    {
      type: 'IL',
      value: 92,
    },
    {
      type: 'FL',
      value: 59,
    },
    {
        type: 'NJ',
        value: 59,
    },
    {
        type: 'MD',
        value: 51,
    },
    {
        type: 'VA',
        value: 49,
    },
    {
        type: 'GA',
        value: 48,
    },
    {
        type: 'CO',
        value: 44,
    },
    {
        type: 'AZ',
        value: 43,
    },
    {
        type: 'MN',
        value: 42,
    },
    {
        type: 'OR',
        value: 41,
    },
    {
        type: 'DC',
        value: 40,
    },
    {
        type: 'OH',
        value: 40,
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
    color:'#e63946',
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };
  return <Column {...config} />;
};

export default Map2;