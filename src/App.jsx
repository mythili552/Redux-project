import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(()=>{
    dispatch(fetchUsers());

  },[dispatch]);

// AntoAkash
  if (loading)
    return <h2>loading...</h2>
  if (error)
    return <h2>{error}</h2>

  return (
    <>
      <h1>Users name:</h1>
      <h2>users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>


        ))}

        
      </ul>

    </>
  )
}
export default App;