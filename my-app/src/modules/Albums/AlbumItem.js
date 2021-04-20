import React from "react";

export default function AlbumItem({ item }) {
  const { userId, id, title } = item;

  return (
    <tr>
      <td>{userId}</td>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  );
}
