// eslint-disable-next-line react/prop-types
const PageHeader = ({ pageName }) => {
    return (
        <div className='bg-[#EDF1F3]'>
            <div className='max-w-screen-xl mx-auto px-3 md:px-0'>
                <div className='text-center py-5 md:py-10'>
                    <h3 className=' text-4xl md:text-6xl uppercase pb-2'>{pageName}</h3>
                    <p>Home {">"} <span className='text-[#72AEC8]'>{pageName}</span></p>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
