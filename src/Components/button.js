import React from "react";
import { useState } from "react";
function Button(props) {

    return (
        <div>
            <button type="button" className="btn btn-light" style={{width:100}}>{props.name}</button>
        </div>

    );

}
export default Button;