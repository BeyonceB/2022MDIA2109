import styled from "styled-components";

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl}
font-size:50px;
color:white;
`;

export default function ImgCard({
    img="/dog.jpeg", 
    imgs="doggy.jpeg",
    bg="red",
    tcl="#FFF",
    children=null
}){
   
    return <RedCont cl={bg} text_cl={tcl}>
        {children}
        <img src={img} />
        <imgs src={imgs} />
        <h1>This is a cat</h1>
    </RedCont>
}