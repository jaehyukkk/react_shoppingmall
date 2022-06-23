import React from "react";

const CouponModalDescription = (props) => {
    const {couponList, handleChangeCouponId, handleChangeIssuesNum} = props;
    const couponCnt = new Array(100).fill(0);

    return(
        <div className="CouponModalDescription">
            <select onChange={handleChangeCouponId}>
                <option>쿠폰 선택</option>
                {couponList.map((coupon,i) => (
                    <option key={i} value={coupon.id}>{coupon.title}</option>
                ))}
            </select>
            <select onChange={handleChangeIssuesNum}>
                <option>발행 매수</option>
                {couponCnt.map((itme, i) => (
                    <option key={i} value={i+1}>{i+1}</option>
                ))}
            </select>
        </div>
    )
}

export default CouponModalDescription;