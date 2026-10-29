import {useState} from 'react';

function Nama(){
  const [nama, setNama]  = useState ('Anwar');

  function gantiNama(namaBaru){
    setNama(namaBaru);
  }

  return(
    <div>
      <p>Halo, {nama} sayanggg</p>
      <button onClick={() => gantiNama("Budi")}>Budi</button>
      <button onClick={() => gantiNama("Siti")}>Siti</button>
      <button onClick={() => gantiNama("Anwar")}>Anwar</button>
    </div>
  )
}

export default Nama;