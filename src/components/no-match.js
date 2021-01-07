import React from "react";
import { Link } from "react-router-dom";

export default function() {

    document.getElementById("blocks").style.display ="none";
    document.getElementById("my-gallery").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    return (
        <div>
            <h2>We couldn't find that page</h2>
            <Link to="/">Return to homepage</Link>
        </div>
    );
}