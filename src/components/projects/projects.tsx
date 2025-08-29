import Anchor from '../ui/anchor/anchor';
import './projects.scss';

function Projects() {

  const projects = [
    {
      image : '/images/project.png',
      imageDesc : '',
      title : 'Marvel Universe',
      description : 'Sitio web que consume la Api de Marvel para generar cards con la información de cada héroe',
      technologies : ['Angular','Typescript', 'Html', 'Sass', 'CarouselModule', 'NgxPaginator', 'NgxSkeletonLoader'],
      liveApp : '',
      codeSrc : '',
    }
  ]

  return (
    <>
        <section className='projects' id='projects'>
            <article className='projects__desc'>
                <h2>Mis <span>Proyectos</span></h2>
                <p>Mis mas recientes trabajos en donde demuestro mis conocimientos, experiencia y tecnologías centradas en la experiencia de usuario.</p>
            </article>

            <div className="project__cards">
              {
                projects.map((project, index)=>{
                  return (
                    <article className='project__card' key={index}>
                    <picture>
                      <img src={project.image} alt={project.imageDesc}/>
                    </picture>

                  <div className="project__card-body">
                      <article>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </article>

                      <ul>
                        {
                          project.technologies.map((technology, index)=>{
                            return (
                              <li key={index}>{technology}</li>
                            )
                          })
                        }
                      </ul>

                      <div className='project__card-btns'>
                        <Anchor variant="primary" href={project.liveApp} arial-label="Ver app en vivo">
                          <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke='currentColor' viewBox="0 0 640 640"><path d="M354.4 83.8C359.4 71.8 371.1 64 384 64L544 64C561.7 64 576 78.3 576 96L576 256C576 268.9 568.2 280.6 556.2 285.6C544.2 290.6 530.5 287.8 521.3 278.7L464 221.3L310.6 374.6C298.1 387.1 277.8 387.1 265.3 374.6C252.8 362.1 252.8 341.8 265.3 329.3L418.7 176L361.4 118.6C352.2 109.4 349.5 95.7 354.5 83.7zM64 240C64 195.8 99.8 160 144 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L144 224C135.2 224 128 231.2 128 240L128 496C128 504.8 135.2 512 144 512L400 512C408.8 512 416 504.8 416 496L416 416C416 398.3 430.3 384 448 384C465.7 384 480 398.3 480 416L480 496C480 540.2 444.2 576 400 576L144 576C99.8 576 64 540.2 64 496L64 240z"/></svg>
                          Ver App
                        </Anchor>
                        <Anchor variant='secondary' href={project.codeSrc} arial-label="Ver codigo fuente">
                          <svg role="img" aria-hidden="true" viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          Ver Código
                        </Anchor>
                      </div>
                  </div>
                    </article>
                  )
                })
              }
            </div>
        </section>
    </>
  )
}

export default Projects
