import React from "react";
import { useTheme } from "../store/theme";
import type { ReactNode } from "react";


interface IBodyMediumRegularProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
}

export default function BodyMediumRegular (props:IBodyMediumRegularProps ) {

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