import React from "react";
import Transaction from "../../components/Transaction";

// month wise list banegi({kisne diye, amount, date, thing, (dene hain mujhe yaa lene hain)})
// month wise sort bhi hoga 

const GroupDetail = ({
    id = -1,
    allTransactions = [],
    groupName = "groupName",
    photo='icon.jpg'
}) => {

    return (
        <div>
            <div className="flex">
                <div>back</div>
                <div>settings</div>
            </div>
            <div>
                <div>icon</div>
                <div>{groupName}</div>
            </div>

            <div>
                <div>settle Up</div>
                <div>balances</div>
                <div>totals</div>
                <div>convert to</div>
            </div>

            <div>Add Expense</div>

            {allTransactions.map((detail,index)=>{
                return (
                    <Transaction
                        key={index}
                        detail={detail}
                    />
                )
            })}

        </div>
    )
}

export default GroupDetail;