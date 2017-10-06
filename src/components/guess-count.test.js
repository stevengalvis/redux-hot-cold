import React from "react";
import { shallow } from "enzyme";
import configure from "./enzyme-config";
// setup file

import { GuessCount } from "./guess-count";

describe("<GuessCount />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessCount />);
  });

  it("Renders the correct guesscount", () => {
    const value = 5;
    const wrapper = shallow(<GuessCount count={value} />);
    expect(wrapper.text()).toEqual(`Guess #${value}!`);
  });
});
