import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import GetComp from "./GetComp";
import PostComp from "./PostComp";
import PutComp from "./PutComp";
import DeleteComp from "./DeleteComp";
import Error from "./Error";
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                        <Route path="dashboard/get" element={<GetComp></GetComp>}></Route>
                        <Route path="dashboard/post" element={<PostComp></PostComp>}></Route>
                        <Route path="dashboard/put" element={<PutComp></PutComp>}></Route>
                        <Route path="dashboard/delete" element={<DeleteComp></DeleteComp>}></Route>
                    </Route>
                    <Route path="/error" element={<Error></Error>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;