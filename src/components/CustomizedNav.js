import styles from "../../styles/Home.module.css"
import Link from "next/link"

export default function CustomizedNav(props) {
  const {home} = props

  return (
    <>
      <h1 className={styles.title}>Favorite dogs</h1>
      <nav className={styles.description + ' ' + styles.nav}>
        {/*<Link href='/'>*/}
        {/*  <a className={home ? styles.current : ''}>Home</a>*/}
        {/*</Link>*/}

        <Link href='/'>Home</Link>
        <span style={{width: 100, display: 'inline-block', height: 10}}></span>
        <Link href='/favorites'>Favorites</Link>

        {/*<Link href='/favorites'>*/}
        {/*  <a className={home ? '' : styles.current}>Favorites</a>*/}
        {/*</Link>*/}
      </nav>
    </>
  )
}
