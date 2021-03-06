import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

const requiredProps = {
  cost: '$1',
  days: 10,
  id: 'testId',
  image: 'image.jpg',
  name: 'test name',
}; 

let Component = shallow(<TripSummary {...requiredProps} />);

describe('Component TripSummary', () => {
  it('should render correct link address', () => {
    expect(Component.find('.link').prop('to')).toEqual(`/trip/${requiredProps.id}`);
  });
  it('should render correct image src and alt attributes', () => {   
    expect(Component.find('img').prop('src')).toEqual(requiredProps.image);
    expect(Component.find('img').prop('alt')).toEqual(requiredProps.name);
  });
  it('should render correct props "name", "days", "cost"', () => {

    expect(Component.find('.title').text()).toEqual(requiredProps.name);
    expect(Component.find('.details').childAt(0).text()).toEqual(`${requiredProps.days} days`);
    expect(Component.find('.details').childAt(1).text()).toEqual(`from ${requiredProps.cost}`);
  }); 
  it('should throw error without required props', () => {
    let {cost, ...missingPropCost} = requiredProps;
    expect(() => shallow(<TripSummary {...missingPropCost} />)).toThrow();
    let {days, ...missingPropDays} = requiredProps;
    expect(() => shallow(<TripSummary {...missingPropDays} />)).toThrow();
    let {id, ...missingPropId} = requiredProps;
    expect(() => shallow(<TripSummary {...missingPropId} />)).toThrow();
    let {image, ...missingPropImage} = requiredProps;
    expect(() => shallow(<TripSummary {...missingPropImage} />)).toThrow();
    let {name, ...missingPropName} = requiredProps;
    expect(() => shallow(<TripSummary {...missingPropName} />)).toThrow();
    /*let {intro, ...missingPropIntro} = requiredProps;
    expect(() => shallow(<TripSummary {...missingPropIntro} />)).toThrow();
    let {tags, ...missingPropTags} = requiredProps;
    expect(() => shallow(<TripSummary {...missingPropTags} />)).toThrow();
   */
  }); 
	
  it('should not render <div className="tags"> without tags', () => {
    expect(Component.exists('.tags')).toEqual(false);

    const expectedTags = [];
    Component = shallow(<TripSummary {...requiredProps} tags={expectedTags} />); 
    expect(Component.exists('.tags')).toEqual(false);
  });

  it('should render tags in correct order', () => {
    const expectedTags = ['one', 'two', 'three'];
    Component = shallow(<TripSummary {...requiredProps} tags={expectedTags} />);

    expect(Component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(Component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(Component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });
});