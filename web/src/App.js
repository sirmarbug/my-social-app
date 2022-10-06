import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import PostDetails from "./pages/Dashboard/PostDetails";
import MyPosts from "./pages/Dashboard/MyPosts";
import Home from "./pages/Dashboard/Home";

const GuestRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to={"/posts"}/>
            )
        }
    />
)

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to={"/"}/>
            )
        }
    />
)

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <GuestRoute exact path="/" component={Login}/>
              <GuestRoute path="/register" component={Register}/>
              <AuthRoute path="/posts" component={Home}/>
              <AuthRoute path="/my-posts" component={MyPosts}/>
              <AuthRoute path="/posts/:id" component={PostDetails}/>
              <Route path="*" component={NotFound}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
