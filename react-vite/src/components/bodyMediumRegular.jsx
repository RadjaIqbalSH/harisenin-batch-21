import { useTheme } from "../store/theme";

export default function BodyMediumRegular (props) {

    const {
        children,
        ...restProps
    } = props

    // const theme = useContext(ThemeContext)

    const themeStore = useTheme()

    return (
        <p className="body-medium-regular" {...restProps} style={themeStore.theme ? {color: "black"} : {}} >
            {children}
        </p>
    )
}