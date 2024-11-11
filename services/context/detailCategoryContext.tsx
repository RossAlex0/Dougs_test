import { createContext, useState, useMemo, useEffect } from "react";

import { CategoriesGroup, DetailContext, StateDetail } from "../type/types";
import { getCategoryGroupById } from "../request/get";

const DetailCategoryContext = createContext<DetailContext | null>(null);

function DetailCategoryProvider({ children }: { children: React.ReactNode }) {
  const [detailsValue, setDetailsValue] = useState<StateDetail | null>(null);
  const [detaitGrpCategory, setDetailGrpCategory] =
    useState<CategoriesGroup | null>(null);
  const [groupId, setGroupId] = useState<number | null>(null);

  useEffect(() => {
    if (groupId) {
      getCategoryGroupById(setDetailGrpCategory, groupId);
    }
  }, [groupId]);

  const props = useMemo(
    () => ({
      detailsValue,
      detaitGrpCategory,
      setDetailsValue,
      setGroupId,
    }),
    [detailsValue, detaitGrpCategory]
  );

  return (
    <DetailCategoryContext.Provider value={props}>
      {children}
    </DetailCategoryContext.Provider>
  );
}

export { DetailCategoryProvider, DetailCategoryContext };
