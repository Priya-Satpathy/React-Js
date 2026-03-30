import React, { useState } from 'react'

const Paragraph = () => {

    const text = "स्वगृहे पूज्यते मूर्खः स्वग्रामे पूज्यते प्रभुः। स्वदेशे पूज्यते राजा विद्वान्सर्वत्र पूज्यते॥";

    const [para, setPara] = useState(text);

    function changePara(){
        if(para === ''){
            setPara(text);
        } else {
            setPara('');
        }
    }

    return (
        <div>
            <h1 onClick={changePara} style={{ cursor: "pointer" }}>
                {para}
            </h1>
        </div>
    )
}

export default Paragraph