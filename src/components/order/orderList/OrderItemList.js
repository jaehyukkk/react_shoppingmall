import React from "react";
import {Link} from "react-router-dom";

const Table = ({...props}) => {
    const ROOT = "http://127.0.0.1:8080/api/v1/file";
    const THUMBNAIL = 0;

    return(
        <div>
            <div className="cart-main-title">
                <p>ORDER LIST</p>
            </div>

            <div className="table-box">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col" width="50%">주문상품</th>
                        <th scope="col" width="10%">수량</th>
                        <th scope="col" width="10%">총금액</th>
                        <th scope="col" width="10%">주문상태</th>
                        <th scope="col" width="10%">결제상세</th>
                    </tr>
                    {props.orderItems.map((orderItem, i) => (
                        <tr key={i}>
                            <td><Link to={`#`}>
                                <div className="cart-table-title">
                                    <div>
                                        <img className="product-main-img" src={`${ROOT}/${orderItem.goods.files[THUMBNAIL].id}`}/>
                                    </div>
                                    <strong>{orderItem.goods.title}</strong>
                                </div>
                            </Link></td>
                            <td>{orderItem.itemCount}</td>
                            <td>{(orderItem.goods.price * orderItem.itemCount).toLocaleString()} 원</td>
                            <td>배송준비중</td>
                            <td><button>결제 상세</button></td>
                        </tr>
                        ))}

                    </thead>
                    <tbody>
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Table;