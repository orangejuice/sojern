import styles from "../styles/Home.module.css";
import DogPicture from "../components/dogPicture";
import {stringToBase64} from "../components/utils";
import CustomizedHead from "../components/customizedHead";
import CustomizedNav from "../components/customizedNav";
import Footer from "../components/footer";

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