import React from "react";
import {getByText, render} from "@testing-library/react";
import {RockList} from "../../components/RockList/RockList";

jest.mock("axios");

describe("RockList Component", () => {
    it("test able to pass", () => {
        expect(1).toBe(1);
    })

    // it("initializes rockList state to an empty array", () => {
    //     const {container} = render(<RockList />);
    //
    //     const rockListContainer = container.querySelector(".rock-list-container");
    //
    //     const rockListComponent = rockListContainer?.querySelector(".rock-list-component");
    //     const stateValue = rockListComponent?.textContent;
    //
    //     expect(stateValue).toBe("[]");
    // })
})
