import React from 'react'
import { useSelector } from "react-redux";
import CourseDetailCard from '../../components/CourseDetailCard'
import PersonalDetailCard from '../../components/PersonalDetailCard'

export default function index() {
  const stepData = useSelector((state) => state.courseState.stepData);
  console.log(stepData.length);
  return (
    <div className="flex flex-row gap-[100px] justify-center mt-10">
      <div>
        <PersonalDetailCard />
      </div>
      <div>
        {Array.from({ length: stepData.length -1 }, (_, i) => i + 1).map(
          (data, index) => (
            <CourseDetailCard key = {index} courseNo={data} />  
          )
        )}
      </div>
    </div>
  )
}
