import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import './App.css';
// components
import ScrollToTop from "./components/ScrollToTop";
import AuthProvider from "./contexts/AuthProvider";
import { getProduct } from "./redux/actions/productAction";
import { loadUser } from "./redux/actions/userAction";
import store, { useAppSelector } from "./redux/store";
import Router from "./routes/index";
// theme
import ThemeProvider from "./theme/index";


// ----------------------------------------------------------------------

export default function App() {

    const token = window.localStorage.getItem("token");

    useEffect(() => {

        store.dispatch(loadUser());
    }, [token]);
    return (
        <ThemeProvider>
            <AuthProvider>
                <ScrollToTop />
                <Router />
            </AuthProvider>
        </ThemeProvider>
    );
}
