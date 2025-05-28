import { ReactNode } from "react"

interface ThemeButtonPropsType {
    children: ReactNode,
    style?: string,
}

const ThemeButton = ({ children, style }: ThemeButtonPropsType) => {
    return (
        <button className={`${style = 'rounded-full bg-bgPrimary border-2 border-bgLight transform transition-transform duration-300 ease-in-out text-white py-2 px-4 hover:scale-110'}`}>
            {children}
        </button>
    )
}

export default ThemeButton