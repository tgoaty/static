const Card = () => {
    return (
        <div className="
        rounded-xl p-8 w-134 h-42 bg-gradient-to-r from-neutral-900 to-neutral-800
        hover:scale-106 transition transform duration-300
        ">
            <h2 className="text-white text-3xl">Название</h2>
            <p className="text-neutral-400 text-xl"> 20-01-2025</p>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <button className="
            rounded-lg w-full h-10 bg-[#6200ee] text-xl text-white my-4 cursor-pointer
            hover:bg-[#3700b3] transition duration-300
            ">Перейти к статье</button>
        </div>
    );
};

export default Card;