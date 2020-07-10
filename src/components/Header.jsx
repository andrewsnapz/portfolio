import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

/* 
 useEffect performs side actions to the functional component:
 serves the same purpose as lifecycle methods: componentDidMount, 
 componentDidUpdate, and componentWillUnmount
 */


export default function Header () {
    return (
    <div className='header'>
        <ul>
            <li><Link to='/' className='nav-link'>Home</Link></li>
            <li><Link to='/projects' className='nav-link'>Projects</Link></li>
            <li><Link to='/contact' className='nav-link'>Contact</Link></li>
        </ul>
    </div>
    );
};

