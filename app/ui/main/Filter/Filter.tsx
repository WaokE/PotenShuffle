import FilterElem from "./FilterElem";

const sampleFilterElems = ["상태별", "직군별", "취준생", "현업자"];

export default function Filter() {
    return (
        <div className="flex gap-2">
            {sampleFilterElems.map((elem, idx) => (
                <FilterElem key={idx} text={elem} />
            ))}
        </div>
    );
}
