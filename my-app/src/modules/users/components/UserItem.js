import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

export default function UserItem({ item, index, onDeleteUser }) {
  const { id, name, phone, email } = item;
  const match = useRouteMatch();

  const onDeleteItem = (e) => onDeleteUser(id);

  const onEditUser = (e) => {
    console.log(item);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <IconButton aria-label="delete" color="primary" onClick={onEditUser}>
          <Link to={match.url + "/" + `${id}`}>
            <EditIcon />
          </Link>
        </IconButton>
      </td>
      <td>
        <IconButton aria-label="delete" color="primary" onClick={onDeleteItem}>
          <DeleteOutlineIcon />
        </IconButton>
      </td>
    </tr>
  );
}
