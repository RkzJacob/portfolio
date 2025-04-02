import jinx from '../../img/jacob.png'
import './Home.css'
import pdf from '../../assets/cv.pdf'

export const Home = ({id}: {id:string}) =>{
    return(
        
        <section className="home" id='home'>
            <div className="content">
                <div className="name">
                    <div className='namejacob'>
                        JACOB PONCE SUAZO
                    </div>                    
                    <span>DEV FULLSTACK</span>
                </div>
                <div className="desc">
                Desarrollador FullStack con experiencia en el desarrollo de aplicaciones web y móviles. Dispuesto a aprender nuevas tecnologías si es necesario. He trabajado con tecnologías como ReactJs, Nodejs, ExpressJS, Mysql, GraphQL, Postgress, JavaScript y Css.
                </div>
                <div   className="find">
                        <h2>Contacto</h2>
                        <ul>
                            <li>
                                <a href="https://github.com/RkzJacob">
                                    <i className="fa-brands fa-github "></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jacob-jos%C3%A9-ponce-suazo/">
                                <i className="fa-brands fa-linkedin "></i>
                                </a>
                            </li>
                            <li className="cv">
                                <a href={pdf}>
                                    <i className="fa-solid fa-link "></i>
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src={jinx} alt="" />
                    <div className="info">
                        <div>FullStack Developer</div>
                        <div>Chilean</div>
                        <div>Hombre</div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}