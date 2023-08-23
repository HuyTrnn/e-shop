export const convertVND = function (money : any) {
    if(money) {
        const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
    const formated = new Intl.NumberFormat('vi-VN', config).format(money);
    return formated
    } else return "0d"
}