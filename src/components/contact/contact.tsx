import { useState } from 'react';
import './contact.scss';
import emailsjs from 'emailjs-com';
import Anchor from '../ui/anchor/anchor';

function Contact() {

    const formContact = {name : '', email : '', subject : '', message : ''}
    const [formData, setFormData] = useState(formContact)
    const [showAlertMessage, setAlertMessage] = useState<{state:boolean, message: string}>({
        state : false,
        message: '',
    })

    const [isMessageLoading, setMessageLoading] = useState(false);

    const handleFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const sendFormData = async (e: React.FormEvent)=> {
        e.preventDefault();

        const timer = window.setTimeout(() => {
            setAlertMessage({state: false, message: ''});
        }, 4000);

        setMessageLoading(true);

        await emailsjs.send('service_2c8spsz', 'template_5fpi5oc786iuygb', formData, 'hola')
            .then((response)=>{
                if(response.status == 200){
                    setAlertMessage({state: true, message: 'Gracias por contactarte conmigo, estaremos en contacto en breve.'})

                    setFormData(formContact)
                    setMessageLoading(false)
                    return () => window.clearTimeout(timer)
                }
            },
            (error)=>{
                console.log('Error al enviar mensaje: ', error)
                    setAlertMessage({state: true, message: 'Ha ocurrido un error, intentalo de nuevo.'})
                    setFormData(formContact)
                    setMessageLoading(false)
                    return () => window.clearTimeout(timer)
            }
        )
    }

  return (
    <>
        <section className='contact' id='contact'>
            <article className='contact__desc'>
                <h2>Compartamos <span>ideas</span></h2>
                <p>Siempre estoy abierto a nuevas oportunidades, amistades y colaboraciones. Trabajemos juntos por encontrar soluciones para darle vida a esas grandes ideas.</p>
            </article>

            <div className="contact__media">
                <form onSubmit={sendFormData}>
                    <h2>Envíame un mensaje</h2>
                    
                    <label htmlFor='name'>
                        Nombre
                        <input type="text" id='name' name="name" placeholder='Tu nombre' required value={formData.name} onChange={handleFormData}/>
                    </label>

                    <label htmlFor='email'>
                        Email
                        <input inputMode='email' type="email" id='email' name="email" placeholder='Tu correo' required value={formData.email} onChange={handleFormData}/>
                    </label>

                    <label htmlFor='subject'>
                        Asunto
                        <input type="text" id='subject' name="subject" placeholder='Cuentame el motivo' required value={formData.subject} onChange={handleFormData}/>
                    </label>

                    <label htmlFor='message'>
                        Mensaje
                        <textarea name="message" id="message" placeholder='Comparteme tu idea' required value={formData.message} onChange={handleFormData}></textarea>
                    </label>

                    <button type='submit' aria-label='Enviar mensaje'>
                        { !isMessageLoading ? (
                            <span>
                                <svg role="img" aria-hidden="true" fill='none' stroke='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"/></svg>
                                Enviar Mensaje 
                            </span>
                        ) : (
                            <span>
                                Enviando Mensaje...
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="16" strokeDashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path><path strokeDasharray="64" strokeDashoffset="64" strokeOpacity="0.3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="strokeDashoffset" dur="1.2s" values="64;0"/></path></g></svg>
                            </span>
                            )
                        }
                    </button>
                </form>
                        
                <div className="contact__info">
                    <article>
                        <h3>Información de contacto</h3>
                        <p>Si tienes un proyecto en mente, quieres colaborar o simplemente decir hola, sientete libre de hacerlo. Te responderé lo más pronto posible.</p>
                    </article>

                    <div className="contact__info-item">
                        <div className='contact__info-social'>
                            <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(2 3)"><path d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="m13.5 5.5h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="m4.49884033 6.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z" fill="currentColor"/><path d="m13.5 9.5h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                        </div>
                        <article>
                            <h5>Email</h5>
                            <Anchor variant='link' href='mailto:luis-gonzales6@hotmail.com' target='_blank'>luis-gonzales6@hotmail.com</Anchor>
                        </article>
                    </div>
                    <div className="contact__info-item">
                        <div className='contact__info-social'>
                            <svg viewBox="0 0 24 24" fill="none" stroke='currentColor' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.42857 8.96884H13.1429V10.8193C13.6783 9.75524 15.0503 8.79887 17.1114 8.79887C21.0623 8.79887 22 10.9167 22 14.8028V22H18V15.6878C18 13.4748 17.4646 12.2266 16.1029 12.2266C14.2143 12.2266 13.4286 13.5722 13.4286 15.6878V22H9.42857V8.96884ZM2.57143 21.83H6.57143V8.79887H2.57143V21.83ZM7.14286 4.54958C7.14286 4.88439 7.07635 5.21593 6.94712 5.52526C6.81789 5.83458 6.62848 6.11565 6.3897 6.3524C6.15092 6.58915 5.86745 6.77695 5.55547 6.90508C5.24349 7.0332 4.90911 7.09915 4.57143 7.09915C4.23374 7.09915 3.89937 7.0332 3.58739 6.90508C3.27541 6.77695 2.99193 6.58915 2.75315 6.3524C2.51437 6.11565 2.32496 5.83458 2.19574 5.52526C2.06651 5.21593 2 4.88439 2 4.54958C2 3.87339 2.27092 3.22489 2.75315 2.74675C3.23539 2.26862 3.88944 2 4.57143 2C5.25341 2 5.90747 2.26862 6.3897 2.74675C6.87194 3.22489 7.14286 3.87339 7.14286 4.54958Z"/></svg>
                        </div>
                        <article>
                            <h5>Linkedin</h5>
                            <Anchor variant='link' href='https://www.linkedin.com/in/luis-edier-aguirre/' target='_blank'>linkedin.com/in/edier-aguirre</Anchor>
                        </article>
                    </div>
                    <div className="contact__info-item">
                        <div className='contact__info-social'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <article>
                            <h5>Github</h5>
                            <Anchor variant='link' href='https://github.com/Eddy-glitcher' target='_blank'>github.com/eddy_glitcher</Anchor>
                        </article>
                    </div>

                    <div className="contact__info-item contact__info-item--extra">
                        <div className='contact__info-status'></div>
                        <article>
                            <h5>Disponibilidad</h5>
                            <p>Actualmente estoy abierto a nuevas oportunidades y colaboraciones.</p>
                        </article>
                    </div>
                </div>
            </div>

            {showAlertMessage.state && (
                <div className={`contact__alert`} role='alert'>
                    <p>{showAlertMessage.message}</p>
                </div>
            )}
        </section>
    </>
  )
}

export default Contact
