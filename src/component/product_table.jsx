// ProductTable.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Button } from 'flowbite-react';
import { FaEdit, FaTrash } from "react-icons/fa";
import EditProduct from './edit_product';

export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/products");
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/products/${id}`);
            setProducts(products.filter((product) => product.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const openEditModal = (product) => {
        setCurrentProduct(product);
        setEditModalOpen(true);
    };

    const handleSaveChanges = async (updatedProduct) => {
        try {
            const res = await axios.put(`http://localhost:8000/api/products/${updatedProduct.id}`, updatedProduct);
            setProducts(products.map((product) => (product.id === res.data.id ? res.data : product)));
            setEditModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="mt-6">
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Description</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Quantity</Table.HeadCell>
                    <Table.HeadCell>Image</Table.HeadCell>
                    <Table.HeadCell>Edit</Table.HeadCell>
                    <Table.HeadCell>Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {products.map((product) => (
                        <Table.Row key={product.id} className="bg-white">
                            <Table.Cell>{product.name}</Table.Cell>
                            <Table.Cell>{product.description}</Table.Cell>
                            <Table.Cell>${product.price}</Table.Cell>
                            <Table.Cell>{product.quantity}</Table.Cell>
                            <Table.Cell>
                                {product.image ? (
                                    <img src={`http://localhost:8000/storage/${product.image}`} alt={product.name} className="w-12 h-12 object-cover" />
                                ) : "No image"}
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="light" onClick={() => openEditModal(product)}>
                                    <FaEdit />
                                </Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="failure" onClick={() => deleteProduct(product.id)}>
                                    <FaTrash />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            {/* Edit Product Modal */}
            {currentProduct && (
                <EditProduct
                    product={currentProduct}
                    isOpen={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    onSave={handleSaveChanges}
                />
            )}
        </div>
    );
}
