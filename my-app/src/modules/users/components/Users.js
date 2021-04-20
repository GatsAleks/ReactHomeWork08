import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import useUsers from "../hooks/useUsers";
import UsersPage from "./UsersPage";
import Form from "../../form/components/Form";

export default function Users() {
  const { createUser, editUser } = useUsers();
  const { path } = useRouteMatch();

  const createContact = (newUser) => {
    createUser(newUser);
  };

  return (
    <div>
      <Switch>
        <Route path={path} exact>
          <UsersPage />
        </Route>
        <Route path={path + "/add"}>
          <Form createContact={createContact} editUser={editUser} />
        </Route>
        <Route path={path + "/:userId"}>
          <Form />
        </Route>
      </Switch>
    </div>
  );
}
