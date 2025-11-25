import RightCard from "./RightCard";

export default function Right(){

    const arr = [{
        img: "https://i.pinimg.com/736x/ce/e1/1a/cee11a1ad91841c70fbe067064df6f2e.jpg",
        tag: "Satisfied",
        color: "green"
    },{
        img: "https://i.pinimg.com/736x/c6/c0/09/c6c009b31ed165171c61a1964a7089bd.jpg",
        tag: "Neutral",
        color: "royalBlue"
    },{
        img: "https://i.pinimg.com/736x/34/da/e2/34dae2b1c9a2c38bfdc18bbb5a414149.jpg",
        tag: "Unsatisfied",
        color: "red"
    },{
        img: "https://i.pinimg.com/736x/ad/65/97/ad659744154832910cf4ade8901c23ab.jpg",
        tag: "Satisfied",
        color: "green"
    },{
        img: "https://i.pinimg.com/1200x/d5/9c/7e/d59c7ee94b1e1a8337fe73f61d782bfa.jpg",
        tag: "Neutral",
        color: "royalBlue"
    }];

    return(
        <div className="w-2/3 flex items-center gap-5 px-5 flex-nowrap overflow-x-auto no-scrollbar">
            {arr.map((item, index) => (
                <RightCard key={index} num={index} img={item.img} tag={item.tag} color={item.color}/>
            ))}
        </div>
    );
}