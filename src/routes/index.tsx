import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../components/pages/homePage";

type Search = {
  search?: string;
  plotSize?: string;
};

export const Route = createFileRoute("/")({
  component: Home,
  validateSearch: (search: Record<string, unknown>): Search => {
    return {
      search: String(search.search ?? ""),
      plotSize:
        search.plotSize !== "full" && search.plotSize !== "short"
          ? "full"
          : search.plotSize,
    };
  },
});

function Home() {
  return <HomePage />;
}
