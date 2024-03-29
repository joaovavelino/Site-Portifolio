import {useState, useEffect, useRef} from 'react'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('tex-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_4tbtl1t',
                'template_k9ddigs',
                form.current,
                'pyLVuHVu-x7MB_i71'
            )
            .then(
                () => {
                    alert('Email successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the email, please try again')
                }

            )
    }
    
    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
            </h1>
            <p>
                I'm looking for a job on front-end now, in a english, or portuguese speaking enviroment, if i got your interest.
                Please, leave me a message here.
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            required 
                        />
                        </li>
                        <li>
                            <input
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            required
                            />
                        </li>
                        <li>
                            <textarea 
                            placeholder="Message" 
                            name="message"
                            required>
                            </textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
            </div>
            <div className='info-map'>
                

            </div>
        </div>
        {/* <Loader type="pacman"/> */}
        </>
    )
}

export default Contact