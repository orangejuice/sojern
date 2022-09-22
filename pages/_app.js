import '../styles/global.css'
import {useState} from "react";

function MyApp({Component, pageProps}) {
  let dogs = []
  if (typeof window !== "undefined") {
    dogs = JSON.parse(localStorage.getItem('my-dogs')) || []
  }
  const [likedDogs, setLikedDogs] = useState(dogs)

  return <Component {...pageProps} likedDogs={likedDogs} setLikedDogs={setLikedDogs}/>
}

export default MyApp
