import { useState } from 'react'
import './Sections.css'
import graphql from '../../img/graphql.svg'
import nodejsLogo from '../../img/nodejs.svg'
import reactLogo from '../../img/react.svg'
import tsLogo from '../../img/typescript.svg'
import mysqlLogo from '../../img/mysql.svg'
import html from '../../img/html.svg'
import python from '../../img/python.svg'
import nestjs from '../../img/nestjs.svg'
import css from '../../img/css.svg'
import js from '../../img/js.svg'


export const Skills = ({id}: {id:string}) =>{
    const [listSkills]= useState([
        {
            name:"HTML",
            img:html,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"GraphQl",
            img:graphql,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"MySql",
            img:mysqlLogo,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"NodeJs",
            img:nodejsLogo,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"React",
            img:reactLogo,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"TypeScript",
            img:tsLogo,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"Css",
            img:css,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"NestJs",
            img:nestjs,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"Python",
            img:python,
            desc:"lroemdfhjisdhg",
        },
        {
            name:"JavaScript",
            img:js,
            desc:"lroemdfhjisdhg",
        },
        
    ])
    return(
        <section className='Skills' id='skills'>
                <div className='skill-title'>
                    <h3>Mis Skills</h3>
                </div>
                <div className='skills-list'>
                {
                    listSkills.map((value, key)=>(
                        <div className="content-skills" key={key}>
                            <div className="skill-img">
                                <img src={value.img} alt="" />
                            </div>
                            <div className="skill-name">
                                <h4>{value.name}</h4>
                            </div>
                        </div>
                    ))
                }
                </div>
            
        </section>
    )
}