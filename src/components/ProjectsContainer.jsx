import React from 'react'
import { myPrpject } from '../data/projects'


function ProjectsContainer() {

    console.log(myPrpject)

    return (
        <section className='projects-container'>
            <h2>Projetos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                omnis sunt reiciendis temporibus minus dolorem corrupti laboriosam praesentium modi magnam.
                Fuga architecto iusto dolore a quia tempore beatae quaerat corrupti!
            </p>

            <div className='projcts-grid'>
                {myPrpject.map((project) => (

                    <div div className="card-projects" id={project.name} key={project.name}
                        style={{ backgroundImage: `url(${project.image})` }}>
                        <a href={project.link}>Ver projeto</a>
                    </div>

                ))}
            </div>


        </section >

    )
}

export default ProjectsContainer
