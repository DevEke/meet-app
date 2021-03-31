import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Login from './Login';
import './App.scss';
import './Media-Queries.scss';
import { getEvents, extractLocations, checkToken } from './api';
import logo from './img/full-logo-on-dark.svg';

class App extends Component {
  constructor() {
    super()

    this.state = {
      events: [],
      locations: [],
      // tokenCheck: false
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

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events, locations } = this.state;
    return (
      <div className="App">
        <div className="app__navigation-bar">
            <img
              className="app__logo" 
              src={logo} 
              alt="meet up logo"/>
            <CitySearch locations={locations} updateEvents={this.updateEvents}/>
            <NumberOfEvents />
          </div>
        <EventList events={events}/>
      </div>
    )
  }
}

export default App;
