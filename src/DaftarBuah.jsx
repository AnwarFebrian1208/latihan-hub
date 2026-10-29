function DaftarBuah(){
  const buah = ["apel", "mangga", "jeruk"];

  return(
    <ul>
      {buah.map((b) => <li>{b}</li>)}
    </ul>
  )
}

export default DaftarBuah;