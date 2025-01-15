import React,{Fragment} from "react";
import Grid from "./grid";

const Container = (props) =>{
    return <Fragment>
        <div className="h-screen w-screen p-10 bg-black flex">
            <Grid />
        </div>
    </Fragment>
}

export default Container;