import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('tex-animate-hover')
        }, 3000)
    }, [])

    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e',]}
                      idx={15}
                    />
                </h1>
                <p>blah blah blah</p>
                <p>blah blah blah</p>
                <p>blah blah blah</p>
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
    </>
    )
}

export default About