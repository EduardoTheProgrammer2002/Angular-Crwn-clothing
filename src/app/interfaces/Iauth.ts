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

export interface IToken {
    accessToken: string,
    refreshToken: string
}

export default Iuser;