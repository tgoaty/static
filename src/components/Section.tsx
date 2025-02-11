import Card from "./Card.tsx";

const Section = () => {
    return (
        <div>
            <h3 className="text-neutral-400 text-2xl border-b-1">Title</h3>
            <div className="flex flex-wrap justify-between pt-14 pb-6">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default Section;