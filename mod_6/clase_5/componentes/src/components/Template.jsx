function Template({templateName, children }) {
    switch(templateName) {
        case 'profesional':
            return(
                <>
                    <div style={{border: '2px solid black', padding: '10px', fontFamily: 'Arial, sans-serif'}}>
                        {children}
                    </div>
                </>
            )
        case 'casual':
            return(
                <>
                    <div style={{border: '2px solid black', padding: '10px', fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
                        <p>CASUAL</p>
                        {children}
                        <p>CASUAL</p>
                    </div>
                </>
            )
        default:
            return(
                <>
                    <div style={{border: '2px solid black', padding: '10px', fontFamily: 'Times New Roman, serif'}}>
                        {children}
                    </div>
                </>
            )
        
    }
}

export default Template