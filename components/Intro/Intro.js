import React from "react";
import { IntroStyle } from "./IntroStyle";

import logoNunc from "../../static/svg/Logo.svg";
import AppStore from "../../static/svg/IconAppstore.svg"
import Googleplay from "../../static/svg/IconGooleplay.png"

import PageTitle from "../../styles/pagesStyles/h1";

const Intro = props => {
    return (
        
        <IntroStyle>
            <img className="logoNUNC" src={logoNunc}></img>
            <div className="homeBack">
                <div>
                    <PageTitle color="white">Cumple con las obligaciones de marcaje sin que nada cambie en tu empresa.</PageTitle>
                </div>
                <div>
                    <img src={AppStore}></img>
                    <img src={Googleplay}></img>
                </div>
                <img src="../../static/img/iphoneIntro.png"></img>
            </div>
        </IntroStyle>
    )
}

export default Intro;
