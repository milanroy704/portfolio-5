import React ,{useState} from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils';
const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
     <a className={styles.title} href="/">Milan's</a>
     <div className={styles.menu}>
      <img className={styles.menubtn}
       src={menuOpen
        ? getImageUrl("nav/closeIcon.png")
         : getImageUrl("nav/menuIcon.png") 
        } 
       alt="menu-button" 
       onClick={()=>setmenuOpen(!menuOpen)}
       />
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
      onClick={()=>setmenuOpen(false)}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/project">Projects</a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        
        
      </ul>
     </div>
    </nav>
  )
}

export default Navbar