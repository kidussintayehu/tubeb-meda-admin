import styled from "styled-components"

const Message = styled.h1`
    justify-content = center;
    color : red;
    margin : 0 20vw 0 0;
    font-size : 35px

`



const ErrorMessage = ( ) => {
    return (
        <Message>
            something is  wrong 
        </Message>
    )

}
export default ErrorMessage