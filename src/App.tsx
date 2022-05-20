import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Router from "./routes/index";
// theme
import ThemeProvider from "./theme/index";
import NotistackProvider from "./components/NotistackProvider";
// components
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { ChartStyle } from "./components/chart";
import { MotionLazyContainer } from "./components/animate";
import { ProgressBarStyle } from "./components/ProgressBar";
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <NotistackProvider>
        <MotionLazyContainer>
          <AuthProvider>
            <ProgressBarStyle />
            <ChartStyle />
            <ScrollToTop />
            <Router />
          </AuthProvider>
        </MotionLazyContainer>
      </NotistackProvider>
    </ThemeProvider>
  );
}
