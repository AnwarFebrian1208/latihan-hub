import {useState} from 'react';

function Counter(){
  const [angka, setAngka] = useState (0);

  function tambah(){
    setAngka(angka + 1);
  }

  function kurang(){
    setAngka(angka - 1);
  }

  return(
    <div>
      <p>{angka}</p>
      <button onClick={tambah}>+</button>
      <button onClick={kurang}>-</button>
    </div>
  )
}

export default Counter;