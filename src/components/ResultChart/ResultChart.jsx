import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData  =[
  {
    "ID": 101,
    "Name": "Ayesha Khan",
    "Physics Marks": 85,
    "Chemistry Marks": 78,
    "Math Marks": 92
  },
  {
    "ID": 102,
    "Name": "Imran Hossain",
    "Physics Marks": 76,
    "Chemistry Marks": 88,
    "Math Marks": 81
  },
  {
    "ID": 103,
    "Name": "Nusrat Jahan",
    "Physics Marks": 91,
    "Chemistry Marks": 83,
    "Math Marks": 89
  },
  {
    "ID": 104,
    "Name": "Farhan Ahmed",
    "Physics Marks": 69,
    "Chemistry Marks": 74,
    "Math Marks": 72
  },
  {
    "ID": 105,
    "Name": "Mahmudul Islam",
    "Physics Marks": 80,
    "Chemistry Marks": 79,
    "Math Marks": 87
  },
  {
    "ID": 106,
    "Name": "Asma Begum",
    "Physics Marks": 88,
    "Chemistry Marks": 90,
    "Math Marks": 95
  },
  {
    "ID": 107,
    "Name": "Rizwan Karim",
    "Physics Marks": 72,
    "Chemistry Marks": 68,
    "Math Marks": 75
  },
  {
    "ID": 108,
    "Name": "Tanvir Rahman",
    "Physics Marks": 94,
    "Chemistry Marks": 87,
    "Math Marks": 90
  },
  {
    "ID": 109,
    "Name": "Sabiha Yasmin",
    "Physics Marks": 81,
    "Chemistry Marks": 85,
    "Math Marks": 88
  },
  {
    "ID": 110,
    "Name": "Tareq Haider",
    "Physics Marks": 77,
    "Chemistry Marks": 73,
    "Math Marks": 79
  }
]

const ResultChart = () => {
  return (
    <div>
      <LineChart width={500} height={500} data={resultData}>
        <XAxis dataKey="Name"></XAxis>
        <YAxis ></YAxis>
        <Line dataKey="Math Marks"></Line>
        <Line dataKey="Chemistry Marks" stroke='pink'></Line>

      </LineChart>
    </div>
  );
};

export default ResultChart;