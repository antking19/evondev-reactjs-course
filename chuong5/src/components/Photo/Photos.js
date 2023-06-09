import axios from "axios";
import { useEffect, useState } from "react";
// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100

const getRandomPhoto = async (page) => {
    try {
        const response = await axios.get(
            `https://picsum.photos/v2/list?page=${page}&limit=8`
        );
        // handle success
        console.log(response.data);
        return response.data;
    } catch (error) {
        // handle error
        console.log(error);
    }
};

const Photos = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [nextPage, setNextPage] = useState(1);

    const handleLoadMorePhoto = () => {
        getRandomPhoto(nextPage).then((images) => {
            const newPhoto = [...randomPhoto, ...images];
            setRandomPhoto(newPhoto);
            setNextPage(nextPage + 1);
        });
    };

    useEffect(() => {
        handleLoadMorePhoto();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-4 gap-5 p-5">
                {randomPhoto.length > 0 &&
                    randomPhoto.map((item, index) => (
                        <div
                            key={index}
                            className="p-3 object-cover bg-white shadow-md rounded-lg"
                        >
                            <img
                                src={item.download_url}
                                alt={item.author}
                                className="w-full h-[200px] object-cover rounded-lg"
                            />
                        </div>
                    ))}
            </div>
            <div className="text-center">
                <button
                    onClick={handleLoadMorePhoto}
                    className="inline-block px-10 py-5 bg-purple-600 text-white"
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Photos;
