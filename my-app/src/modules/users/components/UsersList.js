import React from "react";
import UserItem from "./UserItem";

export default function UsersList({ listUsers, onDeleteUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {listUsers.map((item, index) => (
          <UserItem
            key={item.id}
            item={item}
            index={index}
            onDeleteUser={onDeleteUser}
          />
        ))}
      </tbody>
    </table>
  );
}
