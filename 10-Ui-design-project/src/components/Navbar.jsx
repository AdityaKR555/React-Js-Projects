export default function Navbar(){
    return(
        <div className="flex py-8 px-15 md:px-25 justify-between items-center">
            <div className="bg-black text-white font-bold rounded-4xl px-5 py-3 tracking-widest hover:bg-gray-900">TARGET AUDIENCE</div>
            <div>
                <ul className="flex gap-7 font-bold">
                    <li>DIGITAL</li>
                    <li>BANKING</li>
                    <li>PLATFORM</li>
                </ul>
            </div>

        </div>
    );
}