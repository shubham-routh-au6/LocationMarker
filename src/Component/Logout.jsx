import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();
  const handleLogout = () => {
    const jwt = localStorage.getItem("token");
    console.log(jwt);
    fetch("https://immense-wave-49808.herokuapp.com/logout", {
      method: "post",
      headers: {
        "content-type": "Application/json",
        Authorization: jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Logged out successfully") {
          localStorage.clear();
          history.push("/");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Button inverted color="teal" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default Logout;
