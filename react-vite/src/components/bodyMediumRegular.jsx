export default function BodyMediumRegular (props) {

    const {
        children,
        theme,
        ...restProps
    } = props

    return (
        <p className="body-medium-regular" {...restProps} style={theme ? {color: "black"} : {}} >
            {children}
        </p>
    )
}