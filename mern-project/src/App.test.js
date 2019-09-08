// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import CreateUser from "./components/create-user.component";
describe('<CreateUser /> rendering', () => {
    it('should render one <h3>', () => {
        let wrapper = shallow(<CreateUser />);
        expect(wrapper.children('h3')).toHaveLength(1);
    });
});

it("adds correctly", () => {
  expect(1+1).toEqual(2);
});