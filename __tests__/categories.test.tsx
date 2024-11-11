import { fireEvent, render, waitFor } from "@testing-library/react-native";
import Catégories from "../app/Categories/index";
import { DetailCategoryProvider } from "../services/context/detailCategoryContext";

describe("Categories screen", () => {
  it("Text renders correctly on Categories", () => {
    const { getByText } = render(
      <DetailCategoryProvider>
        <Catégories />
      </DetailCategoryProvider>
    );

    expect(getByText("Catégories")).toBeTruthy();
    expect(getByText("Trier par")).toBeTruthy();
  });
});
