import {useState, useEffect} from 'react';

function DaftarPost(){
  const [loading, setLoading] = useState(true);
  const [posts,setPosts] = useState([]);

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setPosts(data);
      setLoading(false);
    })
  }, []);

  return (
    <div>
      {loading ? (
      <p><strong>LAGI LOADING... </strong></p>
        )  : (
        <ul>
          {posts.map((p) => (
            <li key ={p.id}><strong>{p.title}</strong>, {p.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DaftarPost;