import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import ContributionGraph from "./contributionGraph";

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(
  <StrictMode>
    <ContributionGraph
      values={[
        { date: "2023-01-01", count: 8 },
        { date: "2023-01-22", count: 1 },
        { date: "2022-12-30", count: 2 },
      ]}
    />
  </StrictMode>
);
