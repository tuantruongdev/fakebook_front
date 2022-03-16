import React, { useState, useEffect } from "react";
const PageContext = React.createContext({
  currentPage: "home",
});
export const ContextProvider = (props) => {
  const [page, setCurrentPage] = useState("home");
  const pageChangeHandler = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <PageContext.Provider
      value={{ currentPage: page, onPageChange: pageChangeHandler }}
    >
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContext;
