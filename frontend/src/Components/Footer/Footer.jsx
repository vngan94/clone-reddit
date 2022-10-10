import { useState } from 'react';
import './footer.css'
const Footer = (props) => {
    const { isMakingPost, setMakingPost } = props
    const handelOnClink = () => {
        setMakingPost(!isMakingPost)
    }
    return (
        <footer>

            <div className="footer-title" onClick={handelOnClink}>
                {isMakingPost ? 'x' : '+'}
            </div>

        </footer>

    );
}

export default Footer;