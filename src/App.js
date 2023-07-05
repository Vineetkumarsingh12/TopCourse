import './App.css';
import { apiUrl,filterData } from './data';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from './Components/Spinner';


function App() {
  const [courses,setCourses]=useState("");
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].tittle);
  useEffect(  ()=>{
    setLoading(true);
    const fetchData=async()=>{
      try{
        const res=await fetch(apiUrl);
        const data=await res.json();
        setCourses(data.data);
        setLoading(false);
      }
      catch(error){
        toast.error("Something went wrong");
      }
    }
  fetchData();
  },[]);

  return (
    <div className="App">
  
<Navbar className="navbar"/>


<Filter filterData={filterData} category={category} setCategory={setCategory}/>

<div>
  {
    loading ? <Spinner/> :<Cards courses={courses} category={category}></Cards>
  }
</div>

    </div>
  );
}
 
export default App;
