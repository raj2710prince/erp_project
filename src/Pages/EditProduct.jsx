import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import ProductInfo from '../Store/ProductInfo';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const EditProduct = () => {
    const { productId } = useParams();
    const [product, setProductInfo] = useRecoilState(ProductInfo);
    const [productName, setProductName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const navigate = useNavigate();
    const handleSubmit = () => {
        const data = {
            "name": productName,
            "category": category,
            "price": price - 0,
            "stock": stock - 0,
        }
        if (product.find((e) => e.name == productName)) {
            setOrderInfo(product.map((o) => {
                if (o.name == productName)
                    return data;
                else return o;
            }))
            console.log("present");
        }
        else setProductInfo([...product, data]);
        navigate("/products", { replace: true });
    }
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input type="text"
                            className='p-2'
                            placeholder="Product Name"
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                        />
                        <input type="text"
                            className='p-2'
                            placeholder="Category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        />
                        <input type="number"
                            className='p-2'
                            placeholder="Price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                        <input type="number"
                            className='p-2'
                            placeholder="stock"
                            onChange={(e) => setStock(e.target.value)}
                            value={stock}
                        />
                    </div>
                    <div>
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            Add/Modify Product
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditProduct;
