import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ButtonLogin } from "./components/ButtonLogin"

import { InputLogin } from "./components/InputLogin"

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(()=>{
        return email.length*1000
    }, [email.length])

    useEffect(() => {
        console.log(email)
    }, [email])

    useEffect(() => {
        console.log(password)
    }, [password])

    const handleEntrar =  useCallback(() => {
        console.log(email)
        console.log(password)
    },[email, password])


    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={()=> inputPasswordRef.current?.focus()} 
                />
                
                <InputLogin
                     label="Senha"
                     type="password"
                     value={password}
                     onChange={newValue => setPassword(newValue)}
                     ref={inputPasswordRef}
                />

                <ButtonLogin type="button" onClick={handleEntrar}>
                    Entrar
                </ButtonLogin>
                <ButtonLogin type="button" onClick={handleEntrar}>
                    Cadastrar-se
                </ButtonLogin>

            </form>
        </div>
    )
}