import { useEffect, useState, useRef } from "react";
import axios from "axios";
const GetComp = ()=>{
    const ref1 = useRef(null);
    const [emp,setEmp] = useState({});
    const get_emp_details = async ()=>{
        const res =  await axios.get(`https://reqres.in/api/users/${ref1.current.value}`,{
            headers:{
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const {data:x} = res;
        const {data} = x;
        setEmp(data);
    }
    // useEffect(()=>{
    //     get_emp_details();
    // },[]);
    const load_data = ()=>{
        get_emp_details();
    }
    return(
        <>
           
           <input type="number" ref={ref1} placeholder="enter number"></input>
           <button onClick={load_data}>Load Data</button>

            {
                Object.keys(emp).length != 0 ? ( <table border={1} align="center" cellSpacing={10} cellPadding={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.email}</td>
                        <td>{emp.first_name}</td>
                        <td>{emp.last_name}</td>
                        <td>
                            <img src={emp.avatar} width={50} alt="Avatar"></img>
                        </td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
           </table>) : (<div></div>)
                
            }


          
        </>
    )
}
export default GetComp;