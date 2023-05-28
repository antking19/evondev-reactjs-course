import styled, { css } from "styled-components";

const CardContainer = styled.div`
    position: relative;
    box-sizing: border-box;
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 20px;
    object-fit: cover;
`;

const CardContent = styled.div`
    position: absolute;
    background-color: #fff;
    padding: 20px;
    bottom: 0;
    transform: translate(-50%, 50%);
    left: 50%;
    width: calc(100% - 36px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const CardContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardUser = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const CardUserImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
`;

const CardUserName = styled.span`
    font-size: 16px;
`;

const CardRating = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const CardContentBottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

const CartTitle = styled.div`
    font-weight: 500;
`;

const CardNumber = styled.div`
    font-weight: 700;
    ${(props) =>
        props.secondary &&
        css`
            background: linear-gradient(86.88deg, #20e3b2, #2cccff);
        `}

    ${(props) =>
        !props.secondary &&
        css`
            background: linear-gradient(
                86.88deg,
                #7d6aff 1.38%,
                #ffb86c 64.35%,
                #fc2872 119.91%
            );
        `}

    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

const CardAgain = (props) => {
    return (
        <CardContainer>
            <div className="card-image">
                <CardImg
                    src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                />
            </div>
            <CardContent>
                <CardContentTop>
                    <CardUser>
                        <CardUserImg
                            src="https://cdn.dribbble.com/users/2400293/screenshots/19060197/media/82d672bd58929b313f4805df5e48d586.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                        />
                        <CardUserName>@zndrson</CardUserName>
                    </CardUser>
                    <CardRating>
                        <img src="icon-heart.svg" alt="" />
                        <span>256</span>
                    </CardRating>
                </CardContentTop>
                <CardContentBottom>
                    <CartTitle>Cosmic Perspective</CartTitle>
                    <CardNumber secondary={props.secondary}>
                        12,000 PSL
                    </CardNumber>
                </CardContentBottom>
            </CardContent>
        </CardContainer>
    );
};

export default CardAgain;
