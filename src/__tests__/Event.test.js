import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event/> component', () => {
    let EventWrapper, expandButton, eventContainer;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
        eventContainer = EventWrapper.find('.event-item__container');
        expandButton = EventWrapper.find('.event-item__details-button');
    })

    test('render expand event button', () => {
        expect(expandButton).toHaveLength(1);
    })

    test('render event basic information', () => {
        expect(eventContainer.find('.event-data__collapsed')).toHaveLength(1);
    })

    test('state is changed when button is clicked', () => {
        EventWrapper.setState({
            isExpanded: false
        })
        expandButton.simulate('click');
        expect(EventWrapper.state('isExpanded')).toBe(true);
    })

    test('render extra information when button is clicked and state is changed to true', () => {
        EventWrapper.setState({
            isExpanded: false
        })
        expandButton.simulate('click');
        expect(EventWrapper.find('.event-data__expanded')).toHaveLength(1);
    })

    test('hide extra information when button is clicked and state is changed to false', () => {
        EventWrapper.setState({
            isExpanded: true
        })
        expandButton.simulate('click');
        expect(EventWrapper.find('.event-data__expanded')).toHaveLength(0);
    })
})