import React from "react"
import YoutubeEmbed from "./YoutubeEmbed"

const MusicVideos = ({ concerts }) => {
  return(
    <ul className="videos">
        {concerts.map((concert) => (
            <YoutubeEmbed
              key={concert.id}
              artist={concert.artist}
              embedId={concert.video}
            />
        ))}
      </ul>
  )
}

export default MusicVideos