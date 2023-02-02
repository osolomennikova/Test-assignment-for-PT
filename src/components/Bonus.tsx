import React from 'react';
import {ReactComponent as FireIcon} from "../images/fire.svg"
import {ReactComponent as NextIcon} from "../images/next_btn.svg"
import formatDate from "../utilites/formatDate";


interface IBonusProps {
    currentQuantity: number;
    forBurningQuantity: number;
    dateBurning: string;
}

function Bonus({ currentQuantity, forBurningQuantity, dateBurning }: IBonusProps) {
    return (
        <div
            className="flex justify-between container h-[105px] max-w-sm rounded-[20px] drop-shadow-[2px_2px_16px_rgba(0,_0,_0,_0.2)] bg-white p-5">
            <div className="flex flex-col justify-between">
                <h1 className="font-bold text-2xl">{currentQuantity.toLocaleString('ru')} бонусов</h1>
                <span className="font-normal text-base text-[#979797]">{formatDate(dateBurning)} сгорит <FireIcon className="inline-block mt-[-5px]"/> {forBurningQuantity.toLocaleString('ru')} бонусов</span>
            </div>
            <div className="flex justify-center">
                <button>
                    <NextIcon/>
                </button>
            </div>
        </div>
    );
}

export default Bonus;
