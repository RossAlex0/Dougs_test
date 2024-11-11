import { render, screen } from "@testing-library/react-native";
import React from "react";
import Detail from "../app/Details/[id]";
import { DetailCategoryProvider } from "../services/context/detailCategoryContext";

describe("Details screen", () => {
  it("Text & input renders correctly on Details", async () => {
    const { getByText } = render(
      <DetailCategoryProvider>
        <Detail />
      </DetailCategoryProvider>
    );

    const inputElement = await screen.findByPlaceholderText(
      "Insérer un nouveau montant"
    );

    expect(getByText("Montant")).toBeTruthy();
    expect(getByText("Description")).toBeTruthy();
    expect(getByText("Enregistrer")).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });
});
