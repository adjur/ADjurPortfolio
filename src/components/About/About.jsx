import React from "react";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section>
        <h2>About</h2>
        <img
            src={getImageUrl("aboutImage.png")}
            alt="Me sitting with a laptop" />
        <ul>
            <li>
                <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
                <div>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized back-end systems and APIs</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend develooper with experience in building responsive and optimized sites</p>
                </div>
            </li>
        </ul>
    </section>
};