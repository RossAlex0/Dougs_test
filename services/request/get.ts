import { CategoriesGroup, Category } from "../type/types";
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

  const category = await categories.find((cat: Category) => cat.id === id);
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
  const categoryGroup = await categoriesGroups.find(
    (cat: CategoriesGroup) => cat.id === category.groupId
  );

  setter(categoryGroup);
};
