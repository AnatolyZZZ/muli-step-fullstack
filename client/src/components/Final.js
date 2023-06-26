import './Final.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { setLoading } from '../actions';

export const Final = (props) => {
    const dispatch =  useDispatch();
    const loading = useSelector(state => state.loading);
    const cur_state = useSelector(state => state);
    const [msgHeader, setHeader] = useState('Thank you!');
    const [msgTxt, setMsg] = useState('Thanks for confirming yout subscription! We hope you have fun using our platform. If you ever need support please feel free to mail us at support@loremgaming.com.');
    
    useEffect(() => {
        const para = {
            method : 'POST',
            headers :{"Content-Type" : "application/json"},
            body : JSON.stringify(cur_state)
        }
        const ignore = localStorage.getItem('ignore') ? localStorage.getItem('ignore') : false;
        // console.log('ignore',ignore)
        const saveData = async () => {
            try{
                dispatch(setLoading(true));
                const res = await fetch('/api/answers', para);
                if (res.ok) {
                   dispatch(setLoading(false));
                   localStorage.setItem('ignore', true);
                }
            } catch (err) {
                console.log('error =>', err);
                setHeader('OOOPS!');
                setMsg('Failed to save your data. Please refresh page or startover');
            }
            if (ignore) {
                dispatch(setLoading(false));
            }
        }
        saveData();
      }, []);
    return <div className='step'>
        <div className='step-content'>
            <div className='container mooved centered'>
                {loading ? <iframe src="https://giphy.com/embed/sSgvbe1m3n93G" width="180" height="180" frameBorder="0" className="giphy-embed" allowFullScreen title='loading'> </iframe> : <img src='./images/icon-thank-you.svg' alt='thankyou'/>}
                
                <h2 className='step-header'>{msgHeader}</h2>
                <p className="feature final">{msgTxt}</p>
             </div>
        </div>
    </div>
}