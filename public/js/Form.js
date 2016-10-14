class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            text: 'Unsetted',
            current: ''
        };
    }

    render() {
        return (
            <div>
                <h3>Form</h3>
                <div>Value: {this.state.text}</div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.current} />
                    <button>Set</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({
            current: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            text: this.state.current
        });
    }
}

ReactDOM.render(<Form />, document.getElementById('form'));