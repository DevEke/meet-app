import React, { Component } from 'react';

class Event extends Component {

    state = {
        isExpanded: false
    }

     handleExpandEvent = () => {
        if (this.state.isExpanded) {
            this.setState({
                isExpanded: false
            })
        } else {
            this.setState({
                isExpanded: true
            })
        }
    }

    render() {
        const { isExpanded } = this.state;
        return (
            <div className="event-item__container">
                <div className="event-data__collapsed"></div>
                { isExpanded ? <div className="event-data__expanded"></div> : null}
                <button className="event-item__details-button" onClick={this.handleExpandEvent} />
            </div>
        )
    }
}

export default Event;