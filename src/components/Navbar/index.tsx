import { MouseEventHandler, useState } from 'react';
import { NavLink} from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  const [isMenuOpen, set_isMenuOpen] = useState(false)

  const menuClickHandel:MouseEventHandler<HTMLDivElement> = () => {
    set_isMenuOpen(!isMenuOpen)
  }
   return(
     <>
      <nav>
        <NavLink to='/'  className="logo">
          GQSpace
        </NavLink>
        <NavLink to='/about' >
          About
        </NavLink>
        <div onClick={menuClickHandel} data-testid="burgerBTN" className='burger-menu'>{isMenuOpen?  <>&#10006;</> : <>&#9776;</> }</div>

      </nav>
    <div onClick={()=> set_isMenuOpen(false)} data-testid="secondNav" className={isMenuOpen? 'second-nav-big':'second-nav'}>
      <NavLink to='/' >
        global
      </NavLink>
      <NavLink to='/' >
        politics
      </NavLink>
      <NavLink to='/'  >
        sports
      </NavLink>
      <NavLink to='/' >
        germany
      </NavLink>
      <NavLink to='/' >
        fasion
      </NavLink>
    </div>
     </>
   ) 
}

export default Navbar;