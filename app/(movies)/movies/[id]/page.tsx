export default function MovieDetail({params:{id},}:{params :{id :string}}){ // params 내부에 있는 id 를 가지고 올꺼고 그 params의 id는 문자열로 되어있다는 뜻 
    return <h1>Movie {id}</h1>;
}

