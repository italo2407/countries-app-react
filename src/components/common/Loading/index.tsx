import React from 'react';
import loader from "../../../assets/img/loading.gif"
import Container from '../Container';

const Loading = () => {
    return(
        <Container>
            <img className="mx-auto" src={loader} alt="Loading"/>
        </Container>
    )
}

export default Loading;