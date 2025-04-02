import { useState } from "react"
import projects from '../../img/hbomax.jpg'
import likereal from '../../img/likereal.jpg'
import './Project.css'
import graphql from '../../img/graphql.svg'
import nodejsLogo from '../../img/nodejs.svg'
import reactLogo from '../../img/react.svg'
import tsLogo from '../../img/typescript.svg'
import expressLogo from '../../img/express.svg'


export const Projects = ({id}: {id:string}) =>{
    const [listProjects] = useState([
        {
            name:"Clon de HBOMAX",
            desc: "Realizar un clon de la página de HBOMAX con información en streaming.",
            mission:"Desarrollar entorno backend,front utilizando graphql y apolloClient para la interacción con el backend ",
            logosfront:[reactLogo,tsLogo,graphql],
            logosbackend:[nodejsLogo,graphql,tsLogo],
            lenguajes:"React TypeScript GRAHPQL",
            images: projects,
            links:"https://github.com/RkzJacob/FRONT-CLONE-HBOMAX"
        },
        {
            name:"Like Real",
            desc: "Proyecto de red social con usuarios de pago y premium",
            mission:"Desarrollar una aplicación web en la cual se puedan ver post, usuarios, seguidores y seguidos, etc.",
            logosfront:[reactLogo,tsLogo,graphql],
            logosbackend:[nodejsLogo,graphql,tsLogo],
            lenguajes:"HTML 5 JS TS",
            images: likereal,
            links:"https://likerial.com/"
        },
        {
            name:"Dashboard bigeo",
            desc: "Dashboard para la empresa Bigeo, en el cual se entreguen KPI de las plantaciones de paltas.",
            mission:"Desarrollar un dashboard que funcione con la base de datos de las plantaciones de bigeo.",
            lenguajes:"HTML 5 JS TS",
            logosfront:[reactLogo,tsLogo,expressLogo],
            logosbackend:[nodejsLogo,tsLogo,expressLogo],
            images: projects,
            links:"https://github.com/RkzJacob/GITHUB",
        }
    ])
    return(
        <section className="projects" id="projects">
            <div className="title">
                Mis proyectos
            </div>
            
            <div className="list">
                {
                    listProjects.map((value,key)=>(
                        <div key={key} className="item">
                            <div className="overlay">
                                <div className="images">
                                        <img src={value.images} alt="" /> 
                                </div>
                                <div className="contents">
                                    <h3>Tecnologias Front</h3>
                                    <ul>
                                        {value.logosfront.map((logo,index)=>(
                                            <li key={index}><img src={logo} alt="graphql" /></li>
                                        ))}
                                        
                                    </ul>
                                    <h3>Tecnologias Backend</h3>
                                    <ul>
                                        {value.logosbackend.map((logo,index)=>(
                                            <li key={index}><img src={logo} alt="graphql" /></li>
                                        ))}
                                    </ul>
                                    <a href={value.links} className="project__link" target="_blank">Ver Proyecto</a>
                                </div>
                            </div>
                            <div className="content">   
                            <h3>{value.name}</h3>
                                <div className="desc">
                                    <div className="de">{value.desc}</div>
                                </div>
                                <div className="mission">
                                    <h3>Mision</h3>
                                    <div className="de">{value.mission}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}