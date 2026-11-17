import { useState } from 'react'
import kasangeziIMG from './assets/kasangezi.jpg'
import formTwoIMG from './assets/form two.jpg'

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [expandedDropdown, setExpandedDropdown] = useState(null)

    const closeMenu = () => {
      setIsMenuOpen(false)
      setExpandedDropdown(null)
    }

    const toggleMenu = () => {
      if (isMenuOpen) {
        closeMenu()
      } else {
        setIsMenuOpen(true)
      }
    }

    const toggleDropdown = (event, name) => {
      event.preventDefault()
      setExpandedDropdown(expandedDropdown === name ? null : name)
    }

    return (
    <> 
      <div className="top_bar">
        <div className="phone">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          <span>+255 688 687 231 / +255 717 015 950</span>
        </div>

        <select className="language">
          <option>ENGLISH</option>
          <option>KISWAHILI</option>
        </select>
      </div>
      <div className="Heading">
        <img src={kasangeziIMG} alt="nembo_ya_kushoto" className="logo" />

        <div className="title">
          <h1>KASANGE SECONDARY SCHOOL</h1>
          <p>P.O BOX 195, KASULU - KIGOMA.</p>
        </div>

        <img src={formTwoIMG} alt="wanafunzi darasani" className="logo" />
      </div>
   
      {isMenuOpen && (
        <div className="mobile_menu_overlay">
          <button
            className="mobile_menu_close"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
      )}

<nav className={`nav_bar ${isMenuOpen ? 'is_open' : ''}`} aria-label="Main navigation">
  <div className="mobile_nav_toolbar">
    <button
      className="mobile_menu_toggle"
      type="button"
      aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isMenuOpen}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <button className="button mobile_sign_in" type="button"><span>Sign In</span></button>
  </div>
  <ul>
    <li><a href="#" onClick={closeMenu}>HOME</a></li>

    <li className={`dropdown ${expandedDropdown === 'about' ? 'is_expanded' : ''}`}>
      <a href="#" aria-expanded={expandedDropdown === 'about'} onClick={(event) => toggleDropdown(event, 'about')}>ABOUT</a>
      <ul className="dropdown_menu">
        <li><a href="#" onClick={closeMenu}>SCHOOL PROFILE</a></li>
        <li><a href="#" onClick={closeMenu}>MISSION & VISSION</a></li>
        <li><a href="#" onClick={closeMenu}>OUR SCHOOL HISTORY</a></li>
      </ul>
    </li>

    <li className={`dropdown ${expandedDropdown === 'administration' ? 'is_expanded' : ''}`}>
    <a href="#" aria-expanded={expandedDropdown === 'administration'} onClick={(event) => toggleDropdown(event, 'administration')}>ADMINISTRATION</a>
    <ul className="dropdown_menu">
        <li><a href="#" onClick={closeMenu}>JOINING INSTRUCTION</a></li>
    </ul>
    </li>

    <li className={`dropdown ${expandedDropdown === 'academics' ? 'is_expanded' : ''}`}>
      <a href="#" aria-expanded={expandedDropdown === 'academics'} onClick={(event) => toggleDropdown(event, 'academics')}>ACADEMICS</a>
      <ul className="dropdown_menu">
        <li><a href="#" onClick={closeMenu}>SUBJECTS OFFERED</a></li>
        <li><a href="#" onClick={closeMenu}>INTERNAL EXAMINATION RESULTS</a></li>
        <li><a href="#" onClick={closeMenu}>NECTA EXAMINATION RESULTS</a></li>
      </ul>
    </li>

    <li className={`dropdown ${expandedDropdown === 'school' ? 'is_expanded' : ''}`}>
      <a href="#" aria-expanded={expandedDropdown === 'school'} onClick={(event) => toggleDropdown(event, 'school')}>OUR SCHOOL</a>
      <ul className="dropdown_menu">
        <li><a href="#" onClick={closeMenu}>FACILITIES</a></li>
        <li><a href="#" onClick={closeMenu}>STAFF</a></li>
      </ul>
    </li>

    <li className={`dropdown ${expandedDropdown === 'students' ? 'is_expanded' : ''}`}>
      <a href="#" aria-expanded={expandedDropdown === 'students'} onClick={(event) => toggleDropdown(event, 'students')}>STUDENTS</a>
      <ul className="dropdown_menu">
        <li><a href="#" onClick={closeMenu}>GOVERNMENT</a></li>
        <li><a href="#" onClick={closeMenu}>STUDENT LIFE</a></li>
        <li><a href="#" onClick={closeMenu}>STUDENT CLUBS</a></li>
        <li><a href="#" onClick={closeMenu}>STUDENT INNOVATION</a></li>
      </ul>
    </li>
    <li><a href="#" onClick={closeMenu}>GALLERY</a></li>
    <li><a href="#" onClick={closeMenu}>CONTACTS</a></li>

    <li>
      <button className="button"><span>Sign In</span></button>
    </li>
  </ul>
</nav>
        
    </>
    );

}

export default Header;