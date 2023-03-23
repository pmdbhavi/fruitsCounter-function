import {useState} from 'react'

import {Maincontainer,Con,Con1,Contain,Heading,Img,Button,Span} from './styledComponents'

const App=()=>{
  const [mangoCount,setMangoCount]=useState(0);
  const [bananaCount,setBananaCount]=useState(0);

  const onClickMango=()=>{
    setMangoCount(prevState=>(prevState+1))
  }

  const onClickBanana=()=>{
    setBananaCount(prevState=>(prevState+1))
  }

  return(
    <Maincontainer>
      <Con>
        <Heading>Bob ate <Span>{mangoCount}</Span> mangoes <Span>{bananaCount}</Span> bananas</Heading>
        <Contain>
          <Con1>
            <Img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"/>
            <Button onClick={onClickMango}>Eat Mango</Button>
          </Con1>
          <Con1>
            <Img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"/>
            <Button onClick={onClickBanana}>Eat Banana</Button>
          </Con1>
        </Contain>
      </Con>
    </Maincontainer>
  )
}

export default App;
