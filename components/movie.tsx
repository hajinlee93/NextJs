"use client";//onClick은 백앤드에서 이뤄지지 않음, 이벤트리스너기 때문에 "use client" 필요

import Link from "next/link";
import styles from "../styles/movie.module.css"
import { useRouter } from "next/navigation";

interface IMovieProps{
    title:string;
    id:string;
    poster_path:string;
}

export default function Movie({title,id,poster_path}:IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}/>
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
