import React, {useEffect, useState} from 'react';
import mySvg from "../assets/loader.svg";
import "./loading.css";

const Loading = () => {

    return(
        <section className="loading">
            <img src={mySvg} />
        </section>
    );
}
export default Loading;