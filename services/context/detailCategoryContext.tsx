import React, { createContext, useState, useMemo } from "react";
import { DetailContext, StateDetail } from "../type/types";

const DetailCategoryContext = createContext<DetailContext | null>(null);

function DetailCategoryProvider({ children }: { children: React.ReactNode }) {
  const [detailsValue, setDetailsValue] = useState<StateDetail | null>(null);

  const props = useMemo(
    () => ({ detailsValue, setDetailsValue }),
    [detailsValue]
  );

  return (
    <DetailCategoryContext.Provider value={props}>
      {children}
    </DetailCategoryContext.Provider>
  );
}

export { DetailCategoryProvider, DetailCategoryContext };
