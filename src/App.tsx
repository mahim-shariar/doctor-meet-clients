import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import './App.css';
// components
import ScrollToTop from "./components/ScrollToTop";
import AuthProvider from "./contexts/AuthProvider";
import { loadUser } from "./redux/actions/userAction";
import store from "./redux/store";
import Router from "./routes/index";
// theme
import ThemeProvider from "./theme/index";


// ----------------------------------------------------------------------

export default function App() {

    useEffect(() => {

        store.dispatch(loadUser());

    }, []);
    return (
        <ThemeProvider>

            <AuthProvider>
                <ScrollToTop />
                <Router />
            </AuthProvider>
        </ThemeProvider>
    );
}
