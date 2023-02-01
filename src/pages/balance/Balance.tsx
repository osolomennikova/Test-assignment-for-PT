import React from 'react';
import Bonus from '../../components/Bonus'
import {ReactComponent as InfoIcon} from "../../images/info.svg";

function Balance() {

    return (
        <div className="h-[296px] w-full gradient p-5">
            <div className="h-[74px] flex justify-between items-center">
                <a href="#logo" className="font-normal text-base">ЛОГОТИП</a>
                <a href="#info">
                    <InfoIcon />
                </a>
            </div>
            <div className="flex justify-center">
                <Bonus currentQuantity={1000000} forBurningQuantity={123000} dateBurning={"2024-02-27T18:18:00"}/>
            </div>
        </div>
    );
}

export default Balance;
