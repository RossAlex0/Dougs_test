import {
  getAllOperations,
  getOperationsWithQuery,
} from "../services/request/get";
import { putOperation } from "../services/request/put";

describe("Fetch Operations", () => {
  it("Return the data from the operations table of the test API", async () => {
    const response = await getAllOperations();

    expect(response.length).toBeGreaterThan(1);
    expect(response[0]).toHaveProperty("id");
    expect(response[0]).toHaveProperty("label");
    expect(response[0]).toHaveProperty("amount");
    expect(response[0]).toHaveProperty("description");
    expect(response[0]).toHaveProperty("date");
  });
});

describe("Fetch operations with query", () => {
  it("Return the data from the operations table of the test API with a query", async () => {
    const limit: number = 17;
    const offset: number = 2;
    const search: string = "pap";
    const response = await getOperationsWithQuery(limit, offset, search);

    expect(response.length).toBeGreaterThan(0);
  });
  it("Return an empty array in case of incorrect input", async () => {
    const limit: number = 10;
    const offset: number = 300;
    const search: string = "falsyValue";

    const response = await getOperationsWithQuery(limit, offset, search);

    expect(response).toEqual([]);
  });
});

describe("Update operation", () => {
  it("Successfully updates an operation with valid data", async () => {
    const id = 4;
    const request = {
      amount: 500,
      description: "Description",
      categoryId: 2,
    };

    const response = await putOperation(id, request);

    const responseWithWrongType = await putOperation(id, {
      // intentional wrong type for amount to verify that the function handles type errors correctly
      amount: "23",
      description: "Description",
      categoryId: "2",
    });

    expect(response).toHaveProperty("id");
    expect(responseWithWrongType).toHaveProperty("id");
    expect(response).toHaveProperty("categoryId");
    expect(responseWithWrongType).toHaveProperty("categoryId");
    expect(response).toHaveProperty("label");
    expect(responseWithWrongType).toHaveProperty("label");
    expect(response).toHaveProperty("amount");
    expect(responseWithWrongType).toHaveProperty("amount");
    expect(response).toHaveProperty("description");
    expect(responseWithWrongType).toHaveProperty("description");
    expect(response).toHaveProperty("date");
  });
  it("Returns 404 for invalid operation ID", async () => {
    const request = {
      amount: 500,
      description: "Description",
      categoryId: 2,
    };

    const responseWhitWrongId = await putOperation(-1, request);

    expect(responseWhitWrongId).toBe(404);
  });
});
