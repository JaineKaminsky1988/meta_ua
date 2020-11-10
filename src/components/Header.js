import React, { Component } from 'react';
import Icons from './Icons/Icons'
import MenuLink from "./MenuLink";

import SelectLang from "./SelectLang";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false
		}
		this.toggleActiveClass = this.toggleActiveClass.bind(this);
	}
	
	toggleActiveClass() {
		this.setState(
			{
				collapse: !this.state.collapse
			}
		)
	}
	
	render() {
		return (
			<header className={ this.state.collapse ? "collapse" : "" }>
            <div className="leftSide">
            <button
	            className="collapse_btn"
	            onClick={ this.toggleActiveClass }
            >
                <Icons
	                id="menu"
	                width="18"
	                height="12"
	                color="#fff"
                />
            </button>
                <div className="logo">
                    <Icons
	                    id='h_logo'
	                    width='69'
	                    height='30'
                    />
                </div>
                <nav>
                    <MenuLink />
                    <a
	                    className="moreLinks"
	                    href=""
                    >
                        <Icons
	                        id='ellipsis'
	                        width='16'
	                        height='16'
	                        color='#fff'
                        />
                    </a>
                </nav>
            </div>
            <div className="head_block">
                <a className="search">
                    <Icons
	                    id='search'
	                    width='16'
	                    height='16'
	                    color='#fff'
                    />
                </a>
                <a className="person">
                    <Icons
	                    id='person'
	                    width='16'
	                    height='16'
	                    color='#fff'
                    />
                </a>
                <div className="lang">
                    <SelectLang />
                    <Icons
	                    id="arrow_bottom"
	                    width="8"
	                    height="5"
	                    color="#fff"
                    />
                </div>
            </div>
        </header>
		);
	}
}

export default Header;