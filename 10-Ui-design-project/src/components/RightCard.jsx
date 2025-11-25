function RightCard({num, img, tag, color}) {
    return(
         <div className="h-[90%] w-[35%] rounded-4xl relative overflow-hidden shrink-0">
                {/* <img src="https://i.pinimg.com/736x/ce/e1/1a/cee11a1ad91841c70fbe067064df6f2e.jpg" className="w-full h-full object-cover" /> */}
                <img src={img} className="w-full h-full object-cover" />
                <div className="w-full h-full absolute left-0 top-0 rounded-4xl flex flex-col justify-between p-8">
                <div className="bg-white text-black rounded-full w-13 h-13 text-center content-center font-bold text-2xl">{num+1}</div>
                <div>
                    <p className="text-white text-xl text-shadow-blue-900 text-shadow-2xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe maiores adipisci dolor tempora harum!</p>
                    <button style={{backgroundColor:color}} className="rounded-4xl w-full flex justify-between p-3 mt-7 text-white font-bold items-center">
                        <p>{tag}</p>
                        <i class="ri-arrow-right-line text-2xl"></i>
                    </button>
                </div>
                </div>

        </div>
    );
}

export default RightCard;