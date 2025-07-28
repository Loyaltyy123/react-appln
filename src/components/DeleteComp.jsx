import axios from "axios"
import { useEffect } from "react"
const DeleteComp = ()=>{
    const deleteUser=async ()=>{
        const res=await axios.delete("https://reqres.in/api/users",{headers:{
                "x-api-key": "reqres-free-v1",
                "Authorization": `Bearer ${localStorage.getItem("token")}`}
            })
            console.log(res)
    }
    useEffect(()=>{
        deleteUser();
    },[])
    return(
        <>
            <p>DeleteComp Soon...!</p>
        </>
    )
}
export default DeleteComp;