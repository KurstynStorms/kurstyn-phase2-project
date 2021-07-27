import React from "react"
import ConcertCard from "./ConcertCard"

const ConcertCollection = ({ concerts }) => {
  const ConcertInfo = concerts.map((concert) => (
    <ConcertCard
    key={concert.key}
    artist={concert.artist}
    image={concert.image}
    venue={concert.venue}
    date={concert.date}
    cost={concert.cost}
    />
  ))
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Artist</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Venue</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Cost</h3>
          </th>
        </tr>
        {ConcertInfo}
      </tbody>
    </table>
  );
}
export default ConcertCollection