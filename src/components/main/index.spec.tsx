import { render } from "test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Main />);

    expect(view).toBeTruthy();
  });

  it("snapshot test", () => {
    const view = render(<Main />);

    expect(view).toMatchSnapshot();
  });
});
