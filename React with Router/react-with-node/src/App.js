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

  return (
    <div className="App">
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
