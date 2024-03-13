import React from 'react'
import Table from '../Components/Table';
import { useRecoilState } from 'recoil';
import ProductInfo from '../Store/ProductInfo';
import Button from '../Components/Button';

function Products() {
  const [product, setProduct] = useRecoilState(ProductInfo);
  console.log(product)
  return (
    <>
      <div className='w-full flex items-end py-2 gap-2 justify-end'><Button to={"/edit/products"} text="Edit product" />
        <Button to={"/edit/products"} text="Add product" /></div>
      <Table tableData={product} keys={Object.keys(product[0])}></Table>
    </>

  )
}

export default Products