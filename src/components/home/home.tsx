import '@/App.css';
import './home.scss';
import Button from '@/components/ui/button/button';

function Home() {
    return (
    <>
        <section className='home'>
            <div className="home__center">
                <article className='home__desc'>
                    <h4>Hola, Soy</h4>

                    <h1>
                        <span>Edier Aguirre</span>
                    </h1>

                    <h3>Frontend Web Developer</h3>

                    <p>Creador de las mejores experiencias digitales con tecnologias modernas, con uso de las mejores prácticas de desarrollo escalables, mantenibles y que hagan la diferencia</p>

                </article>

                <div className="home__btns">
                    <Button variant='primary'>Proyectos</Button>
                    <Button variant='secondary'>Conectemos</Button>
                </div>
            
                <div className="home__social">
                    <div className='home__social-github'>
                        <Button variant='social'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </Button>
                    </div>
                    <div className='home__social-linkedin'>
                        <Button variant='social'>
                            <svg className='home__social-linkedin' viewBox="0 0 24 24" fill="none" stroke='currentColor' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.42857 8.96884H13.1429V10.8193C13.6783 9.75524 15.0503 8.79887 17.1114 8.79887C21.0623 8.79887 22 10.9167 22 14.8028V22H18V15.6878C18 13.4748 17.4646 12.2266 16.1029 12.2266C14.2143 12.2266 13.4286 13.5722 13.4286 15.6878V22H9.42857V8.96884ZM2.57143 21.83H6.57143V8.79887H2.57143V21.83ZM7.14286 4.54958C7.14286 4.88439 7.07635 5.21593 6.94712 5.52526C6.81789 5.83458 6.62848 6.11565 6.3897 6.3524C6.15092 6.58915 5.86745 6.77695 5.55547 6.90508C5.24349 7.0332 4.90911 7.09915 4.57143 7.09915C4.23374 7.09915 3.89937 7.0332 3.58739 6.90508C3.27541 6.77695 2.99193 6.58915 2.75315 6.3524C2.51437 6.11565 2.32496 5.83458 2.19574 5.52526C2.06651 5.21593 2 4.88439 2 4.54958C2 3.87339 2.27092 3.22489 2.75315 2.74675C3.23539 2.26862 3.88944 2 4.57143 2C5.25341 2 5.90747 2.26862 6.3897 2.74675C6.87194 3.22489 7.14286 3.87339 7.14286 4.54958Z"/></svg>
                        </Button>
                    </div>
                    <div className='home__social-message'>
                        <Button variant='social'>
                            <svg className='home__social-message' viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(2 3)"><path d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="m13.5 5.5h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="m4.49884033 6.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z" fill="currentColor"/><path d="m13.5 9.5h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                        </Button>
                    </div>
                </div>
            </div>
        
            <div className="home__arrow">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/></svg>
            </div>
        </section>
    </>
    )
}

export default Home
