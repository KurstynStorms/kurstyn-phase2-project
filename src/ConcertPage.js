import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import ConcertCollection from "./ConcertCollection"
import ConcertForm from "./ConcertForm"
import MusicVideos from "./MusicVideos"
import Search from "./Search"
import NavBar from "./NavBar"

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

  const handleDeleteConcert = (concertToDelete) => {
    const updatedConcerts = concerts.filter((concert) => concert.id !== concertToDelete.id)
    setConcerts(updatedConcerts)
  }

  return (
   <div>
        <NavBar />
        <Switch>
            <Route exact path="/">
                  <Search
                  concertSearch={concertSearch}
                  onChangeConcertSearch={setConcertSearch}
                  />
                  <ConcertCollection
                  concerts={concertsRendered}
                  onDeleteConcert={handleDeleteConcert}
                  />
            </Route>
            <Route path="/addconcert">
                  <ConcertForm
                  onAddConcert={handleAddConcert}
                  />
            </Route>
            <Route path="/videos">
                  <MusicVideos
                  concerts={concerts}
                  />
            </Route>
        </Switch>
   </div>
  )
}

export default ConcertPage
