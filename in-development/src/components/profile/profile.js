import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'
import "./profile.css"


const Profile = (props) => {
    return (
      <div className="container-profile">
        <div>
          Image
        </div>
        <div className="profile_text">
          Profile Summary
        </div>
      </div>
    )
}

export default Profile