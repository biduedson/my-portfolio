import React from 'react'
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'

function MainContent() {
    return (
        <div id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </div>
    )
}

export default MainContent
