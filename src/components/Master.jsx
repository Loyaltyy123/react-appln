import { Suspense,lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Login = lazy(()=> import("./Login"));
const Dashboard = lazy(()=> import("./Dashboard"));
const GetComp = lazy(()=> import("./GetComp"));
const PostComp = lazy(()=> import("./PostComp"));
const PutComp = lazy(()=> import("./PutComp"));
const DeleteComp = lazy(()=> import("./DeleteComp"));
const Error = lazy(()=> import("./Error"));
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Suspense fallback={<div>Loading....!</div>}>
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
                </Suspense>
            </BrowserRouter>
        </>
    )
}
export default Master;