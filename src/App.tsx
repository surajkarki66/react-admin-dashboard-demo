import { Route } from "react-router";
import { Admin, CustomRoutes, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import Layout from "./layout/Layout";
import Login from "./layout/Login";
import { authProvider } from "./authProvider";
import users from "./users";
import posts from "./posts";
import Dashboard from "./dashboard/Dashboard";
import Configuration from "./configuration/Configuration";
import comments from "./comments";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    title="Admin Dashboard"
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    loginPage={Login}
    disableTelemetry
  >
    {/* You can add custom routes here */}
    <CustomRoutes>
      <Route path="/configuration" element={<Configuration />} />
    </CustomRoutes>
    {/* https://jsonplaceholder.typicode.com/users  */}
    <Resource name="posts" {...posts} recordRepresentation="title" />
    <Resource name="comments" {...comments} />
    <Resource name="users" {...users} recordRepresentation="name" />
  </Admin>
);

export default App;
