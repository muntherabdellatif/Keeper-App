import React from "react";

function Footer () {
    let toDay = new Date();
    const currentYear = toDay.getFullYear() ;
    return (
        <footer>
            <p>copyright <i className="far fa-copyright"></i>  {currentYear}</p>
        </footer>
    );
}

export  default Footer ; 