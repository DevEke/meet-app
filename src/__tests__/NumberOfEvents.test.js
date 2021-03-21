import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import {mockData} from '../mock-data';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper, eventCount;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
        eventCount = NumberOfEventsWrapper.state('eventCount');
    })


    test('render of number of events', () => {
        expect(NumberOfEventsWrapper).toHaveLength(1);
    });

    test('render number of events properly', () => {
        expect(NumberOfEventsWrapper.find('.number-of-events__input').prop('value')).toBe(eventCount)
    });

    test('change state when the number value changes', () => {
        NumberOfEventsWrapper.setState({
            eventCount: 10
        });
        const eventObject = { target : { value: 15 }}; 
        NumberOfEventsWrapper.find('.number-of-events__input').simulate('change', eventObject);
        expect(eventCount).toBe(15);

    })
})