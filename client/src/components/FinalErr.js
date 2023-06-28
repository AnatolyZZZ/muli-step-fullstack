import './Final.css'

export const FinalErr = (props) => {       
    return <div className='step'>
        <div className='step-content'>
            <div className='container mooved centered'>
               <img src='./images/Oops Emoji.png' alt='oops' style={{width : "100px"}}/>
                
                <h2 className='step-header'>OOOPS!</h2>
                <p className="feature final">Failed to save your data. Please go back to summary and try again.</p>
             </div>
        </div>
    </div>
}