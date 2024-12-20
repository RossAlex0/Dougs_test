export type CategoriesGroup = {
  id: number;
  label: string;
  color: string;
};

export type Category = {
  id: number;
  groupId: CategoriesGroup["id"];
  label: string;
  description: string;
};

export type Operation = {
  id: number;
  categoryId?: Category["id"];
  amount: number;
  label: string;
  description: string;
  date: string;
};

export type Stats = {
  incomesTotal: number;
  outcomesTotal: number;
  balanceTotal: number;
};

export interface DetailInterface {
  categoryGrp_id: number;
  category_label: string;
  category_color: string;
  label: string;
  amount: number;
  description: string;
  date: string;
}

export interface StateDetail {
  amount: string | number;
  description: string;
  categoryId: string | number;
}

export interface DetailContext {
  detailsValue: StateDetail | null;
  detaitGrpCategory: CategoriesGroup | null;
  setDetailsValue: (state: StateDetail) => void;
  setGroupId: (state: number) => void;
}

export interface ObjectCategories {
  id: number;
  label: string;
  description: string;
  groupId: number;
}

export interface StateCategories {
  name: string;
  color: string;
  categories: ObjectCategories[];
}
