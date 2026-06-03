function ConditionalIf({ conditional }) {
    if(conditional) {
        return (<>
            <h1>El conditional es: true</h1>
        </>)
    } else {
        return (<>
            <h1>El conditional es: false</h1>
        </>)
    }

}

export default ConditionalIf