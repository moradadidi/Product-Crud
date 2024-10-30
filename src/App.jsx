// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './component/product_form';
import ProductTable from './component/product_table';
import CustomSidebar from './partials/sidebar';
import Users from './users/Users';

function App() {
    return (
        <Router>
            <div className="flex min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
                {/* Sidebar navigation */}
                <CustomSidebar />

                {/* Main content */}
                <main className="flex-grow w-full h-full p-10 bg-white shadow-lg rounded-lg m-6">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                                    Welcome to the Product App
                                </h1>
                            }
                        />
                        <Route path="/add-product" element={<ProductForm />} />
                        <Route path="/products" element={<ProductTable />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
