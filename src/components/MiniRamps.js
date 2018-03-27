import React, { Component } from 'react';
import './Main.css';
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap';
import Logo from './../LOGO.png';
import { Redirect } from 'react-router-dom';

class MiniRamps extends Component {

    constructor(){
        super();
        this.state = {
            collapsed: true
        }

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.onRoute = this.onRoute.bind(this);
    }
    
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

      onRoute(ev){
        ev.preventDefault();
        const name = ev.target.title;
        console.log(name);

        this.setState({
            redirect: true,
            to: [name]
        })
    }

  render() {
    return (
        this.state.redirect ? <Redirect to={'/' + this.state.to}/> :
      <div className="Main">
       <Navbar color="faded" light>
            <div onClick={ this.toggleNavbar }>
                {/* <h4  className="duefText">DUEF</h4> */}
                <img src={Logo} className="duef" alt="logo"/>
            </div>
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                    <NavItem>
                        <p onClick={ this.onRoute } title="">Home</p>
                    </NavItem>
                    <NavItem>
                        <p className="firstEle" title="thegame" onClick={ this.onRoute } >The Game</p>
                    </NavItem>
                    <NavItem>
                        <p onClick={ this.onRoute } title="cards">Cards</p>
                    </NavItem>
                    <NavItem>
                        <p onClick={ this.onRoute } title="contact">Contact</p>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        <div className='centered'>
            <h1 className="title">RAMPS</h1>
            <h6 className="du">DO U EVEN FLIP?</h6> 
        </div>
          
      </div>
    );
  }
}

export default MiniRamps;