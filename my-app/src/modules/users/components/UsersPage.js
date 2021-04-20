import React from "react";
import { useRouteMatch } from "react-router";
import Loading from "../../common/components/Loading/Loading";
import useUsers from "../hooks/useUsers";
import UsersList from "./UsersList";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Users() {
  const { listUsers, isLoading, deleteUser} = useUsers();
  const match = useRouteMatch();
  

  const onDeleteUser = (id) => {
    deleteUser(id);
  };

  return (
    <div>
      
      <Button variant="contained" color="primary" size="small"><Link to={match.url+'/add'}>Add new user</Link></Button>

      <div>
        <h1>List of users</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <UsersList listUsers={listUsers} onDeleteUser={onDeleteUser} />
        )}
      </div>
    </div>
  );
}
