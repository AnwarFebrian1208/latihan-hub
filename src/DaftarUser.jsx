import {useState, useEffect} from 'react';

function DaftarUser(){
  const [users,setUsers] = useState([]);

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key = {u.id}>nama aku {u.name}, email aku {u.email} - username {u.username}</li>
      ))}
    </ul>
  );
}

export default DaftarUser;