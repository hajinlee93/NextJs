// "use client";
// import { useEffect, useState } from "react"

import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovies() {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(API_URL).then((response) => response.json());
}

/**
 * 
 * 
    async function getMovies(){
        return fetch(API_URL).then(response => response.json());
    }
 
    위에 있는 함수와  아래의 함수는 같다

     async function getMovies(){
        const response = await fetch(API_URL);
        const json = await response.json();
        return json;
    }
 * 
 */

export default async function HomePage() {
  // const [isLoading,setisLoading] = useState(true);
  // const [movies,setMovies] = useState([]);

  // const getMovies = async () => {
  //     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
  //     const json = await response.json();
  //     setMovies(json);
  //     setisLoading(false);
  // }

  // useEffect(()=>{
  //     getMovies();
  // },[])

  /**
   *  const [movies,setMovies] = useState();
   *
   * 이렇게 받아서 쓴다. 즉, movies가 state 그 자체인 것이고, setMovies 은 이 state 를 변경할 때 사용하는 함수인 것이다.
   * */

  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {/* {isLoading ? "Loading..." L: JSON.stringify(movies)} */}
      {/* {JSON.stringify(movies)} */}
      {movies.map((movie) => (
        // <li key={movie.id}>
        //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </li>

        // <div key={movie.id}>
        //     <img src={movie.poster_path} alt={movie.title} />
        //     <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </div>

        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
