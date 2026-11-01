import Counter from './Counter.jsx';
import KetikNama from './KetikNama.jsx';
import Lampu from './Lampu';
import DaftarPost from './DaftarPost';
import DaftarBuah from './DaftarBuah';
import DaftarUser from './DaftarUser';
import Nama from './Nama';
import './App.css';
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
      <div className="menu">
        <button className={tampilan === "Counter" ? "tombol aktif" : "tombol"} onClick={()=> setTampilan('Counter')}>Counter</button>
        <button className={tampilan === "KetikNama" ? "tombol aktif" : "tombol"} onClick={()=> setTampilan('KetikNama')}>KetikNama</button>
        <button className={tampilan === "Lampu" ? "tombol aktif" : "tombol"} onClick={()=> setTampilan('Lampu')}>Lampu</button>
        <button className={tampilan === "Nama" ? "tombol aktif" : "tombol"} onClick={()=> setTampilan('Nama')}>Nama</button>
        <button className={tampilan === "DaftarPost" ? "tombol aktif" : "tombol"} onClick={()=> setTampilan('DaftarPost')}>DaftarPost</button>
        <button className={tampilan === "DaftarBuah" ? "tombol aktif" : "tombol"} onClick={()=> setTampilan('DaftarBuah')}>DaftarBuah</button>
        <button className={tampilan === "DaftarUser" ? "tombol aktif" : "tombol"} onClick={()=> setTampilan('DaftarUser')}>DaftarUser</button>
      </div>
      {content}
    </div>
    
  );
}

export default App;