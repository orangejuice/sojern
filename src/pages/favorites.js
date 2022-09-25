import styles from "../../styles/Home.module.css";
import DogPicture from "../components/DogPicture";
import {stringToBase64} from "../lib/utils";
import CustomizedHead from "../components/CustomizedHead";
import CustomizedNav from "../components/CustomizedNav";
import Footer from "../components/Footer";

export default function Favorites(props) {
  const {likedDogs} = props
  let dogs = []

  for (let i = 0; i < likedDogs.length; i++) {
    dogs.push(
      <div key={stringToBase64(likedDogs[i])} className={styles.card}>
        <DogPicture {...props} dog={likedDogs[i]}/>
      </div>)
  }
  return (
    <>
      <CustomizedHead/>
      <main className={styles.main + ' ' + styles.container}>
        <CustomizedNav title='My favorites'/>

        <div className={styles.grid}>
          {dogs}
        </div>
      </main>

      <Footer/>
    </>
  )
}