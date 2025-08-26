import '@/App.css';
import './header.scss';
import Anchor from '@/components/ui/anchor/anchor';
import { useEffect, useState } from 'react';

function Header() {

const navItems = [
  { label: "Inicio", id: "home" },
  { label: "Acerca", id: "about" },
  { label: "Proyectos", id: "projects" },
  { label: "Contacto", id: "contact" }
];

const [scrollPosition, setScrollPosition] = useState(0);

useEffect(()=>{
  const handleScroll = ()=>{
    setScrollPosition(window.scrollY);
  }

  window.addEventListener('scroll', handleScroll);

  return ()=>{
    window.removeEventListener('scroll', handleScroll);
  }
}, []);

const [showMenuList, setShowMenuList]= useState(true);

  return (
    <>
        <header className={`header ${scrollPosition > 50 ? 'header--blur-efect' : ''}`}>
            <nav className='header__nav'>
                <Anchor variant='ghost' href='#home'>EA</Anchor>
                <ul className={`header__menu ${showMenuList ? 'header__menu--show header--blur-efect' : ''}`}>
                {
                  navItems.map((item)=> 
                    <li key={item.id} className='header__item'>
                      <Anchor href={`#${item.id}`} variant='link' onClick={()=> {setShowMenuList((prev) => !prev)}}>{item.label}</Anchor>
                    </li>
                )}
                  <li className='header__item header__item--contact'>
                      <Anchor href='#contact' variant='primary'>Hablémos</Anchor>
                  </li>
                </ul>

                <button className='header__toggle' onClick={() => setShowMenuList((prev) => !prev)} aria-label='abrir/cerrar menú'>
                  { showMenuList ? ( 
                    <svg className="header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
                  ): ( 
                      <svg className="header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
                    )
                  }
                </button>
            </nav>
        </header>
    </>
  )
}

export default Header
