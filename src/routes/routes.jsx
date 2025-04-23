import { Routes, Route } from "react-router-dom";
import { routesData } from "./routesData";

export default function AppRoutes() {
  return (
    <Routes>
      {routesData.map(({ id, route, component: Component, children }) => (
        <Route key={id} path={route} element={<Component />}>
          {children &&
            children.map(({ id: childId, route: childRoute, component: ChildComponent }) => (
              <Route
                key={childId}
                index={childRoute === ""}
                path={childRoute !== "" ? childRoute : undefined}
                element={<ChildComponent />}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
}
