export const generatePass = () =>{
    let password: string = ''
    let charcters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+='
    let passwordLenght:number = 8
    for(let i = 0; i <= passwordLenght; i++){
        password += charcters.charAt(Math.floor(Math.random() * charcters.length))
    }
    return password
}
