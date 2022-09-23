import '../styles/global.css'
import {useEffect, useState} from "react";
import * as ackeeTracker from 'ackee-tracker'
import {Router} from "next/router";

function MyApp({Component, pageProps}) {
  let dogs = []
  if (typeof window !== "undefined") {
    dogs = JSON.parse(localStorage.getItem('my-dogs')) || []
  }
  const [likedDogs, setLikedDogs] = useState(dogs)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.ackeeTrackerInstance = ackeeTracker.create({
        server: 'https://ackee.orangejuice.vercel.app',
        domainId: 'a398f2e6-2c27-481c-9fdf-a7ce13d3a047'
      }, {
        ignoreLocalhost: true,
        detailed: true
      })
      window.ackeeTrackerInstance.record()

      Router.events.on('routeChangeComplete', window.ackeeTrackerInstance.record())
    }
  }, [])

  return <Component {...pageProps} likedDogs={likedDogs} setLikedDogs={setLikedDogs}/>
}

export default MyApp
