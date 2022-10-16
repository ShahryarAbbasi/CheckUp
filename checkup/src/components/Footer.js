import {FaFacebook, FaLinkedin, 
    FaMailBulk, FaPhone, FaSearchLocation, 
    FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer(props) {
    return (
    <div className='footer'>
    <div className='footer-container'>
    <div className='left'>
        <div className='location'>
        <FaSearchLocation size={30} style={{color:'#ffffff', marginRight: '1rem'}}/>
            <div>
            <h4>Lansing, MI</h4>
            </div>
            </div>
            <div className='phone'>
            <h4> <FaPhone size={20} style={{color:'#ffffff', marginRight: '1rem'}}/> 517-599-3409</h4>
            </div>
            <div className='email'> 
                <h4> <FaMailBulk size={20} style={{color:'#ffffff', marginRight: '1rem'}}/> abbasi.shahryar@outlook.com</h4>
            </div>
            </div>
            <div className='right'>
        <h4>Developed By:</h4>
        <a href='https://github.com/ShahryarAbbasi' size={40} style={{color:'rgb(107, 38, 38)', marginBottom: '.5rem'} }>Shahryar Abbasi</a>
        <div className='social'>
            <FaLinkedin size={30} style={{color:'#ffffff', marginRight: '2rem'}} />
        </div>
            </div>
        </div>
    </div>
    )
    }

    export default Footer;