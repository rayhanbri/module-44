import React, { use } from 'react';

const MarksChart = ({markPormise}) => {
  const marksDataRes = use(markPormise);
  // console.log(marksData)

  const marksData = marksDataRes.data;

  const marksChartData = marksData.map(studentData =>{
    const student = {
      id:studentData.ID,
      name:studentData.Name,
      Physics:studentData.Marks.Physics,
      Chemistry:studentData.Marks.Chemistry,
      Math:studentData.Marks.Math,
     
    }
    const  avg=(student.Physics+student.Chemistry+student.Math)/3;
    student.avg=avg
    return student
  })
  console.log(marksChartData)
  return (
    <div>
      
    </div>
  );
};

export default MarksChart;