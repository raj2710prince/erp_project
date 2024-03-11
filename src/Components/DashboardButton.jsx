import React, { useEffect, useState } from 'react'

export default function DashboardButton({msg , count}) {

  return (
    <div>
         <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center m-2">
          <dt className="order-last text-lg font-medium text-gray-500">{msg}</dt> 
          <dd className="text-4xl font-extrabold text-teal-600 md:text-5xl">{count}</dd>
        </div>
         </div>
  )
}
