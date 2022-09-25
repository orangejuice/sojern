import '../../styles/global.css'
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}) {
  let dogs = []
  if (typeof window !== "undefined") {
    dogs = JSON.parse(localStorage.getItem('my-dogs')) || []
  }
  const [likedDogs, setLikedDogs] = useState(dogs)

  useEffect(() => {
    const ackeeTracker = require('ackee-tracker')
    ackeeTracker.create('https://ackee.orangejuice.vercel.app', {
      ignoreLocalhost: true,
      detailed: true
    }).record('a398f2e6-2c27-481c-9fdf-a7ce13d3a047')
  }, [])

  return <Component {...pageProps} likedDogs={likedDogs} setLikedDogs={setLikedDogs}/>
}

export default MyApp
