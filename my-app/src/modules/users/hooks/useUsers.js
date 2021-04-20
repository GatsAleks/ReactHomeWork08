import { useEffect, useState } from "react";
import api from "../../../api";
import { USERS_URL } from "../constants";

export default function useUsers() {
  const [listUsers, setListUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api
      .get(USERS_URL)
      .then(({ data }) => setListUsers(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  function deleteUser(id) {
    api.delete(USERS_URL + "/" + id);
    setListUsers(listUsers.filter((item) => item.id !== id));
  }

  function createUser(newUser) {
    api.post(USERS_URL, newUser).then(({ data }) => {
      setListUsers((listUsers) => [...listUsers, data]);
    });
  }

  function editUser(user) {
    api
      .put(USERS_URL + "/" + user.id, user)
      .then(({ data }) =>
        setListUsers((listUsers) =>
          listUsers.map((user) => (user.id === data.id ? data : user))
        )
      );
  }

  return { listUsers, isLoading, error, deleteUser, createUser, editUser };
}
