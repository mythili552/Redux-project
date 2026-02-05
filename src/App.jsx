import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(()=>{
    dispatch(fetchUsers());

  },[dispatch]);



  // Ajay 186

  if (loading)
    return <h2>loading...</h2>
  if (error)
    return <h2>{error}</h2>
    // Git_Hub

  return (
    <>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* React_js,Redux,Git */}

    </>
  )
}
export default App;