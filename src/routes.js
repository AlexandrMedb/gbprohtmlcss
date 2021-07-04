import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./pages/mainPage/MainPage";
import { CatalogPage } from "./pages/catalogPage/catalogPage";
import { RegistrationPage } from "./pages/registrationPage/registrationPage";
import { CartPage } from "./pages/cart/cartPage";
import { ProductPage } from "./pages/product/productPage";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/catalog" exact>
        <CatalogPage />
      </Route>
      <Route path="/registration" exact>
        <RegistrationPage />
      </Route>
      <Route path="/cart" exact>
        <CartPage />
      </Route>
      <Route path="/product" exact>
        <ProductPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
