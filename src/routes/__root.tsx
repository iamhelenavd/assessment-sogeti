import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navigation from "../components/molecules/navigation/componen";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
