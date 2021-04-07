import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import './App.scss';
import './Media-Queries.scss';
import { getEvents, extractLocations, checkToken } from './api';
import logo from './img/logo.svg';
import loading from './img/loading-icon.png';

class App extends Component {
  constructor() {
    super()

    this.state = {
      events: [],
      locations: [],
      eventNumber: 32,
      currentLocation: 'all',
      loadingEvents: true
      // tokenCheck: false
    }
  }
 
  loadingEvents = () => {
    if (this.state.events.length < 1) {
      this.setState({
        loadingEvents: true
      })
    } else {
      this.setState({
        loadingEvents: false
      })
    }
  }

  componentDidMount() {
    this.mounted = true;
    this.loadingEvents();
    getEvents().then((events) => {
      const { eventNumber } = this.state;
      if (this.mounted) {
        const filteredEvents = events.slice(0, eventNumber);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(events)
        })
      }
    });

    

    // const accessToken = localStorage.getItem('access_token');
    // const validToken = accessToken !== null ? await checkToken(accessToken) : false;
    // this.setState({
    //   tokenCheck: validToken
    // });
    // if ( validToken === true ) {
    //   this.updateEvents();
    // }
    // const searchParams = new URLSearchParams(window.location.search);
    // const code = searchParams.get('code');
    // this.mounted = true;
    // if ( code && this.mounted === true && validToken === false) {
    //   this.setState({ tokenCheck: true });
    //   this.updateEvents();
    // }
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, eventNumber } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') 
        ? events 
        : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, eventNumber);
        this.setState({
          events: filteredEvents,
          currentLocation: location
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (currentLocation === 'all') 
        ? events 
        : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          eventNumber: eventCount
        });
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events, locations, eventNumber, loadingEvents } = this.state;
    return (
      <div className="App">
        <div className="app__navigation-bar">
            <div className="logo__container">
              <img className="logo" src={logo} alt="meet up logo"/>
            </div>
            <div className="nav-inputs__container">
                <CitySearch locations={locations} updateEvents={this.updateEvents}/>
                <NumberOfEvents eventNumber={eventNumber} updateEvents={this.updateEvents} />
            </div>
          </div>
        <EventList events={events}/>
      </div>
    )
  }
}

export default App;
