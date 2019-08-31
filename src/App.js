import React from "react";
import "./index.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playList: [],
      abums: []
    };
  }
  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    xhttp.open(
      "GET",
      "https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/teste-front",
      true
    );

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var obj = JSON.parse(xhttp.responseText);

        this.setState({
          playList: obj.body
        });
        var playList = this.state.playList;
        var obj2 = JSON.stringify(playList[0]);
        console.log(obj2);
      }

      var xhttp2 = new XMLHttpRequest();
      xhttp2.open(
        "POST",
        "https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/capas",
        true
      );
      xhttp2.setRequestHeader("Content-type", "application/json");

      xhttp2.onreadystatechange = () => {
        if (xhttp2.readyState === 4 && xhttp2.status === 200) {
          var obj3 = JSON.parse(xhttp2.responseText);
          console.log(obj3);
        }
        this.setState({ albums: obj3 });
        var album = this.state.albums;
        console.log(album);
      };
      xhttp2.send(obj2);
    };

    xhttp.send();
  }
  render() {
    return (
      <div className="container-fluid " style={{ backgroundColor: "#DC143C" }}>
        {this.state.playList.map((m, key) => {
          return (
            <div key={key + 1} className="col-lg-3">
              <img
                src="faith-no-more_-_easy.jpg"
                className="img-fluid"
                alt=""
                width="100%"
                height="auto"
              ></img>
              <table className="table table-inverse table-dark">
                <thead>
                  <tr>
                    <th className="text-center">{m.artista}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center bg-primary">{m.musica}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
