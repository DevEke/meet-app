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
        const { event } = this.props;
        return (
            <div className="event-item__container" tabIndex={0}>
                <div className="event-data__collapsed">
                    <div className="event-data__flex">
                        <h1>{event.summary}</h1>
                        <p>{new Date(event.start.dateTime).toLocaleDateString(
                            'en-gb', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'utc'})}
                        </p>
                    </div>
                    
                    <p>{event.location}</p>
                </div>
                { isExpanded ? <div className="event-data__expanded">
                    <h2>About</h2>
                    <p>{event.description}</p>
                    <a href={event.htmlLink} target="_blank" rel="noreferrer">See details on Google Calender</a>
                </div> : null}
                <button 
                    className="event-item__details-button" 
                    onClick={this.handleExpandEvent}>
                        {isExpanded ? "Hide Details" : "Show Details"}
                </button>
            </div>
        )
    }
}

export default Event;


