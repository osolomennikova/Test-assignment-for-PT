export interface IBalanceResponse {
    resultOperation: {
        status: number,
        message: string,
        messageDev: null | string
        codeResult: number,
        duration: number,
        idLog: string
    },
    data: {
        typeBonusName: string,
        currentQuantity: number,
        forBurningQuantity: number,
        dateBurning: string
    }
}

export interface ITokenResponse {
    result: {
        status: number;
        message: string;
        messageDev: null | string;
        codeResult: number;
        duration: number;
        idLog: string;
    },
    accessToken: string;
}
