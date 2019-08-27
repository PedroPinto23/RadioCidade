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
    var i = 0;
    var xhttp = [i];
    xhttp = new XMLHttpRequest(i);

    var formdata = new FormData();

    xhttp.open(
      "GET",
      "https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/teste-front",
      true
    );
    // eslint-disable-next-line no-loop-func
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var obj = JSON.parse(xhttp.responseText);

        this.setState({
          playList: obj.body
        });
        var objeto = this.state.playList[i];
        console.log(this.state.playList[i]);
      }
      var xhttp2 = [i];
      xhttp2 = new XMLHttpRequest(i);
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
      };

      xhttp2.send(JSON.stringify(objeto));
    };

    xhttp.send();
  }
  render() {
    return (
      <div>
        <div className="container-fluid" style={{ backgroundColor: "#ff6961" }}>
          {this.state.playList.map((m, key) => {
            return (
              <div key={key + 1} className="col-lg-3">
                <img
                  src="https://capas-apps.s3.us-east-2.amazonaws.com/radiocidade/the-beatles_-_come-together.jpg"
                  className="img-fluid"
                  alt=""
                  width="100%"
                  height="auto"
                ></img>
                <table className="table table-inverse">
                  <thead>
                    <tr className="bg-primary">
                      <th className="text-center">{m.artista}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-secondary">
                      <td className="text-center">{m.musica}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
