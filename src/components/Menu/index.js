import './menu.css';

import { BsYoutube, BsInstagram, BsFacebook} from 'react-icons/bs';
import {Link} from 'react-router-dom'


export default function Menu() {
    return (
        <div className='menu'>
            <a className='social' target={'_blank'} href='https://youtube.com'>
                <BsYoutube size={24} color='#fff' />
            </a>

            <a className='social' target={'_blank'} href='https://instagram.com'>
                <BsInstagram size={24} color='#fff' />
            </a>

            <a className='social' target={'_blank'} href='https://facebook.com'>
                <BsFacebook size={24} color='#fff' />
            </a>

            <Link className='menu-item' to={"/links"}>
                Meus Links
            </Link>

        </div>
    )
}