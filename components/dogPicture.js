import Image from "next/image";
import {FaRegThumbsUp, FaThumbsUp} from 'react-icons/fa'
import styles from '../styles/Home.module.css'
import React from "react";


export default function DogPicture(props) {
  // const random = React.useRef(Date.now())
  // const {url, error} = useSWR(['https://random.dog/woof.json?filter=mp4,webm', random], fetcher)

  const {likedDogs, setLikedDogs, dog} = props

  const handleClick = () => {
    if (likedDogs.includes(dog)) {
      setLikedDogs(likedDogs.filter(item => item !== dog))
      if (typeof window !== "undefined") {
        localStorage.setItem('my-dogs', JSON.stringify(likedDogs.filter(item => item !== dog)))
      }
    } else {
      setLikedDogs([...likedDogs, dog])
      if (typeof window !== "undefined") {
        localStorage.setItem('my-dogs', JSON.stringify([...likedDogs, dog]))
      }
    }
  }

  // if (error) return <div>failed to load</div>
  if (!dog) return <div>loading...</div>
  return (
    <>
      <Image src={dog} alt="dog picture" placeholder='blur' blurDataURL={dog}
        width='300' height='200'/>

      <a onClick={handleClick} style={likedDogs.includes(dog) ?
        {float: "right", marginRight: 15, color: "deeppink"} :
        {float: "right", marginRight: 15}}>

        {likedDogs.includes(dog) && <FaThumbsUp className={styles.icon}/>}
        {!likedDogs.includes(dog) && <FaRegThumbsUp className={styles.icon}/>}
        <span>{' '}{likedDogs.includes(dog) ? 'Liked' : 'Like'}</span>
      </a>
    </>)
}
