import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import '../../assets/styles.css';

export default { title: 'Header' };

export function Header() {
    return (
        // <animated.div style={props}>i will fade</animated.div>
        <div className='header'>
            <ul>
                <li><button> Projects </button></li>
                <li><button> Contact </button> </li>
                <li><button> About </button> </li>
            </ul>
        </div>
    );
};

export function Spring() {
    const props = useSpring({ from: {opacity:0, color: 'red'},
    to: [
      { opacity: 0, color: '#ffaaee' },
      { opacity: 1, color: 'red' },
      { opacity: 0, color: '#008000' },
      { opacity: 1, color: 'black' }
    ]});
    return (
        <animated.h1 style={props}>i will fade</animated.h1>
    )
  }