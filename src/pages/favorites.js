import styles from "../../styles/Home.module.css";
import DogPicture from "../components/DogPicture";
import CustomizedHead from "../components/CustomizedHead";
import CustomizedNav from "../components/CustomizedNav";
import Footer from "../components/Footer";

export default function Favorites(props) {
  const {likedDogs} = props

  return (
    <>
      <CustomizedHead/>
      <main className={styles.main + ' ' + styles.container}>
        <CustomizedNav home={false}/>

        <div className={styles.grid}>
          {likedDogs && likedDogs.map(url => (
            <div key={url} className={styles.card}>
              <DogPicture {...props} dog={url}/>
            </div>))}
        </div>
      </main>

      <Footer/>
    </>
  )
}