import HeaderTitle from './index';
import React from 'react';
import renderer from 'react-test-renderer';


test('it renders correctly', () => {
    const component = renderer.create(
        <HeaderTitle title="hello" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});