import React from 'react';
import './App.css';
import ReactHlsPlayer from 'react-hls-player';

const playlistData = require('./playlist.json');

const App = (props) => {
  const [index, setIndex] = React.useState(0);

  const handleKeyDown = (event) => {
    if(event.keyCode === 39) {
      setIndex(index + 1)
    } else if (event.keyCode === 37) {
      setIndex(index - 1)
    } else if (event.keyCode === 38 || event.keyCode === 40) {
      var randomIndex = Math.floor(Math.random() * (playlistData.length - 0 + 1) + 0);
      setIndex(randomIndex)
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index]);

  return (
    <div>
      <div>
        <ReactHlsPlayer
          src={playlistData[index].url}
          autoPlay={true}
          controls={true}
          width="100%"
          height="auto"
        />
        <h2 style={{textAlign: 'center'}}>{ playlistData[index].name }</h2>
      </div>
    </div>
  );
}

export default App;
