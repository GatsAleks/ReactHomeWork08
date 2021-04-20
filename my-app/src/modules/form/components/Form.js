import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./form.css";

export default function ContactsForm({
  createContact,
  editUser,
  editContact,
  setEditUser,
}) {
  const emptyUser = {
    name: "",
    phone: "",
    email: "",
  };
  const [user, setUser] = useState(emptyUser);
  const history = useHistory();
  const params = useParams();

  function backUsersPage() {
    setTimeout(() => {
      history.push("/users");
    }, 1000);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (user.id) {
      editUser(user);
      setEditUser({});
    } else {
      createContact(user);
    }
    setUser(emptyUser);
    backUsersPage();
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        size="small"
        name="name"
        value={user.name}
        onChange={onInputChange}
        style={{ margin: "5px" }}
      />
      <TextField
        id="outlined-basic"
        label="phone"
        variant="outlined"
        size="small"
        name="phone"
        value={user.phone}
        onChange={onInputChange}
        style={{ margin: "5px" }}
      />
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        size="small"
        name="email"
        value={user.email}
        onChange={onInputChange}
        style={{ margin: "5px" }}
      />

      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onFormSubmit}
          style={{ margin: "5px" }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={backUsersPage}
          style={{ margin: "5px" }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
