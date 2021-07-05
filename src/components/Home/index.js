import * as React from "react";
import { useLocation } from "react-router-dom"; // useHistory

export default function Home() {
  // const history = useHistory();
  const location = useLocation();
  const urlQuery = new URLSearchParams(location.search);

  return (
    <>
      <h2 data-testid="page">Home Page</h2>
      <p data-testid="query-path">Path: {urlQuery.get("path")}</p>
      <p data-testid="query-title">Title: {urlQuery.get("title")}</p>
    </>
  );
}
