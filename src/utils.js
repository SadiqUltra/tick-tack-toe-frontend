export const getSessionKey = () => {
    if(localStorage.getItem('SESSION_KEY')){
        return localStorage.getItem('SESSION_KEY')
    }else{
        return resetSessionKey()
    }
}

export const resetSessionKey = () => {
    const key = Math.random().toString(36).substring(2)
    localStorage.setItem('SESSION_KEY', key)

    return key
}