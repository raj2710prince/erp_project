import React, { useEffect, useState } from 'react';

const Table = ({ tableData, keys }) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {keys && keys.map((k, i) => <th scope="col" className="px-6 py-3" key={i}>
                                {k}
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((obj, i) =>
                            <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                {obj && keys.map((o, i) => {
                                    if (o == 'orderDetails')
                                        return (
                                            <td className="px-6 py-4" key={i}>
                                                {obj[o] && obj[o].map((o, i) => <div key={i}>{o}</div>)}
                                            </td>)
                                    else return (<td className="px-6 py-4" key={i}>
                                        {obj[o]}
                                    </td>)
                                })}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
