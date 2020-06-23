import React, { useState } from 'react';
import { toBinary, toDecimal } from './../../helper';

import './converter.scss';

const Converter = () => {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [binaryError, setBinaryError] = useState(false);
    const [numberError, setNumberError] = useState(false);

    const handleBinaryChange = (e) => {
        const binaryValue = e.target.value;
        setNumberError(false);
        if(isNaN(binaryValue)) {
            setNumberError(true);
            return;
        }
        setBinaryError(!(/^[0-1]+$/g).test(binaryValue) && (binaryValue !== '') );
        if(binaryValue !== '') {
            setBinary(binaryValue);
            setDecimal(toDecimal(binaryValue)); 
        } else {
            setBinary('');
            setDecimal('');
        }
    }

    const handleDecimalChange = (e) => {
        const decimalValue = e.target.value;
        setNumberError(false);
        if(isNaN(decimalValue)) {
            setNumberError(true);
            return;
        }
        if(decimalValue !== '') {
            setDecimal(decimalValue);
            setBinary(toBinary(decimalValue));
        } else {
            setDecimal('');
            setBinary('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDecimal(toDecimal(binary));
    }

    let binaryErrorMessage = "Enter only Binary value (either 0 or 1)";
    let numberErrorMessage = "Enter only Numbers";

    return (
        <div className="converter">
            <form onSubmit={handleSubmit}>
                
                <input type="text" placeholder="Binary" onChange={handleBinaryChange} value={binary} />
                {/* <input type="submit" value="Convert" disabled={binaryError} /> */}
                <input type="text" placeholder="Decimal" onChange={handleDecimalChange} value={ binaryError ? '' : decimal} disabled={binaryError}/>
                <span className={`error-msg ${binaryError || numberError ? 'fadeIn' : '' } `}>
                    { binaryError &&
                        binaryErrorMessage
                    }
                    { numberError &&
                        numberErrorMessage
                    }
                </span>
            </form>
        </div>
    );
}

export default Converter;
