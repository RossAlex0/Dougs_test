import {
  CategoriesGroup,
  Category,
  DetailInterface,
  ObjectCategories,
  Operation,
  StateCategories,
  Stats,
} from "../type/types";
import { formateOneDate } from "../utils/formatDate";
import { myAxios } from "./axiosInstance";

// ** GATEGORIESGROUPS BY OPERATION ** \\

export const getCategoriesGroupsByOperation = async (
  id: number,
  setter: (state: CategoriesGroup) => void
): Promise<CategoriesGroup | undefined> => {
  const categories = await myAxios
    .get("/categories")
    .then((response) => response.data)
    .catch((error) => console.info(error));

  const category = categories.find((cat: Category) => cat.id === id);
  if (!category) {
    console.info("Aucune categorie trouvée.");
  }

  const categoriesGroups = await myAxios
    .get("/categories-groups")
    .then((response) => response.data)
    .catch((error) => console.info(error));

  if (!categoriesGroups) {
    return undefined;
  }
  const categoryGroup = categoriesGroups.find(
    (cat: CategoriesGroup) => cat.id === category.groupId
  );

  setter(categoryGroup);
};

// ** CATEGORY GROUP BY ID ** \\

export const getCategoryGroupById = async (
  setter: (state: CategoriesGroup) => void,
  id: number
) => {
  const categoriesGroups = await myAxios
    .get("/categories-groups")
    .then((response) => response.data)
    .catch((error) => console.info(error));

  const categoryGroup = categoriesGroups.find(
    (cat: CategoriesGroup) => cat.id === id
  );

  setter(categoryGroup);
};

// ** OPERATION BY ID ** \\

export const getOperationDetailById = async (
  id: number,
  setter: (state: DetailInterface) => void
) => {
  const operation: Operation = await myAxios
    .get(`/operations/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));

  const categories = await myAxios
    .get("/categories")
    .then((response) => response.data)
    .catch((error) => console.info(error));

  const category: Category = categories.find(
    (cat: Category) => cat.id === operation.categoryId
  );

  const categoriesGroups = await myAxios
    .get("/categories-groups")
    .then((response) => response.data)
    .catch((error) => console.info(error));

  const categoryGroup: CategoriesGroup = categoriesGroups.find(
    (cat: CategoriesGroup) => cat.id === category.groupId
  );

  const date = formateOneDate(operation.date);

  setter({
    categoryGrp_id: categoryGroup.id,
    category_label: categoryGroup.label,
    category_color: categoryGroup.color,
    label: operation.label,
    amount: operation.amount,
    description: operation.description,
    date,
  });
};

// ** OPERATIONS STATS ** \\

export const getOperationsStats = () => {
  return myAxios
    .get("/operations/stats")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

// ** ALL OPERATIONS ** \\

export const getAllOperations = () => {
  return myAxios
    .get("/operations")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

// ** ALL CATEGORIES ** \\

export const getAllCategories = async (
  setter: (state: StateCategories[]) => void,
  order?: "A-Z" | "Z-A"
) => {
  const [categories, categoriesGroups] = await Promise.all([
    myAxios.get("/categories").then((res) => res.data),
    myAxios.get("/categories-groups").then((res) => res.data),
  ]);

  let result = categoriesGroups.map((group: CategoriesGroup) => {
    const groupLabel = group.label;
    const groupColor = group.color;

    const groupCategories = categories.filter(
      (cat: ObjectCategories) => cat.groupId === group.id
    );

    return { name: groupLabel, color: groupColor, categories: groupCategories };
  });

  if (order === "A-Z") {
    result = result.sort((groupA: StateCategories, groupB: StateCategories) => {
      return groupA.name.localeCompare(groupB.name);
    });
  }
  if (order === "Z-A") {
    result = result.sort((groupA: StateCategories, groupB: StateCategories) => {
      return groupB.name.localeCompare(groupA.name);
    });
  }

  setter(result);
};
