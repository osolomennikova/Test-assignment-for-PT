import React, {useEffect, useState} from 'react';
import Bonus from '../../components/Bonus'
import {ReactComponent as InfoIcon} from "../../images/info.svg";
import {IBalanceResponse, ITokenResponse} from "./types";
import {ACCESS_KEY, CLIENT_ID, DEVICE_ID} from "config";


function Balance() {

    const [balance, setBalance] = useState<IBalanceResponse | null>(null);

    useEffect(() => {
        fetch('/api/v3/clients/accesstoken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                AccessKey: ACCESS_KEY,
            },
            body: JSON.stringify({
                idClient: CLIENT_ID,
                paramName: "device",
                paramValue: DEVICE_ID,
                latitude: 0,
                longitude: 0,
                sourceQuery: 0
            }),
        })
            .then(res => res.json())
            .then((data: ITokenResponse) => {
                fetch(`/api/v3/ibonus/generalinfo/${data.accessToken}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        AccessKey: ACCESS_KEY,
                    }
                })
                    .then(res => res.json())
                    .then((data: IBalanceResponse) => {
                        setBalance(data);
                    });
            })
    }, [])

    return (
        <div className="h-[296px] w-full gradient p-5">
            <div className="h-[74px] flex justify-between items-center">
                <a href="#logo" className="font-normal text-base">ЛОГОТИП</a>
                <a href="#info">
                    <InfoIcon/>
                </a>
            </div>
            <div className="flex justify-center">
                {balance &&
                    <Bonus currentQuantity={balance.data.currentQuantity}
                           forBurningQuantity={balance.data.forBurningQuantity} dateBurning={balance.data.dateBurning}/>
                }
            </div>
        </div>
    );
}

export default Balance;
