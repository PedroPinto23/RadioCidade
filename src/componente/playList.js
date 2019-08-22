import React from "react";

export default class playList extends React.Component {
  state = {};
  render() {
    return (<div className = 'container-fluid'>
    {this.props.state.play.map((a,key) => {
      return (
        <div className = 'text-primary' key = {key + 1}>
          <p>{a.artista}</p>
          <h3>{a.musica}</h3>
          <br />
          <br />
        </div>
      );
    })}
  </div>);
  }
}
