import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function CustomizedNav({title}) {
  return <>
    <h1 className={styles.title}>{title}</h1>
    <nav className={styles.description + ' ' + styles.nav}>
      <Link href='/src/pages'>Home</Link>
      <span style={{width: 100, display: 'inline-block', height: 10}}></span>
      <Link href='src/pages/favorites'>Favorites</Link>
    </nav>
  </>;
}
