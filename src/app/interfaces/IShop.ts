import IItems from "./Iitems";

export default interface IShopData {
    id:number,
    title: string,
    routeName: string,
    items: IItems[]
}