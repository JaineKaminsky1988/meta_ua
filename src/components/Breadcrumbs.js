import React, {Component, Fragment} from 'react';
import Icons from "./Icons";

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbs:[
                {
                    value: "UA-Футбол",
                    href: "#"
                },
                {
                    value: "Англия. Премьер Лига",
                    href: "#"
                }
            ]
        }
    }

    render() {
        return (
            <div className="breadcrumbs">
                {
                    this.state.breadcrumbs.map((link, idx) =>{
                        return(
                            <Fragment key={idx}>
                                {
                                    idx != 0 &&
                                    <span>
                                        <Icons
                                            id='arrow_right'
                                            width='7'
                                            height='12'
                                            color='#9a9caf'
                                        />
                                        </span>
                            }
                            <a href={link.href}>
                                {link.value}
                            </a>
                            </Fragment>
                        )
                    })
                }
            </div>
        );
    }
}


export default Breadcrumbs;
