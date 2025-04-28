import { Navigate, Route, Routes } from "react-router-dom";
import { configs } from "../configs";
import { ProtectedRoutes, routesData } from "./routesData";

export default function AppRoutes() {
  const isLogin = !!localStorage.getItem(configs.STORAGE_TOKEN_NAME);

  return (
    <Routes>
      {routesData.map(({ route, id, component: Component }) => (
        <Route key={id} path={route} element={<Component />} />
      ))}

      {ProtectedRoutes.map(
        ({
          id,
          route: protectRoute,
          component: ProtectComponent,
          children,
        }) => {
          if (!isLogin) {
            return (
              <Route
                key={id}
                path={protectRoute + "/*"}
                element={<Navigate to="/login" replace />}
              />
            );
          }

          if (children && children.length > 0) {
            return (
              <Route
                key={id}
                path={protectRoute}
                element={<ProtectComponent />}
              >
                {children.map(
                  ({
                    component: ChildComponent,
                    route: childRoute,
                    id: childId,
                  }) => (
                    <Route
                      key={childId + "-" + childRoute} // to ensure unique key
                      index={childRoute === ""}
                      path={childRoute !== "" ? childRoute : undefined}
                      element={<ChildComponent />}
                    />
                  )
                )}
              </Route>
            );
          }

          return (
            <Route
              key={id}
              path={protectRoute}
              element={<ProtectComponent />}
            />
          );
        }
      )}
    </Routes>
  );
}
