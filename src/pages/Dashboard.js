import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Terjadi kesalahan:', error));
  }, []);

  return (
    <div>
      <h1 className="flex items-center justify-center text-lg s">Informasi Pengguna</h1>
      <div className="flex items-center justify-center">
  <table className="border-collapse border mx-auto">
    <thead>
      <tr>
        <th className="border p-3">Username</th>
        <th className="border p-3">Email</th>
        
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td className="border p-3">{user.username}</td>
          <td className="border p-3">{user.email}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>




      {/* {users.map((user) => (
        <div key={user.id}>
          <h3>{user.username}</h3>
          <p>Email: {user.email}</p>
          <p>Nama Depan: {user.firstname}</p>
          <p>Nama Belakang: {user.lastname}</p>
          <hr />
        </div>
      ))} */}
    </div>
  );
}

export default Dashboard;
