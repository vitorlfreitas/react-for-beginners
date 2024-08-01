

import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
    
    const { users, error, isLoading, setUsers, setError} = useUsers();

    const deleteUser = (user: User) => {
        // Two Approaches: Optimistic Update / Pessimist Update

        // Safe Backup
        const originalUsers = [...users];

        setUsers(users.filter((u) => u.id !== user.id));

        userService.delete(user.id)
            .catch((err) => {
                setError(err.message), setUsers(originalUsers);
            });
    };
    // Adding Data
    const addUser = () => {
        // Safe Backup
        const originalUsers = [...users];

        const newUser = { id: 15, name: "Mosh" };

        setUsers([newUser, ...users]);

        userService.add(newUser)
            .then((res) => setUsers([res.data, ...users]))
            .catch((err) => {
                setError(err.message), setUsers(originalUsers);
            });
    };
    // Updating Data
    const updateUser = (user : User) => {
        // Safe Backup
        const originalUsers = [...users];
        // Updates the User specific field
        const updatedUser = { ...user, name: user.name + "!" };
        // Updates directly the UI for the user
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));
        // There are two methods to update a data, 'patch' and 'put', it all depends on how the server is built and which it is compatible. We are going to use 'patch'

        // Updates the Server
        userService.update(updatedUser)
                .catch(err => {
                    setError(err.message);
                    setUsers(originalUsers);
                    
                })
    }
    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className="btn btn-primary mb-3" onClick={addUser}>
                Add
            </button>
            <ul className="list-group">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="list-group-item d-flex justify-content-between"
                    >
                        {user.name}
                        <div>
                            <button
                                className="btn btn-outline-secondary mx-1"
                                onClick={() => updateUser(user)}
                            >
                                Update
                            </button>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => deleteUser(user)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
