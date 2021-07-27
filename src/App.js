import './App.css'
import React from "react"
import 'playbook-ui/dist/playbook.css'
import 'playbook-ui/dist/fonts/fontawesome-min'
import ConcertPage from "./ConcertPage"
import Header from "./Header"

const App = () => {
  return (
    <div className="App">
    <Header />
    <ConcertPage />
    </div>
  )
}

export default App;
