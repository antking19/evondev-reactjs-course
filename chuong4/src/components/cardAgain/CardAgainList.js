import styled from "styled-components";

const CardListAgain = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px 50px;
    padding: 20px;
`;

const CardAgainList = (props) => {
    return <CardListAgain>{props.children}</CardListAgain>;
};

export default CardAgainList;
