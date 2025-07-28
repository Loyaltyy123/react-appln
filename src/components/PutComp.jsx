// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// const PutComp=()=>{
//     const uname=useRef(null);
//     const ujob=useRef(null);
//     const [newEmp,setNewemp]=useState({});
//     const put_content= async ()=>{
//         const res=await axios.put("https://reqres.in/api/users",{"name":uname.current.value,"job":ujob.current.value},{headers:{"Content-Type": "application/json","x-api-key":"reqres-free-v1","Authorization":`Bearer ${localStorage.getItem("token")}`}})
//         const {data}=res;
//         setNewemp(data);
//     }
//     return(
//         <>
//             <br /><br />
//             <input type="text" ref={uname}/><br />
//             <input type="text" ref={ujob}/><br />
//             <button onClick={put_content}>put</button>

//             <p>{JSON.stringify(newEmp)}</p>
//         </>
//     )
// }
// export default PutComp;
import axios from "axios";
import { useRef, useState } from "react";
 
const PutComp = () => {
  const [status,setStatus]=useState(null);
  const uid =useRef(null);
  const uname=useRef(null);
  const ujob=useRef(null);
  const [newemp,setNewemp]=useState({});
  const api_call= async (id,name,job)=>{
    const res=await axios.put(`https://reqres.in/api/users/${id}`,
      {"Name":name,"Job":job} ,{headers:{"Content-Type":"application/json","Authorization":`Bearer ${localStorage.getItem("token")}`,"x-api-key": "reqres-free-v1"}})
      const {data}=res;
      console.log(data)
      setNewemp(data)
      setStatus(res.status);
 
  }
  const fun= ()=>{
          api_call(uid.current.value,uname.current.value,ujob.current.value);
    }
 
  return (
    <>
    <input type="Number" ref={uid} placeholder="Enter Id"/>
    <br />
    <br />
        <input type="text" ref={uname} placeholder="Enter Name" />
        <br />
        <br />
        <input type="text" ref={ujob} placeholder="Enter Job" />
        <br /><br />
        <button onClick={fun}>ClickMe</button>
        <h1>{newemp.length}</h1>
 
        {status == 200 ? (
          <>
          <h1>Updated Successfully</h1>
          <table border={1} align="center" cellPadding={10} cellSpacing={10}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{uid.current.value}</th>
                <th>{newemp.Name}</th>
                <th>{newemp.Job}</th>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
          </>
          ) :( <div> <h3>Enter Details</h3></div>)
         
          }
 
    </>
  )
}
 
export default PutComp;
 