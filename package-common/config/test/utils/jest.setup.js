import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, render, mount } from 'enzyme';

configure({ adapter: new Adapter() });

// Define globals to cut down on imports in test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Jest globals
global.describe = describe;
global.it = it;
global.expect = expect;

global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => [] }));
