import React,{useState} from 'react'

const MultipleInputs=()=>{
    const [userRegistration,setUserRegistration]=useState({
        EDate:'',
        Amount:'',
        PaymentMode:'',
        Remark:''
    });

    const [records,setRecords]=useState([]);

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;        
        setUserRegistration({...userRegistration,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newRecord={...userRegistration,id:new Date().getTime().toString()} 
        setRecords([...records,newRecord]);
        setUserRegistration({EDate:"",Amount:"",PaymentMode:"",Remark:""});    }
    return(
        <>
            <form action=''  onSubmit={handleSubmit}>
            <div><h3>Receipt Details</h3></div>
            <table>
                <tr>
                    <th>Date</th>
                    <td><input type="date" value={userRegistration.EDate}
                    onChange={handleInput} name="EDate" id="EDate"/></td>
                </tr>
                <tr>
                    <th><label htmlFor='Amount'>Amount</label></th>
                    <td>
                        <input type="number"  value={userRegistration.Amount}
                        onChange={handleInput} name="Amount" id="Amount"/>
                    </td>
                </tr>              
                <tr>
                    <th><label htmlFor='PaymentMode'>Payment_Mode</label></th>
                    <td>
                    <select onChange={handleInput} name="PaymentMode" id="PaymentMode">
                    <option value="">Select</option>
                        <option value="cash">Cash</option>
                        <option value="cheque">Cheque</option>                        
                    </select>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor='Remark'>Remark</label></th>
                    <td><input type="text"  value={userRegistration.Remark}
                    onChange={handleInput} name="Remark" id="Remark"/></td>
                </tr>
            </table>              
               <table>
                 <tr>
                    <td class='cancel'>
                        <button type='cancel'>CANCEL (esc)</button>
                    </td>
                    <td>
                        <button type='submit'>SUBMIT </button>
                    </td>
                </tr>
               </table>              
            </form>
            <div class='GridView'>
            <table>
                <tr>
                    <th class='tdFirst'>Date</th>
                    <th class='tdSecond'>Amount</th>
                    <th class='tdThird'>Payment Mode</th>
                    <th class='tdFourth'>Remarks</th>
                </tr>               
            </table>
            {
                records.map((curElem)=>{
                    const{id,EDate,Amount,PaymentMode,Remark}=curElem;
                    return(
<table key={id}>
    <thead>       
    </thead>
    <tbody>
        <tr>
            <td class='tdFirst'>{curElem.EDate}</td>
            <td class='tdSecond'>{curElem.Amount}</td>
            <td class='tdThird'>{curElem.PaymentMode}</td>
            <td class='tdFourth'>{curElem.Remark}</td>
        </tr>
    </tbody>
</table>

                        
                    )
                })
            }
            </div>
        </>
    )
}

export default MultipleInputs