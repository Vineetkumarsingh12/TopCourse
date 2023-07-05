import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = ({course,flag,setflag}) => {
 function clickHandler(){
  if(flag.includes(course.id)){
setflag((prev)=>prev.filter((cid)=>(cid!==course.id)));
toast.warning("like removed");
  }
  else{
    if(flag.length===0){
      setflag([course.id]);
    }
else{
  setflag((prev)=>[...prev,course
  .id]);
}
toast.success("liked successfully");

  }

  }
  return (
    <div className='card'> 
        <div>
     <div className='image-container'>   
<img src={course.image.url} alt="course" ></img>


<button className='btn' onClick={clickHandler}>
    {!flag.includes(course.id) ? <FcLikePlaceholder fontSize="1.75rem"/>:<FcLike fontSize="1.75rem"/>}
</button>
</div>

      </div>
      <div className='para'>
        <p className='title'>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card;
