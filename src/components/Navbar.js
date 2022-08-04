import React, { useState, useEffect } from 'react';
import NextflixLoGo from '../../src/assets/image/netflix.png'
import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'
import { searchMovie } from './Store/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [keyword, setKeyword] = useState('');
    const handleScrollY = () => {
        const scrollY = window.screenY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeyword(keywords);
        (keywords.length > 0) ? navigate(`/search?keywords=${keywords.trim()}`) : navigate('/')
        dispatch(searchMovie(keywords))
    }

    const goHome = () => {
        navigate('/');
        setKeyword('');
    }

    useEffect(() => {
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY)
        }
    }, [])
    return (
        <Navigation style={scrollY < 1 ? { backgroundColor: 'blue' } : { backgroundColor: 'red' }}>
            <div className='
            navContainer'>
                <div className='logo'>
                    <img src={NextflixLoGo} alt="img" onClick={goHome} />
                </div>
                <div className='navSearch'>
                    <MdSearch className='iconSearch' />
                    <input type="text" placeholder='search' onChange={(e) => handleChangeInput(e)} value={keyword} />
                </div>
            </div>
        </Navigation>
    );
}

export default Navbar;

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 2;
    .navContainer {
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        height: 100%;
        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        .logo {
            width: 120px;
            cursor: pointer;
            img {
                width: 100%
            }
        }


        .navSearch {
            color: white;
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;
            &:hover .iconSearch {
                color: white;
            }
            .iconSearch {
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb;
            }
            input {
                font-size: 14px;
                border: 1px solid #fff;
                color: white;
                outline: none;
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                background: #222;
                transition:  width 0.5s;
                &:focus {
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        }
    }

`
