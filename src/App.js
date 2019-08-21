import React from "react";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      playlist: [],
      album: []
  }
  };
  componentDidMount() { 
    this.getPlaylist(); 
    this.postPlaylist();
  }
  getPlaylist = async () => {
    const response = await fetch ("https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/teste-front", {
    method: 'GET',
    })
    const data = await response.json() 
    this.setState ({playlist : data.body})
    console.log(this.state.playlist)   
  }
  postPlaylist = async() => {
    const response = await fetch ("https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/capas", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"musica": "Back in Black", "artista": "AC/DC"})
    })  
    const data = await response.json()
    this.setState ({album : data})
    console.log(this.state.album) 
  }
  render() {
    var play = this.state.playlist
    var albuns = this.state.album
    return(
      <div>
        {play.map((p, key) => {
          return (
            <div key = {key + 1}>
            <p>{p.artista}</p>
            <h3>{p.musica}</h3>
            </div>
          )
        })}
         
      </div>
    )
  }
}
