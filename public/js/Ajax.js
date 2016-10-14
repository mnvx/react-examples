class Ajax extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            text: '',
            current: ''
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Enter some text:</div>
                <input onChange={this.handleChange} value={this.state.current} />
                <button>Send</button>
                <div>{this.state.text}</div>
            </form>
        );
    }

    handleChange(e) {
        this.setState({
            current: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        $.ajax({
            method: "POST",
            url: 'ajax.php',
            data: {
                text: this.state.current
            },
            dataType: 'json',
            success: function (data) {
                this.setState({
                    text: 'Count of words: ' + data.count
                });
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({
                    text: 'Error: ' + err
                });
            }.bind(this)
        });
    }
}

ReactDOM.render(<Ajax />, document.getElementById('ajax'));