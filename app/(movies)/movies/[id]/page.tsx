import { resolve } from "path";
import { API_URL } from "../../../(home)/page";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";

export const metadata = {
  title: "Movies",
};

// async function getMovies(id: string) {
//   console.log(`Fetching moives : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // params 내부에 있는 id 를 가지고 올꺼고 그 params의 id는 문자열로 되어있다는 뜻

  //   console.log('Start Fetching');
  //   const movie = await getMovies(id);
  //   const video = await getVideos(id);
  //   const [movie, video] = await Promise.all([getMovies(id), getVideos(id)]);
  //   console.log('end Fetching');

  /**
 * 
  console.log('Start Fetching');
  const movie = await getMovies(id);
  const video = await getVideos(id);
  console.log('end Fetching');
 * 결과값
Start Fetching
Fetching moives : 1714625542501
Fetching videos : 1714625547506
end Fetching

===============

const [movie,video] = await Promise.all([getMovies(id),getVideos(id)])
결과값
Start Fetching
Fetching moives : 1714625817827
Fetching videos : 1714625817828
end Fetching

========================
  const [movie,video] = await Promise.all([getMovies(id),getVideos(id)]);
  병렬적으로 실행은 되지만 이런 방법도 아직 문제는 남아있음 
  -> movie와 video  두가지 data가 모두 왔을 떄 보여진다

 * 
 * */

  return (
    <div>
        {/* <h3>Movie detail page</h3> */}
      <Suspense fallback={<h1>Loading movies info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      {/* <Suspense fallback={<h1>Loading movies videos</h1>}>
        <MovieVideos id={id} />
      </Suspense> */}
    </div>
  );
}

// Promise.all -> fetch 하는 API가 2개 이상인경우 데이터를 하나 가져오로 다음꺼 가지고 오는게 아닌 같이 await하기 위해 사용
