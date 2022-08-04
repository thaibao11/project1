import React from 'react';
import { randomColor } from '../../ulti';
import { Link } from 'react-scroll';
const MenuItem = (props) => {
    const { name, Icon, to } = props;
    return (
        <>
            <Link className='subMenu' to={to} spy={true} smooth={true} offset={-70} duration={500} activeClass='active'>
                <Icon className='icon' style={{ color: randomColor(1) }} />
                <span>{name}</span>
            </Link>
        </>
    );
}

export default MenuItem;
