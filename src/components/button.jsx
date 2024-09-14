export function ButtonLogIn({name, color}){
    const divStyle = {
        backgroundColor: color,
        width: '100px',
        height: '100px',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <>
            <div style={divStyle}>
                <span>{name}</span>
            </div>
        </>
    )
}