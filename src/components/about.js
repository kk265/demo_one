import React from "react";
import Header from "./header";
import Calculator from "./calculator";

import styles from "./AboutUs.module.css";

function About() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let fruit = fruits.at(1);

    return (
        <div className={`${styles.container}`}>
            <Header />
            <h1 className="global-style">About Us</h1>
            <p>{fruits}</p>
            <Calculator />
        </div>
    );
}

export default About;
