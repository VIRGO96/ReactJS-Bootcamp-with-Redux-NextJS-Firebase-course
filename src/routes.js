import JobListings from "./views/JobListings";
import Signin from "./views/auth/Sigin";
import Signup from "./views/auth/Signup";
var routes = [
  {
    path: "/",
    component: JobListings,
    layout: "admin",
  },
  {
    path: "/signin",
    component: Signin,
    layout: "auth",
  },
  {
    path: "/signup",
    component: Signup,
    layout: "auth",
  },
];
export default routes;
