import './success.css';

function Success(){
    let successImg = require('./images/success icon.png');
    return(
        <div className='successContainer'>
            <img src={successImg} alt="successIcon"/>
        </div>
    )
};

export default Success