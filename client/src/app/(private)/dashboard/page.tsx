function Dashboard() {
  const user = {
    id: "1",
    name: "John Doe",
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2 className="">Hi, {user.name}! Welcome back.</h2>
    </div>
  );
}

export default Dashboard;
