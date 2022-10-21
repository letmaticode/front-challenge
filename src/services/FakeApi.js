const users = [
    {
        name: 'rafam',
        email: 'rafamtest@gmail.com',
        clave: 'rafam1'
    }
]

export const fetchApiLogin = (email, clave) => {
    return new Promise((resolve, reject) => {
        const userExists = users.find(user => user.email.toString() === email && user.clave.toString() === clave)
        if (userExists) {
            resolve({
                ok: true,
                access_token: 'jc1n2308',
                expires_in: null
            })
        } reject({
            status: 'El usuario no existe o la contraseña es incorrecta'
        })
    })
}

export const fetchApiAuth = () => {
    return new Promise((resolve, reject) => {
        resolve({
            ok: true,
            habilitado: true,
            id: 1,
            email: 'matias@gmail.com',
            name: 'matias',
        })
        reject({
            status: 'Error'
        })
    })
}




