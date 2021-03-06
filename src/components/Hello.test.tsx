import * as React from "react";
import * as enzyme from "enzyme";
import Hello from "./hello"
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure( { adapter: new Adapter()});

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />);
  expect(hello.find(".Greeting").text()).toEqual('Hello Daniel!')
});
