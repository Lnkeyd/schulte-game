import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LobbyPage from "./pages/lobby/LobbyPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import SettingsPage from "./pages/settings/SettingsPage";
import StatisticsPage from "./pages/statistics/StatisticsPage";
import GamePage from "./pages/game/GamePage";
import AboutPage from "./pages/about/AboutPage";
import ResultsPage from "./pages/results/ResultsPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LobbyPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/statistics",
    element: <StatisticsPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
]);

// if user, then navigate to lobby
// if not, then to login

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <RouterProvider router={router}>
        <LobbyPage />
      </RouterProvider>
    </Provider>
  //     <React.StrictMode>
  // </React.StrictMode>
);
