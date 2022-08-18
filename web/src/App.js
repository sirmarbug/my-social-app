import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import PostDetails from "./pages/Dashboard/PostDetails";
import MyPosts from "./pages/Dashboard/MyPosts";
import Home from "./pages/Dashboard/Home";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/posts" component={Home}/>
              <Route path="/my-posts" component={MyPosts}/>
              <Route path="/posts/:id" component={PostDetails}/>
              <Route path="*" component={NotFound}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
