import React from "react";
import AlbumItem from "./AlbumItem";

export default function AlbumsList({ dataList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((item) => (
          <AlbumItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
