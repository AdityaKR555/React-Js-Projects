import Left from "./Left.jsx";
import Right from "./Right.jsx";

export default function Centre(){
    return(
        <div className="w-full h-screen overflow-y-hidden flex py-8 px-14 gap-7">
            <Left />
            <Right />
        </div>
    );
}