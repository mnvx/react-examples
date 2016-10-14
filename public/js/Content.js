class Content extends React.Component {
  constructor(props) {
    super(props);
    this.name = Math.floor(Math.random() * 100);
  }
  render() {
    return <div>Content. Random number is {this.name}</div>;
  }
}

ReactDOM.render(<Content />, document.getElementById('content'));