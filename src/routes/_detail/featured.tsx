import { createFileRoute } from "@tanstack/react-router";
import DetailPage from "../../components/pages/detailPage";

export const Route = createFileRoute("/_detail/featured")({
  component: AboutComponent,
});

function AboutComponent() {
  return <DetailPage />;
}
