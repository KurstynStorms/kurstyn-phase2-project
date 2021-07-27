import React from "react"
// import Card from '../_card.jsx'
// import YoutubeEmbed from "./YoutubeEmbed"

const ConcertCard = ({ artist, image, venue, date, cost }) => {
 return (
  <tr>
  <td>{artist}</td>
  <td>{venue}</td>
  <td>{date}</td>
  <td>{cost}</td>
</tr>
);
}

export default ConcertCard