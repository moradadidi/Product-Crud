// EditUser.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, Button, Label } from 'flowbite-react';

// import { FaEdit } from "react-icons/fa";

export default function EditUser({ user, isOpen, onClose, onSave }) {
    const [editedUser, setEditedUser] = useState(user || {});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setEditedUser(user || {});
        setErrors({});  
    }, [user]);

    const handleChange = (e) => {   
        const { name, value } = e.target;
        setEditedUser((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!editedUser.name) newErrors.name = 'Name is required';  
        if (!editedUser.email) newErrors.email = 'Email is required';
        if (!editedUser.password) newErrors.password = 'Password is required';
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validate()) {   
            onSave(editedUser);     
        }
    };

    return (
        <Modal
            show={isOpen}   
            size="md"
            popup
            onClose={onClose}
        >
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Edit User
                    </h3>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={editedUser.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}  
                    </div>
                    <div>   
                        <div className="mb-2 block">
                            <Label  
                                htmlFor="email" 
                                value="Email"   
                            />
                        </div>  
                        <TextInput
                            id="email"
                            type="email"
                            name="email"    
                            value={editedUser.email}
                            onChange={handleChange} 
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p> 
                        )}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Password"
                            />      
                        </div>
                        <TextInput
                            id="password"
                            type="password"     
                            name="password"
                            value={editedUser.password}
                            onChange={handleChange} 
                            required
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="success" onClick={handleSave}> 
                    Save changes    
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

EditUser.propTypes = {
    user: PropTypes.object,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};