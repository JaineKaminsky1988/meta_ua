import React, {Component} from 'react';

import Icons from "./Icons";

class MenuLink extends Component{
    constructor(props) {
        super(props);
        this.state={
            menuLinks:[
                {
                    value:"украина",
                    subMenu: true,
                    href:'#'
                },
                {
                    value:"страны",
                    subMenu: true,
                    href:'#'
                },
                {
                    value:"турниры",
                    subMenu: true,
                    href:'#'
                },
                {
                    value:"прогнозы",
                    subMenu: false,
                    href:'#'
                },
                {
                    value:"матч-центр",
                    subMenu: false,
                    href:'#'
                },
                {
                    value:"видео",
                    subMenu: false,
                    href:'#'
                },
                {
                    value:"lifestyle",
                    subMenu: false,
                    href:'#'
                },
                {
                    value:"рейтинги",
                    subMenu: false,
                    href:'#'
                },
                {
                    value:"спорт",
                    subMenu: false,
                    href:'#'
                },
                {
                    value:"тв",
                    subMenu: false,
                    href:'#'
                }
            ]
        }
    }

    render() {
        return(
            this.state.menuLinks.map((link, idx) =>{
                return(
                    <a key={idx} href={link.href}>
                        <span>{link.value}</span>
                        {
                            link.subMenu &&
                                <Icons
                                    id='arrow_bottom'
                                    width='8'
                                    height='5'
                                    color='#fff'
                                />
                        }
                    </a>
                )
            })
        )
    }
}

export default MenuLink;