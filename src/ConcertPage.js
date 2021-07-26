import React, { useState, useEffect } from "react"
import ConcertCollection from "./ConcertCollection"
import ConcertForm from "./ConcertForm"
import Search from "./Search"



const ConcertPage = () => {
 const [concerts, setConcerts] = useState([])
 const [concertSearch, setConcertSearch] = useState("")

 useEffect(() => {
  fetch("http://localhost:4000/concerts")
    .then((resp) => resp.json())
    .then(data => setConcerts(data))
 }, [])

const handleAddConcert = (newConcert) => {
  setConcerts([...concerts, newConcert])
}

const concertsRendered = concerts.filter((concert) => 
  concert.artist.toLowerCase().includes(concertSearch.toLowerCase())
)

 return (
   <div>
     <h1>🎉🎵 My Upcoming Philly Concerts 🎵🎉</h1>
        <br />
        <ConcertForm
        onAddConcert={handleAddConcert}
        />
        <br />
        <Search 
        concertSearch={concertSearch}
        onChangeConcertSearch={setConcertSearch}/>
        <br />
        <ConcertCollection 
        concerts={concertsRendered}
        />
   </div>
 )
}

export default ConcertPage