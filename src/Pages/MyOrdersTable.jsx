import moment from 'moment/moment';
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
const MyOrdersTable = ({ myOrder, index }) => {
    const { productName, price, foodquantity, buyingDate, image, purchaseCount, category, buyerEmail } = myOrder

    const formattedDate = moment(buyingDate).format('MMMM Do YYYY, h:mm:ss a'); 
    return (
        <tbody>
            <tr className='text-center'>
                <th className='flex justify-center items-center gap-5'>{index + 1}
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image} />
                        </div>
                    </div>
                </th>

                <td>{productName}</td>
                <td>{category} </td>
                <td> ${price}</td>
                <td> {buyerEmail}</td>
                <td>{purchaseCount}</td>
                <td>{formattedDate}</td>
                <td>
                    <button>
                        <FaTrashAlt size={16} />
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default MyOrdersTable;