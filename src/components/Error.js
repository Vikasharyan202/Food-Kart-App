import React from "react";
import { useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h2>Oops!</h2>
            <h3> something error in this code</h3>
            <h3>
                {err.status} : {err.statusText}
            </h3>
        </div>
    )
}

export default Error;