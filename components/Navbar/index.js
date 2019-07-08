import React, { useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cc from 'classcat';
import css from './navbar.scss';

const Navbar = () => {
    const [isTop, setIsTop ] = useState(false);
    const toggleClass = cc([
        css.nav,
        {
            [css.isScrolled]: isTop
        }
    ]);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const position = window.scrollY > 100;
            if (position !== isTop) {
                setIsTop(position)
            }
        });
    })

    return (
        <nav className={toggleClass}>
            <ul className={css.inner}>
                <li><AnchorLink href="#home">HOME</AnchorLink></li>
                <li><AnchorLink href="#work">MY WORK</AnchorLink></li>
                <li><AnchorLink href="#contact">CONTACT</AnchorLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;