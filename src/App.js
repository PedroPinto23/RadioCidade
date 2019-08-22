import React from "react";
import axios from "axios";

const LINK =
  "https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/";

export default class App extends React.Component {
  state = {
    playlist: [],
    album: ""
  };
  componentDidMount() {
    this.getPlaylist();
    this.postPlaylist()
  }

  postPlaylist = async () => {
    
    const res = await fetch(`${LINK}capas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ musica: "Easy", artista: "Faith no More" })
    });

    const json = await res.json();
    this.setState({ album: json.capa });
    console.log(this.state.album);
  };
  getPlaylist = async () => {
    const res = await fetch(`${LINK}teste-front`, {
      method: "GET"
    });
    const json = await res.json();
    this.setState({ playlist: json.body });
    console.log(this.state.playlist);
  };
  render() {
    return (
      <div className = 'container-fluid'>
        {this.state.playlist.map((a,key) => {
          return (
            <div className = 'text-primary' key = {key + 1}>
              <p>{a.artista}</p>
              <h3>{a.musica}</h3>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
