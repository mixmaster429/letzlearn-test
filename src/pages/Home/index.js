import React from 'react'
import {useState} from 'react'
import PersonalDetail from '../../components/PersonalDetail'
import CourseDetail from '../../components/CourseDetail'
import Stepper from '../../components/Stepper'
import Sidebar from '../../components/Sidebar'

export default function index() {
  const [ count, setCount ] = useState(1);
  const downCount = () => {
    setCount(count - 1);
  }
  const upCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-row gap-5 mt-10 justify-center">
      <div className="flex flex-row gap-5 mt-10">
        <Sidebar count={count} />
        <Stepper count={count} setCount = {setCount} />
      </div>
      <div className="ml-[100px]">
        {
          count === 1 ? 
          <PersonalDetail next={upCount} />:
          <CourseDetail courseNo={count - 1} prev={downCount} next={upCount}/>
        }
      </div>
    </div>
  )
}
