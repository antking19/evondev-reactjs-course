import styled, { css } from "styled-components";

const StyledCard = styled.div`
    position: relative;

    .card-image {
        display: block;
        width: 100%;
        height: 400px;
        border-radius: 8px;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: inherit;
            border-radius: inherit;
        }
    }

    .card-content {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 50%);
        background-color: #fff;
        width: calc(100% - 36px);
        z-index: 10;
        border-radius: 20px;
        bottom: 0;
        padding: 20px;

        .card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;

            .card-user {
                display: flex;
                align-items: center;
                column-gap: 12px;

                .user-avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 100rem;
                    object-fit: cover;
                    flex-shrink: 0;
                }
            }

            .card-meta {
                display: flex;
                align-items: center;
                column-gap: 12px;
            }
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .card-title {
                color: ${(props) => props.theme.colors.blue};
                font-size: 18px;
                font-weight: 500;
            }

            .card-amount {
                font-size: ${(props) => props.fontSize || "18px"};
                font-weight: bold;

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
            }
        }
    }
`;

const Card2 = (props) => {
    return (
        <StyledCard secondary={props.secondary}>
            <div className="card-image">
                <img
                    src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                />
            </div>
            <div className="card-content">
                <div className="card-top">
                    <div className="card-user">
                        <img
                            className="user-avatar"
                            src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                        />
                        <span>@zndrson</span>
                    </div>
                    <div className="card-meta">
                        <img src="/icon-heart.svg" alt="" />
                        <span>256</span>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-title">Cosmic Perspective</div>
                    <div className="card-amount" secondary={props.secondary}>
                        12,000 PSL
                    </div>
                </div>
            </div>
        </StyledCard>
    );
};

export default Card2;
