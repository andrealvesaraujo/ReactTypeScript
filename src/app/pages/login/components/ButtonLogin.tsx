import { useUsuarioLogado } from "../../../shared/hooks/UseUsuarioLogado"

interface IButtonLoginProps {
    type?: "button" | "submit" | "reset"
    onClick: () => void
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children }) => {

    const {nomeDoUsuario} = useUsuarioLogado()



    return (
        <button type={type} onClick={onClick}>
          {nomeDoUsuario}  {children}
        </button>
    )
}