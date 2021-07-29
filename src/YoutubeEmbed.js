import React from "react"
// import PropTypes from "prop-types"

const YoutubeEmbed = ({ artist, embedId }) => (
  <div className="video-responsive">
    <h3>{artist}</h3>
      <br />
    <iframe
      width="550"
      height="350"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

export default YoutubeEmbed
