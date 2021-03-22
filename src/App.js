import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './App.scss';
import { getEvents, extractLocations } from './api';

class App extends Component {
  constructor() {
    super()

    this.state = {
      events: [],
      locations: []
    }
  }
 

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events)
        })
      }
    });
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      })
    })
  }

  componentWillMount() {
    this.mounted = false;
  }

  render() {
    const { events, locations } = this.state;
    return (
      <div className="App">
        <div className="app__navigation-bar">
          <h1>MeetUp</h1>
          <CitySearch locations={locations} updateEvents={this.updateEvents}/>
          <NumberOfEvents />
        </div>
        <EventList events={events} />
      </div>
    )
  }
}

export default App;
