import {useState} from 'react';

function KetikNama(){
const [teks, setTeks] = useState("");

function handleKetik(e){
setTeks(e.target.value);
}

return(
<div>
<p>Kamu mengetik: {teks}</p>
<input onChange = {handleKetik} value={teks} placeholder="ketik apapun disini"/>
</div>
);
}

export default KetikNama;