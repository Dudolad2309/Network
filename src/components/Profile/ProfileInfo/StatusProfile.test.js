import React from "react";
import {create} from "react-test-renderer";
import StatusProfile from "./StatusProfile";

describe("StatusProfile component", () => {
	test("Status from props", () => {
		const component = create(<StatusProfile status="Hello"/>);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("Hello");
	});
	test("span displayed", () => {
		const component = create(<StatusProfile status="Hello"/>);
		const root = component.root;
		let span = root.findByType("span")
		expect(span.innerText).not.toBeNull()
	});
});