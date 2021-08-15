import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blog from "./pages/blog/Blog";
function App() {
    // const isLoggedIn = false;
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
                <Route path="/blog/:id">
                    <Blog />
                </Route>
            </Switch>
        </>
    );
}

export default App;
