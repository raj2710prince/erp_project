import { atom } from 'recoil';
const OrderInfo = atom({
  key: 'orderInfo',
  default: [
    {
      "orderID": 10000,
      "customerName": "John Doe",
      "orderDate": "2024-03-10",
      "status": "In Process",
      "orderDetails": []
    },
    {
      "orderID": 10001,
      "customerName": "Jane Smith",
      "orderDate": "2024-03-10",
      "status": "Delivered",
      "orderDetails": []
    },
    {
      "orderID": 10002,
      "customerName": "Michael Brown",
      "orderDate": "2024-03-10",
      "status": "Cancelled",
      "orderDetails": []
    },
    {
      "orderID": 10003,
      "customerName": "Ashley Williams",
      "orderDate": "2024-03-10",
      "status": "In Process",
      "orderDetails": []
    },
    {
      "orderID": 10004,
      "customerName": "David Miller",
      "orderDate": "2024-03-10",
      "status": "Delivered",
      "orderDetails": []
    },
    {
      "orderID": 10005,
      "customerName": "Sarah Thompson",
      "orderDate": "2024-03-10",
      "status": "Cancelled",
      "orderDetails": []
    },
    {
      "orderID": 10006,
      "customerName": "William Jones",
      "orderDate": "2024-03-10",
      "status": "In Process",
      "orderDetails": []
    },
    {
      "orderID": 10007,
      "customerName": "Jennifer Garcia",
      "orderDate": "2024-03-10",
      "status": "Delivered",
      "orderDetails": []
    },
    {
      "orderID": 10008,
      "customerName": "Matthew Hernandez",
      "orderDate": "2024-03-10",
      "status": "Cancelled",
      "orderDetails": []
    },
    {
      "orderID": 10009,
      "customerName": "Amanda Moore",
      "orderDate": "2024-03-10",
      "status": "In Process",
      "orderDetails": []
    },
    {
      "orderID": 10010,
      "customerName": "Christopher Clark",
      "orderDate": "2024-03-10",
      "status": "Delivered",
      "orderDetails": []
    },
    {
      "orderID": 10011,
      "customerName": "Elizabeth Lewis",
      "orderDate": "2024-03-10",
      "status": "Cancelled",
      "orderDetails": []
    },
    {
      "orderID": 10012,
      "customerName": "Joseph Robinson",
      "orderDate": "2024-03-10",
      "status": "In Process",
      "orderDetails": []
    },
    {
      "orderID": 10013,
      "customerName": "Margaret Allen",
      "orderDate": "2024-03-10",
      "status": "Delivered",
      "orderDetails": []
    },
    {
      "orderID": 10014,
      "customerName": "Richard Johnson",
      "orderDate": "2024-03-10",
      "status": "Cancelled",
      "orderDetails": []
    },
    {
      "orderID": 10015,
      "customerName": "Kelly Walker",
      "orderDate": "2024-03-10",
      "status": "In Process",
    }],
})
export default OrderInfo;