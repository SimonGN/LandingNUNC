import styled from 'styled-components';


const Fonth2 = styled.h2`
    font-family: "KareliaWeb-Regular";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1.9rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 2.8rem;
        line-height: 3.2rem;
  
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin-bottom: 2rem;
        line-height: 2.6rem;
    }

`;

export default Fonth2;
