import React, { Component } from 'react';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: []
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
        this.setState({
            query: value,
            suggestions
        })
    }

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion
        })
        this.props.updateEvents(suggestion);
    }

    render() {
        const { query, suggestions } = this.state;
        const { locations, updateEvents } = this.props;
        return (
            <div className="city-search__container">
                <input 
                    onChange={this.handleInputChanged} 
                    type="text" 
                    className="city-search__input"
                    placeholder="Search for a City"
                    value={query}>
                </input>
                {query ? <ul className="city-search__suggestions">
                    {suggestions.map((suggestion) => {
                        return (
                            <li 
                                key={suggestion} 
                                className="city-suggestion"
                                onClick={() => this.handleItemClicked(suggestion)}>{suggestion}
                            </li>
                        )
                    })}
                    <li 
                        key="all"  
                        className="city-suggestion"
                        onClick={() => this.handleItemClicked('all')}>
                        <b>See All Cities</b>
                    </li>
                </ul> : null }
            </div>
        )
    }
}

export default CitySearch;