import {useContext} from "react"
import { ThemeContext } from "../context/theme";

export default function BodyMediumRegular (props) {

    const {
        children,
        ...restProps
    } = props

    const theme = useContext(ThemeContext)

    return (
        <p className="body-medium-regular" {...restProps} style={theme ? {color: "black"} : {}} >
            {children}
        </p>
    )
}