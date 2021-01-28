import { render, screen } from "../../tests.utils";
import { ExchangeRate } from "../ExchangeRate";


test("renders title", () => {
	render(
		<ExchangeRate />
	);
	const linkElement = screen.getByText(/exchange rates/i);
	expect(linkElement).toBeInTheDocument();
});
