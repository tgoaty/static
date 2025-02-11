import Section from "./components/Section.tsx";

const App = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="my-10">
                <h1 className="text-white text-5xl">Articles</h1>
                <h3 className="text-neutral-300 text-3xl italic tracking-wide">on Static</h3>
            </div>
            <div className="w-screen px-32">
                <Section/>
            </div>
        </div>
    );
};

export default App;