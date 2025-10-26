import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({markPormise}) => {
  const marksDataRes = use(markPormise);
  // console.log(marksData)

  const marksData = marksDataRes.data;

  const marksChartData = marksData.map(studentData =>{
    const student = {
      id:studentData.ID,
      Name:studentData.Name,
      Physics:studentData.Marks.Physics,
      Chemistry:studentData.Marks.Chemistry,
      Math:studentData.Marks.Math,
     
    }
    const  avg=(student.Physics+student.Chemistry+student.Math)/3;
    student.avg=avg
    return student
  })
  // console.log(marksChartData)
  return (
    <div>
      <BarChart width={500} height={300} data={marksChartData}>
        <XAxis dataKey="Name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill='yellow'></Bar>
        <Bar dataKey="Chemistry" fill='blue'></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;