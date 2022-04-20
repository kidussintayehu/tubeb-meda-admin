import styled from "styled-components"


const Message = styled.h1`
    justify-content = center;
    color : green;
    margin : 0 20vw 0 0;
    font-size : 35px

`



const SuccessMessage = ( ) => {
    return (
        <Message>
            your product has been posted.
        </Message>
    )

}
export default SuccessMessage