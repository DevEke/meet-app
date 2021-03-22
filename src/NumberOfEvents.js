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
            <div>
                <label 
                    htmlFor="event-number"
                    className="number-of-events__label">
                        Number of Events
                </label>
                <input
                    className="number-of-events__input"
                    type="number"
                    id="event-number"
                    value={eventCount}
                    onChange={this.handleCountChanged}>
                </input>
            </div>
        )
    }
}

export default NumberOfEvents;