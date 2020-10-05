import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as FaAngellist from "react-icons/fa";
import { AiOutlineBarcode } from "react-icons/fa";

export const SidebarData = [
  {
    title: 'My Moves',
    path: '/',
    icon: <i class="fa fa-ambulance fa-2x tect-white"></i>,
    cName: 'nav-text'
  },
  {
    title: 'MY PROFILE',
    path: '/myprofile',
    icon: <i class="fa fa-user fa-2x tect-white"></i>,
    cName: 'nav-text'
  },
  {
    title: 'GET QUOTE',
    path: '/getquote',
    icon:  <i class="fa fa-barcode fa-2x tect-white"></i>,
    cName: 'nav-text'
  },
  {
    title: 'LOGOUT',
    path: '/logout',
    icon: <i class="fa fa-power-off fa-2x tect-white"></i>,
    cName: 'nav-text'
  },


];