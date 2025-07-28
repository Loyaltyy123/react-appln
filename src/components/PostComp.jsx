import axios from "axios";
import { useRef, useState } from "react";
const PostComp = ()=>{
    const name = useRef(null);
    const job = useRef(null);
    const [newemp,setNewemp] = useState({});
    const make_api_call = async ()=>{
        const res = await axios.post("https://reqres.in/api/users",{
            "name":name.current.value,
            "job":job.current.value
        },{
            headers:{
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const {data} = res;
        setNewemp(data);
    }
    const send_data = ()=>{
        make_api_call();
    }
    return(
        <>
            <input type="text" ref={name} placeholder="enter name...."/>
            <br></br><br></br>
            <input type="text" ref={job} placeholder="enter job...." />
            <br></br><br></br>
            <button onClick={send_data}>Send Data</button>
            <br></br><br></br>
            <p style={{color:"red"}}>{JSON.stringify(newemp)}</p>
        </>
    )
}
export default PostComp;