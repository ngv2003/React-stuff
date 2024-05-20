import {useState} from 'react';

function MynewComponent(){
    const [name, setName] = useState("");
    const [quality, setQuality] = useState(1);
    const [comment, setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQualityChange(event){
        setQuality(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quality} onChange={handleQualityChange} type="number"/>
            <p>Quality: {quality}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder='Enter delivery instruction..'/>

            <p>Comment: {comment}</p>

            <select>value={payment} onChange={handlePaymentChange}
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>Payment: </p>

            <label>
                <input type="radio" value="pick up"
                       checked={shipping ==="pick up"}
                       onChange={handleShippingChange}/>
                       Pick up
            </label><br/>
            <label>
                <input type="radio" value="delivery"
                       checked={shipping ==="delivery"}
                       onChange={handleShippingChange}/>
                       Delivery
            </label>
            <p>Shipping:{shipping}</p>

        </div>
    );
}

export default MynewComponent;