// EditProduct.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, Button, Label } from 'flowbite-react';

export default function EditProduct({ product, isOpen, onClose, onSave }) {
    const [editedProduct, setEditedProduct] = useState(product || {});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setEditedProduct(product || {});
        setErrors({});
    }, [product, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!editedProduct.name) newErrors.name = 'Name is required';
        if (!editedProduct.description) newErrors.description = 'Description is required';
        if (!editedProduct.price || editedProduct.price <= 0) newErrors.price = 'Price must be greater than zero';
        if (!editedProduct.quantity || editedProduct.quantity < 0) newErrors.quantity = 'Quantity must be zero or more';
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validate()) {
            onSave(editedProduct);
        }
    };

    return (
        <Modal show={isOpen} onClose={onClose} aria-labelledby="edit-product-modal">
            <Modal.Header>
                <h2 id="edit-product-modal" className="text-xl font-semibold">Edit Product</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={editedProduct.name || ''}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            color={errors.name && 'failure'}
                            aria-invalid={!!errors.name}
                            aria-describedby="name-error"
                        />
                        {errors.name && <p id="name-error" className="text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                        <Label htmlFor="description" value="Description" />
                        <TextInput
                            id="description"
                            name="description"
                            value={editedProduct.description || ''}
                            onChange={handleChange}
                            placeholder="Enter product description"
                            color={errors.description && 'failure'}
                            aria-invalid={!!errors.description}
                            aria-describedby="description-error"
                        />
                        {errors.description && <p id="description-error" className="text-sm text-red-600">{errors.description}</p>}
                    </div>
                    <div>
                        <Label htmlFor="price" value="Price" />
                        <TextInput
                            id="price"
                            name="price"
                            type="number"
                            value={editedProduct.price || ''}
                            onChange={handleChange}
                            placeholder="Enter product price"
                            color={errors.price && 'failure'}
                            aria-invalid={!!errors.price}
                            aria-describedby="price-error"
                        />
                        {errors.price && <p id="price-error" className="text-sm text-red-600">{errors.price}</p>}
                    </div>
                    <div>
                        <Label htmlFor="quantity" value="Quantity" />
                        <TextInput
                            id="quantity"
                            name="quantity"
                            type="number"
                            value={editedProduct.quantity || ''}
                            onChange={handleChange}
                            placeholder="Enter product quantity"
                            color={errors.quantity && 'failure'}
                            aria-invalid={!!errors.quantity}
                            aria-describedby="quantity-error"
                        />
                        {errors.quantity && <p id="quantity-error" className="text-sm text-red-600">{errors.quantity}</p>}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" onClick={handleSave}>Save Changes</Button>
                <Button color="gray" onClick={onClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

EditProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        image: PropTypes.string,
    }),
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};
