import React from 'react';
import { FaHome, FaStar, FaHotjar } from 'react-icons/fa';
import { GiNinjaHeroicStance, GiRomanToga, GiGhost, GiBandageRoll } from 'react-icons/gi';
import { MdTheaterComedy } from 'react-icons/md'
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
const Menu = (props) => {
    const ScrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <MenuPane>
                <MenuItem name="Netflix" Icon={FaHome} to='netflix' />
                <MenuItem name="Trending" Icon={FaHotjar} to='trending' />
                <MenuItem name="Top rated" Icon={FaStar} to='top' />
                <MenuItem name="Actions Movie" Icon={GiNinjaHeroicStance} to='action' />
                <MenuItem name="Comedy Movie" Icon={MdTheaterComedy} to='comedy' />
                <MenuItem name="Hornor Movie" Icon={GiGhost} to='hornor' />
                <MenuItem name="Romance Movie" Icon={GiRomanToga} to='romance' />

                <GoToTop onClick={() => ScrollToTop()}>
                    <FaArrowAltCircleUp />
                </GoToTop>


            </MenuPane>
        </>
    );
}

export default Menu;
const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255,255,255, 0.4);
    transition: all 0.3 linear;
    &:hover {
        color: rgba(255,255,255,0.8);
        cursor: pointer;
    }
`
const MenuPane = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(220,220,220,0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover {
        width:  180px;
        background: rgba(220,220,220,0.5);
    }
    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;

        }

        span {
           
            font-size: 16px;
            font-weight: 400;
            color: rgba(255 ,255 ,255 ,0.6);
            &:hover {
                color: #fff;
                
            }
        }
    }

`