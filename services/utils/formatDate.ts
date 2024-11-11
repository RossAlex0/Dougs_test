import { Operation } from "../type/types";

// Convert date data into a formatted text string
export const groupByDate = (operations: Operation[]) => {
  return operations.reduce(
    (operationDate: { [key: string]: Operation[] }, operation: Operation) => {
      const date = new Date(operation.date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      if (!operationDate[date]) {
        operationDate[date] = [];
      }

      operationDate[date].push(operation);
      return operationDate;
    },
    {}
  );
};

export const formateOneDate = (date: string) => {
  const frenchDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return frenchDate;
};
