import React from 'react'
import "./hero.css"
import Logo from './Playstation_Img/logo.png'
import Menu from './Playstation_Img/menu.png'
import Arrow from './Playstation_Img/arrow.png'
import Add from './Playstation_Img/add.png'
import Controller from './Playstation_Img/controller.png'
import Fb from './Playstation_Img/fb.png'
import Ig from './Playstation_Img/ig.png'
import Tw from './Playstation_Img/tw.png'
export default function Hero({variant}) {
    return (
      <div className={`hero ${variant}`}>
        <div class="navbar">
        <img src={Logo} class="logo" />
        <nav>
          <ul id="menuList">
            <li><a href="https://google.com">Game Controllers?</a></li>
            <li><a href="https://google.com">VR Accessories</a></li>
            <li><a href="https://google.com">Media Reomotes</a></li>
            <li><a href="https://google.com">Others</a></li>
          </ul>
        </nav>
        <img
          src={Menu}
          alt=""
          class="menu-icon"
          onclick="togglemenu()"
        />
      </div>
      <div class="row">
        <div class="col-1">
          <h2>PS4 V2<br />DualShock 4</h2>
          <h3>Wireless Controller for Playston</h3>
          <p>Compacticle Generic</p>
          <h4>$32.50</h4>
          <button type="button">
            Buy Now
            <img src={Arrow} alt="" />
          </button>
        </div>
        <div class="col-2">
          <img src={Controller} class="controller" />
          <div class="color-box"></div>
          <div class="add-btn">
            <img src={Add} />
            <p><small>Add to cart</small></p>
          </div>
        </div>
      </div>
      <div class="social-links">
        <img src={Fb} />
        <img src={Tw} />
        <img src={Ig} />
      </div>
    </div>
    
    )
  }
  
 
