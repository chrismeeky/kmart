import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const Home = (props: any) => <h1>Hello world</h1>;

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
