import React, { useState } from 'react';
import OrderInfo from '../Store/OrderInfo';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EditOrder = () => {
    const { orderId } = useParams();
    const [orders, setOrderInfo] = useRecoilState(OrderInfo);
    const [customerName, setCustomerName] = useState();
    const [orderDate, setOrderDate] = useState();
    const [orderDetails, setOrderDetails] = useState();
    const [myOrderId, setmyOrderId] = useState(orderId || orders.reduce((o, value) => o = o > value.orderID ? o : value.orderID) + 1);
    const [status, setStatus] = useState();
    const navigate = useNavigate();
    const handleSubmit = () => {
        const data = {
            "orderID": myOrderId,
            "customerName": customerName,
            "orderDate": orderDate,
            "status": status,
            "orderDetails": [orderDetails]
        }
        if (orders.find((e) => e.orderID == myOrderId)) {
            setOrderInfo(orders.map((o) => {
                if (o.orderID == myOrderId)
                    return data;
                else return o;
            }))
            console.log("present");
        }
        else setOrderInfo([...orders, data]);
        navigate("/orders", { replace: true });
    }
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input type="text"
                            className='p-2'
                            placeholder="Customer Name"
                            onChange={(e) => setCustomerName(e.target.value)}
                            value={customerName}
                        />
                        <input type="date"
                            className='p-2'
                            placeholder="Date"
                            onChange={(e) => setOrderDate(e.target.value)}
                            value={orderDate}
                        />
                        <input type="text"
                            className='p-2'
                            placeholder="Orderid"
                            onChange={(e) => setmyOrderId(e.target.value)}
                            value={myOrderId}
                        />
                        <input type="text"
                            className='p-2'
                            placeholder="Status"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                        />
                        <input type="text"
                            className='p-2'
                            placeholder="Order Details"
                            onChange={(e) => setOrderDetails(e.target.value)}
                            value={orderDetails}
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
                            Add/Modify Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditOrder;
