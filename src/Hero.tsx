import hero from './assets/banner-stack.png'
const Hero = () => {
    return (
            
            <div className="-mt-[20px] md:mt-[50px] container mx-auto">
                <div className="flex flex-col justify-center items-center text-center md:flex-row md:items-start md:text-left md:justify-between container mx-auto min-h-[360px] px-2">
                <div className='mt-20'>
                    <h1 className='font-bold text-[60px] leading-[1.05] tracking-tight'>
                        <span className='block text-[#111827]'>Build your ideal</span>
                        <span className='block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
                    </h1>
                    <p className='mt-5 max-w-[510px] text-[18px] leading-[1.7] text-[#64748b]'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className='flex justify-center md:flex gap-2 mt-7'>
                        <button className='w-[170px] h=[40px] rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] text-[14px] font-medium text-white'>
                            Explore Technologies
                        </button>
                        <button className='w-[170px] h-[50px] rounded-md border border-[#e2e8f0] bg-white text-[14px] font-medium text-[#475569]'>
                            Learn More

                        </button>
                    </div>

                </div>

                <div className='flex justify-center'>
                    <img src={hero} alt="" className='object-contain'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;