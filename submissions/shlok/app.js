const { h, render, Component } = require("preact");

class NamesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul className="css-slots">{}</ul>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlanet: "Tattoine",
      jedis: [],
    };
    this.currentUrl =  "//localhost:3000/dark-jedis/3616";
    this.currentJedi = 0;
    this.onReceiveMessage = this.onReceiveMessage.bind(this);
  }

  onReceiveMessage(event) {
    const messageData = JSON.parse(event.data);
    this.setState({
      currentPlanet: messageData.name
    });
  }

  componentDidMount() {
    const { jedis } = this.state;
    this.planetSocket = new WebSocket("ws://localhost:4000");
    this.planetSocket.onmessage = this.onReceiveMessage;
    fetch(this.currentUrl)
      .then(response => response.json())
      .then(responseJSON => {
        jedis.push(responseJSON);
      });
  }

  render() {
    const { currentPlanet, jedis } = this.state;
    return (
      <div class="app-container">
        <div class="css-root">
          <h1 class="css-planet-monitor">
            Obi-Wan currently on {currentPlanet}
          </h1>
        </div>
        <section class="css-scrollable-list">
          <ul class="css-slots">
            {jedis.map(jedi => {
              return (
                <li class="css-slot">
                  <h3>{jedi.name}n</h3>
                  <h6>Homeworld: {jedi.homeworld.name}</h6>
                </li>
              );
            })}
          </ul>
        </section>
        <div class="css-scroll-buttons">
          <button class="css-button-up"></button>
          <button class="css-button-down"></button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
