import { useEffect, useState } from 'react'
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('tex-animate-hover')
        }, 3000)
    }, [])

    return (
    <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e',]}
                      idx={15}
                    />
                </h1>
                <p>Hi, I'm João Victor Avelino, a full-stack developer with a passion for front-end, a place where I can express more of my creativity.</p>
                <p>I really enjoy working on teams, since I believe it's the best way for me to learn. </p>
                <p>For a year and a half, I studied Cultural Production, which allowed me to develop my creativity and communication skills through contact with different cultures and people.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className="cubespinner">
                <div className='face1'>
                    <FontAwesomeIcon icon={faGithub} color="#00000" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
                </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About