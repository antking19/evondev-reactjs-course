const YoutubeItem = (props) => {
    return (
        <div className={`youtube-container ${props.className}`}>
            <div className="youtube-image">
                <img src={props.image} alt="" />
            </div>
            <div className="youtube-footer">
                <div className="youtube-avatar">
                    <img src={props.avatar} alt="" />
                </div>
                <div className="youtube-content">
                    <h3 className="youtube-title">
                        {props.title || "This is example title"}
                    </h3>
                    <h4 className="youtube-author">
                        {props.author || "This is example author"}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default YoutubeItem;
