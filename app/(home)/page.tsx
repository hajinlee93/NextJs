"use client";
import { useEffect, useState } from "react"

export default function test (){
    const [isLoading,setisLoading] = useState(true);
    const [movies,setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const json = await response.json();
        setMovies(json);
        setisLoading(false);
    }

    useEffect(()=>{
        getMovies();
    },[])

    /**
     *  const [movies,setMovies] = useState();
     * 
     * 이렇게 받아서 쓴다. 즉, movies가 state 그 자체인 것이고, setMovies 은 이 state 를 변경할 때 사용하는 함수인 것이다.
     * */ 

	return (
        <div>
            {isLoading ? "Loading..." : JSON.stringify(movies)}
        </div>
    );
}
