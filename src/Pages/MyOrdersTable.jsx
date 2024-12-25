import axios from 'axios';
import moment from 'moment/moment';
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
const MyOrdersTable = ({ myOrder, index,foodDilet }) => {
    const { productName, price, foodquantity, buyingDate, image, purchaseCount, _id, category, buyerEmail,sellerEmail } = myOrder
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
                <td> {sellerEmail}</td>
                <td>{foodquantity}</td>
                <td>{formattedDate}</td>
                <td>
                    <button onClick={() => foodDilet(_id)}>
                        <FaTrashAlt size={16} />
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default MyOrdersTable;