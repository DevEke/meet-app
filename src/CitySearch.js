import React, { Component } from 'react';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
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
            query: suggestion,
            showSuggestions: false
        })
        this.props.updateEvents(suggestion);
    }

    render() {
        const { query, suggestions, showSuggestions } = this.state;
        const { locations, updateEvents } = this.props;
        return (
            <div className="city-search__container">
                <input 
                    onChange={this.handleInputChanged} 
                    type="text" 
                    className="city-search__input"
                    placeholder="Search for a City"
                    value={query}
                    onFocus={() => this.setState({showSuggestions: true})}
                    >
                </input>
                <ul 
                    className="city-search__suggestions"
                    style={showSuggestions ? {} : { display: 'none'}}>
                    {suggestions.map((suggestion) => {
                        return (
                            <li 
                                key={suggestion} 
                                className="city-suggestion"
                                onClick={() => this.handleItemClicked(suggestion)}
                                value={suggestion}
                                >{suggestion}
                            </li>
                        )
                    })}
                    <li 
                        key="all"  
                        className="city-suggestion"
                        onClick={() => this.handleItemClicked('all')}>
                        <b>See All Cities</b>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CitySearch;