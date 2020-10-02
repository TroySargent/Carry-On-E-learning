import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from "../Title/Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('Q1', 5),
  createData('Q2', 3),
  createData('Q3', 6),
  createData('Q4', 2),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Overview</Title>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Tasks
            </Label>
          </YAxis>
          <Bar type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}








// import Paper from '@material-ui/core/Paper';
// import {
//   ArgumentAxis,
//   ValueAxis,
//   Chart,
//   BarSeries,
// } from '@devexpress/dx-react-chart-material-ui';

// const data = [
//   { argument: 1, value: 3 },
//   { argument: 2, value: 6 },
//   { argument: 3, value: 4 },
//   { argument: 4, value: 2 },
// ];

// export default () => { return (
//   <Paper>
//     <Title>Overview</Title>
//     <Chart
//       data={data}
//     >
//       <ArgumentAxis />
//       <ValueAxis />

//       <BarSeries valueField="value" argumentField="argument" />
//     </Chart>
//   </Paper>
// )}; 