import React from 'react'
import View from 'react'
import {Box, Container, Grid} from '@material-ui/core'
import image from './faizaan_dad.png'
import cardStyles from './card.module.css'

console.log(image)

function HappyCard(props) {
    return ( 
        <Container style={{textAlign: "center"}}>
                    {/* <Container style={{textAlign: "center"}}>
                        <div text-align="center"><h1>Happy Father's Day!</h1></div>
                        <img src={image}></img>
                    </Container>
                    <Container>
                        <div text-align="left">
                            <p className={cardStyles.card}>
                                Hi Dad, <br></br><br></br>
                                Thanks for supporting me in everything I do, in all the goals I've tried to accomplish and in all the ambitions I have.<br></br><br></br>
                                I wouldn't be where I am without you. <br></br>
                                Without the sacrifices you have made. <br></br>
                                Without everything you've done. <br></br>
                            </p>
                            <p className={cardStyles.card}>
                                I love that I can have conversations with you about interesting, controversial topics.<br></br>
                                That you have an open mind. <br></br>
                                That you're a treasure trove of wisdom. <br></br><br></br>
                                We'll see you soon.
                            </p>
                            <p className={cardStyles.card}>
                                Faizaan
                            </p>
                            
                            </div>
                    </Container> */}
                    <p>Hmmm, how did you get here?</p>
        </Container>
    )
}

export default HappyCard