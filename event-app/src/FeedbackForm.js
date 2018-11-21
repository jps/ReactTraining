import React, { Component} from 'react';

class FeedbackForm extends Component {

    constructor(rating, comment, onSubmit, onDismiss)
    {
        super();

        this.defaultState = () => 
        ({
            rating : 1,
            comment : ""
        });

        this.state = this.defaultState;
    }

    handleSumbit = (event) => {
        event.preventDefault();
        console.log(`on submit ${this.state.rating} ${this.state.comment}`)
        this.props.onSubmit(this.state.rating, this.state.comment);
        this.props.onDismiss();
    }

    onSelectChange = (event) => {
        event.preventDefault();
        this.setState({rating : event.target.value});
    }

    onTextAreaChange = (event) => {
        event.preventDefault();
        this.setState({comment : event.target.value});
    }

    handleDismiss = (event) => {
        event.preventDefault();
        this.setState(this.defaultState())
        this.props.onDismiss();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <label>Rating</label>
                    <select value={this.state.rating}
                        onChange={this.onSelectChange.bind(this)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Comment</label><textarea value={this.state.comment}
                        onChange={this.onTextAreaChange.bind(this)} />
                    <p style={{textAlign: "right"}}>
                        <button onClick={this.handleDismiss}>Discard</button>
                        <button type="submit">Submit Feedback</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default FeedbackForm