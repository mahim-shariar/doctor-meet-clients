import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
// import AuthProvider from "./contexts/AuthProvider";
import { CartProvider } from "react-use-cart";
import "simplebar/src/simplebar.css";
import store from "../src/redux/store";
//
import App from "./App";
import { CollapseDrawerProvider } from "./contexts/CollapseDrawerContext";
// contexts
import { SettingsProvider } from "./contexts/SettingsContext";
// contexts
import "./index.css";



// ----------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <HelmetProvider>
        <SettingsProvider>
          <CollapseDrawerProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CollapseDrawerProvider>
        </SettingsProvider>
      </HelmetProvider>
    </CartProvider>
  </Provider>,
  document.getElementById("root")
);
