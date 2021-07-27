import React from "react"

const Search = ({ concertSearch, onChangeConcertSearch }) => {
  const handleChange = (event) => {
    onChangeConcertSearch(event.target.value)
  }
  return(
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search Artists.."
        value={concertSearch}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}
export default Search