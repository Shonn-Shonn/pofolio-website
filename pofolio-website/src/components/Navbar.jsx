import React from 'react'
import '../css/navbar.css';
import 'boxicons';

export default function Navbar() {

  return (
    <header className='header'>
        <a href='#' className='logo'>Awint</a>

        <input type='checkbox' id='check'/>
        <label for="check" className="icons">
        <img id='open-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAIlJREFUWEftlbEKgDAMRO1USn/anxZx0kW36gOPQgLX9UhIXy5JWYK9EqyexQVRR0zIhIgA6Xk8tB37Sb9R9F7bEMYrIRd0487jIcUfSqwJEb2vKVspWNF7bcP8HvuH6p/FGKtlij+UWI890ctDyNeern04QmS+WXoeU88iQHlNyISIAOn2EBG6AN2vKCVpTdt+AAAAAElFTkSuQmCC"/>
        <img id='close-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAglJREFUWEftls9qFEEQxr/adWa6Z9ZHESIkFy96WQ14VQ9KIHgJiDnkKAiBgOAxB28Kwgr+uehBlAQ8JF70GcTHGKc7PZJPBnbX2bime3YFV5k5TlVX/fqr6uoWLNgnC8aDFshXkVahViGfAj77v91DpjQXdaQPfbsc2UmeMd/NShqln0LXBCuUO7MmxIAiu71YbfkSkOwWzrwGZPX4GFfOan3gW1PZg4Byay+LcK/m/yBL9P3fJahgvjn7XIAbQ5+8SzmvlPrqgwoCIqkLZz8AuFALuJ0leudkApKdwh29AnhtXDrgZRarmyLCPwJUBamgTGnfk7g0CirkVqrS3VrPdIyzAwK3aokHaazWQ2CCS1ZLmJjS7k2DIinG2WcTMMTjNFEboTCNgYZKqcLZNwBWxypQ7gI8B8HG+J/wURanm74SnbQH9dCUPomK0r4D0Z+acEaYmRSqlS8aKnV1AmoOmP8HiOTilIxkUpT27UT/iNwBuQzg9s9Gb37CGpesgjnt2BfOPpmAAhrNoEZAgYPx11nUECro2JPsFc7u168OAvd6iX74V66O3Nq+CCug0QZ2skRvn3a5Fu7oBcDrQx/TpSwppb74BmWQQlWQ3Jl1IZ7O8vzodNDXkf7og2nUQ5XzTA+00iyncfo5BKYxUGjQefyCSzZPkiZrWyCfWq1CrUI+BXz2heuhHwuQFjTwwa84AAAAAElFTkSuQmCC"/>
        </label>

        <nav className='navbar'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Gallery</a>
          <a href='#'>Services</a>
          <a href='#'>Contact</a>
        </nav>
    </header>
  )
}
