import React, { useEffect, useState } from 'react'
import axios from "axios"
import '../styles.css/homepage.css';
const Homepage = () => {
    const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [department,setDepartment]=useState([])
  const [location,setLocation]=useState([])
  const [functionData, setFunction]=useState([])

  const onChange = (e) => {
    let { name, value } = e.target;
   
      setForm({
        ...form,
        [name]: value,
      });


    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form,"form")
        getFilteredData(form)
       
      };





      const getFilteredData=(params)=>{
        console.log(params.department,"riu")

       const data1= data.filter((dat)=>(
         dat.department?.title==params.department
         


       ))
       
      setData(data1)
    }
      useEffect(() => {
        getAlldData()
        getDepartmentData()
        getLocationData()
        getfunctions()

        
       
      }, [])
    
      
   

      

      const getAlldData = async (params) => {
       
        const resp = await axios.get(`https://teknorix.jobsoid.com/api/v1/jobs`)
        setData(resp.data,"data display")
       
      };
      
  
      const getDepartmentData = async () => {
        const dept = await axios.get("https://teknorix.jobsoid.com/api/v1/departments");
        setDepartment(dept.data);
      };
      const getLocationData = async () => {
        const location = await axios.get("https://teknorix.jobsoid.com/api/v1/locations");
        setLocation(location.data);
      };
      const getfunctions = async () => {
        const func = await axios.get("https://teknorix.jobsoid.com/api/v1/functions");
        setFunction(func.data);
      };
  return (
    <div>
   
<div>
<form onSubmit={onSubmit}>
<input type="text"   placeholder='search'  name="search"
              id="search"
              value={form.search}
              onChange={onChange} />
 <button type='submit'>Search</button>



            <select
              name="department"
              id="department"
              value={form.department}
              onChange={onChange}
              
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="Development">Development</option>
              <option value="Admin">Admin</option>
             
            </select>
            <select
              name="location"
              id="location"
              value={form.location}
              onChange={onChange}
             
            >
              <option value="">Select location</option>
              <option value="Verna">verna</option>
              <option value="Chicago">Chicago</option>
              <option value="margao">margao</option>
              {/* margao */}
             
            </select>
            <select
              name="function"
              id="function"
              value={form.function}
              onChange={onChange}
             
            >
              <option value="">Select function</option>
              <option value="Accounting">Accounting</option>
              <option value="Engineering">Engineering</option>
             
             
            </select>
          
<div>
    <p>all search items displayed here</p>
</div>
</form>
<div>
    
    {data.map((data)=>{
     
 return <>
 <div key={data.id}>{data.title}</div>
<div>{data.department?.title} {data.location?.title}</div>


 </>
    })}
</div>
</div>
    </div>
  )
}

export default Homepage