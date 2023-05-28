const CardTailwind = (props) => {
    const cardAmount = `card-amount text-lg font-bold text-transparent bg-clip-text ${
        props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
    }`;

    return (
        <div className="relative">
            <div className="card-image block w-full rounded-lg h-[400px]">
                <img
                    src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                    className="block w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="card-content absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
                <div className="card-top flex justify-between items-center mb-8">
                    <div className="card-user flex items-center gap-x-3">
                        <img
                            className="user-avatar w-8 h-8 rounded-full object-cover flex-shrink-0"
                            src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                        />
                        <span className="font-light text-base text-[#333]">
                            @zndrson
                        </span>
                    </div>
                    <div className="card-meta flex items-center gap-x-3">
                        <img src="/icon-heart.svg" alt="" />
                        <span>256</span>
                    </div>
                </div>
                <div className="card-footer flex justify-between items-center">
                    <div
                        className={`card-title text-lg font-medium ${
                            props.fontSize || "text-lg"
                        }`}
                    >
                        Cosmic Perspective
                    </div>
                    <div className={cardAmount}>12,000 PSL</div>
                </div>
            </div>
        </div>
    );
};

export default CardTailwind;
