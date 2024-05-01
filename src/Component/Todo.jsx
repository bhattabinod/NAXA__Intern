import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query'; // Importing useMutation

function UserListComponent() {
  const [usersWithAge, setUsersWithAge] = useState([]);

  // Fetch users data from fake API
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    }
  });

  // Defining a mutation function
  const mutation = useMutation({
    mutationFn: async (userData) => {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userData.id}`, userData);
      return response.data;
    }
  });

  useEffect(() => {
    if (users) {
      // Generate random age data for each user
      const usersWithRandomAge = users.map(user => ({
        ...user,
        age: Math.floor(Math.random() * 50) + 18 // Random age between 18 and 67
      }));
      setUsersWithAge(usersWithRandomAge);
    }
  }, [users]);

  const handleUpdateAge = async (userId) => {
    const updatedUsers = usersWithAge.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          age: Math.floor(Math.random() * 50) + 18 // Generate a new random age
        };
      }
      return user;
    });
    setUsersWithAge(updatedUsers);

    // Update the user's age using the mutation function
    await mutation.mutateAsync(updatedUsers.find(user => user.id === userId));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  // Sort users alphabetically by name
  const sortedUsers = usersWithAge.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1>User List</h1>
      <h2>Users Sorted by Name:</h2>
      <ul>
        {sortedUsers.map(user => (
          <li  key={user.id}>
            <div >
              <div className='text-blue-700'>
                {user.name} - Age: {user.age}
              </div>
            <button onClick={() => handleUpdateAge(user.id)}>Update Age</button> {/* Button to update user's age */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListComponent;
