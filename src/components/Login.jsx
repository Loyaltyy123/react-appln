import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const useremail = useRef(null);
    const userpassword = useRef(null);
    const navigate = useNavigate();
    
    const login = async ()=>{
        try{
            const res = await axios.post("https://reqres.in/api/login",{"email":useremail.current.value,"password":userpassword.current.value},{headers:{"x-api-key": "reqres-free-v1"}});
            const {data} = res;
            const {token} = data;
            localStorage.setItem("token",token);
            navigate("/dashboard");
        }catch(err){
            console.log("Hello");
            navigate("/error");
        }
    }

    return(
        <>
            <fieldset>
                <legend>LOGIN</legend>
                <input type="email" ref={useremail} placeholder="enter email"></input>
                <br></br><br></br>
                <input type="password" ref={userpassword} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </>
    )
}
export default Login;