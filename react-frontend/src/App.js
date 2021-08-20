import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blog from "./pages/blog/Blog";
import Create from "./pages/create/Create";
import { useContext } from "react";
import { Context } from "./context/Context";
import Settings from "./pages/settings/Settings";
function App() {
    
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/post/:id">
                    <Blog />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/myaccount">
                    <Settings/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
