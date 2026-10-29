import Counter from './Counter.jsx';
import KetikNama from './KetikNama.jsx';
import Lampu from './Lampu';
import DaftarPost from './DaftarPost';
import DaftarBuah from './DaftarBuah';
import DaftarUser from './DaftarUser';
import Nama from './Nama';
import {useState} from 'react';

function App(){
  const [tampilan, setTampilan] = useState('Counter');
  let content;
  let p;
  if(tampilan === "Counter"){
    p = "HALAMAN COUNTER";
    content = <Counter/>;
  } else if (tampilan === "Lampu"){
    p = "HALAMAN LAMPU";
    content = <Lampu/>;
  } else if (tampilan === "Nama"){
    p = "HALAMAN NAMA";
    content = <Nama/>;
  } else if (tampilan === "DaftarPost"){
    p = "HALAMAN DaftarPost";
    content = <DaftarPost/>;
  } else if (tampilan === "DaftarBuah"){
    p = "HALAMAN DaftarBuah";
    content = <DaftarBuah/>;
  } else if (tampilan === "DaftarUser"){
    p = "HALAMAN DaftarUser";
    content = <DaftarUser/>;
  } else {
    p = "HALAMAN KETIKNAMA";
    content = <KetikNama/>;
  }
  return (
    <div>
      {p}<br/>
      <button onClick={()=> setTampilan('Counter')}>Counter</button>
      <button onClick={()=> setTampilan('KetikNama')}>KetikNama</button>
      <button onClick={()=> setTampilan('Lampu')}>Lampu</button>
      <button onClick={()=> setTampilan('Nama')}>Nama</button>
      <button onClick={()=> setTampilan('DaftarPost')}>DaftarPost</button>
      <button onClick={()=> setTampilan('DaftarBuah')}>DaftarBuah</button>
      <button onClick={()=> setTampilan('DaftarUser')}>DaftarUser</button>
      {content}
    </div>
  );
}

export default App;