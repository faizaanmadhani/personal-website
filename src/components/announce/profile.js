import React from 'react';
import logo from "../../logo.svg"
import { Image, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
  .main {
    margin: 1% 10.5% 0% 10.5%;
    text-align: left;
  }
`

const HeaderText = styled.div`
margin-top: 30%
text-align: left;
`

const Profile = () => {
    return (
      <React.Fragment>
      <Container>
        <Row className="main">
          <Col xs={12} sm={12} md={6}>
            <HeaderText>
              <h1>Faizaan Madhani</h1>
            </HeaderText>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <HeaderText>
              <h1>Image</h1>
            </HeaderText>
          </Col>

        </Row>
        
      </Container>
      </React.Fragment>
    )
}

export default Profile