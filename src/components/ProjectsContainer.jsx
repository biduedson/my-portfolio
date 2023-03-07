import React from 'react'
import { myPrpject } from '../data/projects'


function ProjectsContainer() {

    console.log(myPrpject)

    return (
        <section className='projects-container'>
            <h2>Projetos</h2>
            <p>
                Alguns projetos desenvolvidos usandos as linguagens  e bilbliotecas descritas a cima.
            </p>

            <div className='projcts-grid'>
                {myPrpject.map((project) => (

                    <div div className="card-projects" id={project.name} key={project.name}>
                        <img src={project.image} alt="" />
                        <a href={project.link}>Ver projeto</a>
                    </div>

                ))}
            </div>


        </section >

    )
}

export default ProjectsContainer
