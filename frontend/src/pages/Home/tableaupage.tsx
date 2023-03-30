import { lazy } from "react";
import Login from "./login"

const tableau =require("tableau-api");
const TableauEmbed = lazy(()=>import("./TableauEmbed"))
const Container = lazy(() => import("../../common/Container"));
// const Login = lazy(()=> import("./login"));



const TableauePAge = () => {
    return (
        <Container>
            {/* <Login/> */}
            <TableauEmbed/>
        </Container>
    );
};

export default TableauePAge;