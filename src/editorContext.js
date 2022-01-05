import React from "react"

const defaultContext = {
    markedText:"",
    setMarkedText: ()=>{}
}

export default React.createContext(defaultContext)