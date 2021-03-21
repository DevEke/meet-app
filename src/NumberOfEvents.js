import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        eventCount: 32
    }

    handleCountChanged = (event) => {
        const value = event.target.value;
        this.setState({
            eventCount: value
        })
    }

    render() {
        const { eventCount } = this.state;
        return (
            <input
                className="number-of-events__input"
                type="number"
                value={eventCount}
                onChange={this.handleCountChanged}>
            </input>
        )
    }
}

export default NumberOfEvents;