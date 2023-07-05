import React from 'react'
import Card from './Card';
import { useState } from 'react';
const Cards = ({courses,category }) => {
 const [flag,setflag]=useState([]);
 let categ=category;
 
  
    const getCourses=()=>{
        if(categ==="All"){
            let allCourses=[];
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach(course=>{
                allCourses.push(course);
            })
        })
        return allCourses;
        }
        else
        return  courses[categ];
}
  return (
    <div className='cards'>
 {


    getCourses().map(course=>{
        return(
            <Card course={course} flag={flag} setflag={setflag} />
        )
    })
 }
    </div>
  )
}

export default Cards;
