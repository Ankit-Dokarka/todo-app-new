import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { isAdmin } = useAuth();
  return <div>{isAdmin ? <h1>admin</h1> : <h1>user</h1>}</div>;
}
