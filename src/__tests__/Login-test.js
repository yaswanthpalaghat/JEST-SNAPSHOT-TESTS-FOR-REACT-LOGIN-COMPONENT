import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../Login";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

describe("Login Component", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<Login />).exists(<form className="login"></form>)).toBe(
      false
    );
  });
  it("renders a email input", () => {
    expect(shallow(<Login />).find("#email").length).toEqual(1);
  });
  it("renders a password input", () => {
    expect(shallow(<Login />).find("#password").length).toEqual(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Email input", () => {
    it("should respond to change event and change the state of the Login Component", () => {
      const wrapper = shallow(<Login />);
      wrapper.find("#email").simulate("change", {
        target: { name: "email", value: "yash@gmail.com" }
      });
      expect(wrapper.state("email")).toEqual("yash@gmail.com");
    });
  });

  describe("Password input", () => {
    it("should respond to change event and change the state of the Login Component", () => {
      const wrapper = shallow(<Login />);
      wrapper
        .find("#password")
        .simulate("change", { target: { name: "password", value: "yash" } });
      expect(wrapper.state("password")).toEqual("yash");
    });
  });
});
