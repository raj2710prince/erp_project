import React, { useState } from 'react'
import Table from '../Components/Table'
import OrderInfo from '../Store/OrderInfo';
import { useRecoilState } from 'recoil';
import Button from '../Components/Button';

export default function Orders() {
  const [orders, setOrderInfo] = useRecoilState(OrderInfo);
  return (
    <>
      <div className='w-full flex items-end py-2 gap-2 justify-end'><Button to={"/edit/orders"} text="Edit order" />
        <Button to={"/edit/orders"} text="Add order" /></div>
      <Table tableData={orders} keys={Object.keys(orders[0]).sort()}></Table>
    </>

  )
}
