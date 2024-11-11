import { render } from "@testing-library/react-native";
import React from "react";
import Home from "../app/(Home)";

describe("Home screen", () => {
  it("Text stats renders correctly on Home", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Crédit")).toBeTruthy();
    expect(getByText("Débit")).toBeTruthy();
    expect(getByText("Solde")).toBeTruthy();
  });
});
