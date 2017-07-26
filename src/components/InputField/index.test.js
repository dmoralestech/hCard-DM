import InputField from './index';
import React from 'react';
import renderer from 'react-test-renderer';

test('it renders correctly', () => {
    const component = renderer.create(
        <InputField fieldName="GIVEN NAME" idName="givenName" handleUpdate={() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});