import MainContent from "../layout/MainContent";
import WorkPage from "./../layout/WorkPage";
export default [
  {
    path: "/",
    component: MainContent,
    exact: true
  },
  {
    path: "/work/:id",
    component: WorkPage,
    exact: false
  }
];
