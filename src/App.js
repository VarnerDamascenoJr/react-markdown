import React,{useState} from 'react'
import './App.css';
import styled from 'styled-components'
import MarkedInput from './components/MarkedInput';
import Result from './components/Result';
import EditorContext from './editorContext'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`
const EditorContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;  
` 

function App() {
  const [markedText, setMarkedText] = useState("")

  const defaultValue = {
    markedText,
    setMarkedText
  }

  return (
    <EditorContext.Provider  value={ defaultValue }>
      <AppContainer>
      <Title>React Markdown</Title>
      <EditorContent>
        <MarkedInput/>
        <Result/>
      </EditorContent>
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
