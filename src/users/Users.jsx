import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Button } from 'flowbite-react';

import EditUser from "./edit_user";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get("http://localhost:8000/api/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8000/api/users/${id}`)
            .then(() => setUsers(users.filter((user) => user.id !== id)))   
            .catch((err) => console.log(err));
    };

    const openEditModal = (user) => {
        setSelectedUser(user);
        setEditModalOpen(true); 
    };

    const handleSaveChanges = (updatedUser) => {
        axios.put(`http://localhost:8000/api/users/${updatedUser.id}`, updatedUser)
            .then((res) => {
                
                setUsers(users.map((user) => user.id === res.data.id ? res.data : user));
                setEditModalOpen(false);
            })
        };

    return (    
         <div className="mt-6">
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Edit</Table.HeadCell>
                    <Table.HeadCell>Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {users.map((user) => (
                        <Table.Row key={user.id} className="bg-white">
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>
                                <Button color="light" onClick={() => openEditModal(user)}>
                                    Edit
                                </Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="failure" onClick={() => deleteUser(user.id)}>
                                    Delete
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            {/* Edit User Modal */}
            <EditUser
                user={selectedUser}
                isOpen={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                onSave={handleSaveChanges}
            />
        </div>
    );
}
export { Users };