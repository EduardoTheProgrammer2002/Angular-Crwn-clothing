interface Iuser {
    name?:string,
    email: string,
    password: string,
    confirmPassword?:string
}
export interface IAuthUser {
    id: number,
    name: string,
    email: string
}

export default Iuser;