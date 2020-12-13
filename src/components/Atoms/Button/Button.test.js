import Button from "./Button";

describe("Button", () => {
  it("matches the snapshot", () => {
    const wrapper = window.shallow(<Button>content</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
