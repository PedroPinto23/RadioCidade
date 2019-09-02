import React from "react";
import "./index.css";

export default class App extends React.Component {
  state = {
    playList: [],
    abums: []
  };

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
        console.log(playList);

        var xhttp2 = [];
        xhttp2 = new XMLHttpRequest();
        xhttp2.open(
          "POST",
          "https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/capas",
          true
        );
        xhttp2.setRequestHeader("Content-type", "application/json");

        // eslint-disable-next-line no-loop-func
        xhttp2.onreadystatechange = () => {
          if (xhttp2.readyState === 4 && xhttp2.status === 200) {
            var capas = JSON.parse(xhttp2.responseText);

            console.log(capas);
          }
        };
        xhttp2.send(JSON.stringify(playList[0]));
  
      }
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
                src="https://capas-apps.s3.us-east-2.amazonaws.com/radiocidade/eric-clapton_-_bad-love.jpg"
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
