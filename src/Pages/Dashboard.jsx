import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardButton from "../Components/DashboardButton";
import { useRecoilValue } from "recoil";
import OrderInfo from '../Store/OrderInfo';
import ProductInfo from '../Store/ProductInfo';
function Dashboard() {
  const pieColors = ['rgb(236, 208, 120)', 'rgba(217, 91, 67, 0.7)', 'rgba(192, 41, 66, 0.7)', 'rgba(84, 36, 55, 0.7)', 'rgba(83, 119, 122, 0.7)', 'rgba(119, 146, 174, 0.7)','rgba(119, 146, 199, 0.7)','rgba(150, 146, 174, 0.7)','rgba(119, 146, 10, 0.7)'];
  const orders = useRecoilValue(OrderInfo);
  const products = useRecoilValue(ProductInfo);
  console.log(products)
  const [categoryData , setCategoryData] = useState([]);
  const [categoryCount , setCategoryCount] = useState("");
  const [delivered , setDelivered] = useState(0);
  const [inProcess , setinProcess] = useState(0);
  const [cancelled , setcancelled] = useState(0);

  //console.log(products);
  useEffect(()=>{
    let category = [];
    for(const p of products){
      let flag = true;
      for(const c of category)
      {
        if(p.category==c.category) {c.count+=p.stock ; flag=false;}
      }
      if(flag) category.push({category:p.category , count : 1})
    }
    setCategoryData(category)
    function convertObjToString(data) {
      // Create a dictionary to store category counts
      const categoryCounts = {};
      for (const item of data) {
        const category = item.category;
        const count = item.count;
        categoryCounts[category] = (categoryCounts[category] || 0) + count;
      }
      // Convert the dictionary values to a string array with counts
      const countStrings = Object.values(categoryCounts).map(count => count.toString());
      // Join the string array with commas
      return countStrings.join(',');
    }
     setCategoryCount(convertObjToString(category));
  function getTotal( arr ){
      var j,
          myTotal = 0;
      for( j = 0; j < arr.length; j++) {
          myTotal += ( typeof arr[j] === 'number' ) ? arr[j] : 0;
      }
      return myTotal;
  }
  function drawPieChart(canvasId) {
      var i,
          canvas = document.getElementById( canvasId ),
          pieData = canvas.dataset.values.split(",").map( function(x){ return parseInt( x, 10 )}),
          halfWidth = canvas.width * .5,
          halfHeight = canvas.height * .5,
          ctx = canvas.getContext( '2d' ),
          lastend = 0,
          myTotal = getTotal(pieData);
  
      ctx.clearRect( 0, 0, canvas.width, canvas.height );
  
      for( i = 0; i < pieData.length; i++) {
          ctx.fillStyle = pieColors[i];
          ctx.beginPath();
          ctx.moveTo( halfWidth, halfHeight );
          ctx.arc( halfWidth, halfHeight, halfHeight, lastend, lastend + ( Math.PI * 2 * ( pieData[i] / myTotal )), false );
          ctx.lineTo( halfWidth, halfHeight );
          ctx.fill();
          lastend += Math.PI * 2 * ( pieData[i] / myTotal );
      }
  }
  setTimeout(()=>drawPieChart('canPie') , 1000);

  // populate orders section
  setDelivered(0);
  setcancelled(0);
  setinProcess(0);
  for(const o of orders)
  {
    if(o.status=="Delivered") setDelivered(s=>s+1);
    if(o.status=="In Process") setinProcess(s=>s+1);
    if(o.status=="Cancelled") setcancelled(s=>s+1);
  }
  },[]);
  const numberWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
  };
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center p-4  border-4 border-black-800">
        <div className="w-full text-left font-semibold text-xl"> Dashboard</div>
        <div className=" w-full flex flex-row items-center justify-around">
          <div className="w-/3 flex flex-col">
            <DashboardButton
              msg="Orders Delivered"
              count={delivered}
            ></DashboardButton>
            <DashboardButton
              msg="Orders inTransit"
              count={inProcess}
            ></DashboardButton>
            <DashboardButton
              msg="Orders Returned"
              count={cancelled}
            ></DashboardButton>
          </div>
          {/* Product details section */}
          <div className="w-/3 flex flex-col items-center justify-start h-full">
          <div className="w-fill text-xl py-3 font-bold">Inventory Details</div>
            <aside className="chart vert">
              <canvas
                id="canPie"
                width="300"
                height="200"
                data-values={categoryCount || ""}
              >
                This browser does not support HTML5 Canvas.
              </canvas>
              <ol class="legend">
                {categoryData.map((c,i)=><li key={i} className={` text-left key ${numberWords[i+1]}`}>{c.category} : {c.count}</li>)}
              </ol>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
