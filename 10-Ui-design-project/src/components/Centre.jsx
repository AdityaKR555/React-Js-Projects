import Left from "./Left.jsx";
import Right from "./Right.jsx";

export default function Centre(){
    return(
        <div className="w-full h-screen flex py-8 px-15 gap-7">
            <Left />
            <Right />
        </div>
    );
}