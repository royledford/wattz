import Home from "./Home";

describe("Home", () => {
  it("matches the snapshot", () => {
    const wrapper = window.shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
