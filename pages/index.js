import styles from '../styles/Home.module.css'
import DogPicture from "../components/dogPicture";
import useSWR from "swr";
import {fetchArray} from "../components/utils";
import {HiRefresh} from "react-icons/hi";
import CustomizedHead from "../components/customizedHead";
import Footer from "../components/footer";
import CustomizedNav from "../components/customizedNav";


function Home(props) {
  let {data, mutate, error} = useSWR(
    Array(6).fill('https://random.dog/woof.json?filter=mp4,webm'), fetchArray,
    {revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false})

  if (error) return <div>failed to load</div>;

  return (
    <>
      <CustomizedHead/>
      <main className={styles.main + ' ' + styles.container}>
        <CustomizedNav title='Favorite dogs'/>

        <div className={styles.grid + ' ' + styles.refresh}>
          <a onClick={() => mutate()}>
            <HiRefresh className={styles.icon}/> <span>{data ? 'Refresh' : 'Loading...'}</span>
          </a>
        </div>
        <div className={styles.grid}>
          {data && data.map(item => item.url).map(url => (
            <div key={url} className={styles.card}>
              <DogPicture {...props} dog={url}/>
            </div>))}
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default Home