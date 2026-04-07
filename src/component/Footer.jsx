import '../style/Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer(){
    const navigate =useNavigate();
    return(
        <>
         <div className="footer">
            <svg  className="icon" onClick={()=>navigate('/main_buying_page')} fill="#000000" width="800px" height="800px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>home-solid</title>
                <path className="clr-i-solid clr-i-solid-path-1" d="M33,19a1,1,0,0,1-.71-.29L18,4.41,3.71,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33,19Z"></path><path className="clr-i-solid clr-i-solid-path-2" d="M18,7.79,6,19.83V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76Z"></path>
                <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
            </svg>

            <svg className="icon" onClick={()=>navigate('/category/:categoryName')} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"/>
            </svg>
            <svg className="icon" onClick={()=>navigate('/Main_favourite')} fill="#000000" height="800px" width="800px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	            viewBox="0 0 32 32" xml:space="preserve">
                <path d="M29.9,18.1c-1.4-1.4-3.8-1.4-5.1,0L24,18.9l-0.8-0.8c-1.4-1.4-3.8-1.4-5.1,0c-1.4,1.4-1.4,3.8,0,5.2l5.2,5.4
                    c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l5.2-5.4C31.3,21.9,31.3,19.5,29.9,18.1z"/>
                <path d="M16.6,16.7c1-1.1,2.5-1.7,4-1.7c1.2,0,2.4,0.4,3.4,1.1c1-0.7,2.1-1.1,3.4-1.1c0.6,0,1.1,0.1,1.6,0.2V9c0-2.8-2.2-5-5-5H8
                    C5.2,4,3,6.2,3,9v19c0,0.4,0.2,0.7,0.6,0.9C3.7,29,3.9,29,4,29c0.2,0,0.5-0.1,0.7-0.2c3.2-2.7,7-4.5,11.1-5.3
                    C14.6,21.3,14.8,18.5,16.6,16.7z M11,11h6c0.6,0,1,0.4,1,1s-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1S10.4,11,11,11z M14,17h-3
                    c-0.6,0-1-0.4-1-1s0.4-1,1-1h3c0.6,0,1,0.4,1,1S14.6,17,14,17z"/>
            </svg>
         </div>
        </>
    )
}
export default Footer;
