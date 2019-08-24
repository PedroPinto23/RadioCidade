import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playList: []
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
        console.log("ok");
        this.setState({
          playList: JSON.parse(xhttp.responseText)
        });
        this.setState({
          playList: this.state.playList.body
        });
        console.log(this.state.playList);

        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = () => {
          if (xhttp2.readyState === 4 && xhttp2.status === 200) {
            var obj2 = JSON.parse(xhttp2.responseText);

            console.log(obj2);
          }
        };
        xhttp2.open(
          "POST",
          "https://0o7qeyq4of.execute-api.us-east-2.amazonaws.com/dev/radiocidade/capas",
          true
        );
        xhttp2.send();
      }
    };

    xhttp.send();
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
