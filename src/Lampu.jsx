import {useState} from 'react';

function Lampu(){
const [nyala, setNyala] = useState(false);
const [jumlah, setJumlah] = useState(0);

function toggleLampu(){
setNyala(!nyala);
setJumlah(jumlah+1);
}

return(
<div>
{nyala ? <p>Lampu menyala</p> : <p>Lampu mati</p>}
<button onClick={toggleLampu}>toggle</button>
<p>Sudah ditekan {jumlah} kali</p>
</div>
);
}

export default Lampu;