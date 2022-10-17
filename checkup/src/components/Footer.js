import {
    FaMailBulk, FaPhone, FaSearchLocation, 
 } from 'react-icons/fa'

function Footer(props) {
    return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='location'>
        <p><FaSearchLocation size={30} style={{color:'#ffffff', marginRight: '1rem'}}/>Lansing, MI</p>
            </div>
            <div className='phone'>
            <p> <FaPhone size={20} style={{color:'#ffffff', marginRight: '1rem'}}/> 517-599-3409</p>
            </div>
            <div className='email'> 
                <p> <FaMailBulk size={20} style={{color:'#ffffff', marginRight: '1rem'}}/> abbasi.shahryar@outlook.com</p>
            </div>
            </div>
            <div className='right'>
        <p>Developed By: <a href='https://github.com/ShahryarAbbasi' size={40} style={{color:'rgb(107, 38, 38)', marginBottom: '.5rem'} }>Shahryar Abbasi</a></p>
            </div>
    </div>
    )
    }

    export default Footer;