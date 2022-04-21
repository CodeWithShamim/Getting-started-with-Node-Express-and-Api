import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  // console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.name.value;
    const user = { name, email };

    // send data to server using POST
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
      });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <input type="submit" value="Submit" />
      </form>

      {users?.map((user) => (
        <div key={user.id}>
          <h2>Id: {user.id}</h2>
          <h5>Name: {user.name}</h5>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
