const Subscribe = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto px-3 md:px-0 py-10'>
                <div className="bg-[#272727] text-white p-5 md:p-20 md:flex items-center justify-between">
                    <div className="md:w-1/2 text-center md:text-start">
                        <h4 className="uppercase text-xl">Subscribe us now</h4>
                        <p className="text-sm">Get Latest news, updates and deals directly mailed to your inbox.</p>
                    </div>
                    <div className="md:w-1/2 mt-5 md:mt-0">
                        <div className="flex">
                            <input className="w-full outline-none p-1 md:p-3 text-black" type="text" />
                            <button className="bg-[#72AEC8] uppercase px-4">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;