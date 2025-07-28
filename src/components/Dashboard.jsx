import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css"
const Dashboard = ()=>{
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem("token");
        navigate("/");
    }
    return(
        <>
            <section className="common">
                <Link to="dashboard/get"> GET </Link>
            </section>
            <section className="common">
                <Link to="dashboard/post"> POST </Link>
            </section>
            <section className="common">
                <Link to="dashboard/put"> PUT </Link>
            </section>
            <section className="common">
                <Link to="dashboard/delete"> DELETE </Link>
            </section>
            <section className="common" onClick={logout}>
                Logout
            </section>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Dashboard;