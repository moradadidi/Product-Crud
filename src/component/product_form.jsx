// component/product_form.jsx
import { useState } from 'react';

function ProductForm() {
    const [product, setProduct] = useState({ name: '', price: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit product logic
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
            
            <label className="block mb-4">
                <span className="text-gray-700">Product Name</span>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    required
                />
            </label>
            
            <label className="block mb-4">
                <span className="text-gray-700">Price</span>
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    required
                />
            </label>
            
            <label className="block mb-6">
                <span className="text-gray-700">Description</span>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    rows="4"
                ></textarea>
            </label>
            
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700">
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;
