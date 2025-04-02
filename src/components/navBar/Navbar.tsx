import { useState } from "react"
import viktor from '../../img/viktor.jpeg'
import './navbar.css'



export const NavBar = () =>{
    const [listNav] = useState(['Home','Skills','Projects']);

    const handleScroll = (sectionId:string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <header>
            <div className="logo">
                <img src={viktor} alt="" />
            </div>
            <nav>
                {
                    listNav.map((value, key)=>(
                        <span className="active" key={key} onClick={() => handleScroll(value.toLowerCase())}>{value}</span>
                    ))
                }

            </nav>
        </header>
    )
}