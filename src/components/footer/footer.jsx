import React from 'react'
import InfiniteLooper from './infiniteLooper'
import "./infiniteLooper.css";



function Footer() {
    const [memberName, setMemberName] = React.useState(null);
    const [onHover, setHover] = React.useState(false);

    const getMemberName = (e) => {
        if (e) {
            setHover(true);
        }
        else {
            setHover(false);
        }
        setMemberName(e);
    };
    return (
        <div className='h-fit flex flex-col gap-1 bottom-0 bg-[#101010] text-white items-center pt-5 pb-5'>
            <div className='flex justify-start'>
                <h1 className='font-bold text-4xl width pt-10 text-start pb-10'>Contact Us</h1>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <div className='w-1/2 h-[100px] flex justify-center items-center'>
                    <img src="./nmitLogo.png" alt="nmit" />
                </div>
                <div className='scale-50 w-1/2 flex justify-center items-center h-[200px]'>
                    <img src="hacksLogo2.png" alt="nmit hacks" />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='flex  justify-center items-center'>You can visit us 😊</div>
                <div className='flex gap-5'>
                    <div className='socialIcons border-2 border-white p-3'>
                        <a href="">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div className='socialIcons border-2 border-white p-3'>
                        <a href="">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <div className='socialIcons border-2 border-white p-3'>
                        <a href="">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className='socialIcons border-2 border-white p-3'>
                        <a href="">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className='text-white rounded-full border px-10 py-5 font-bold text-xl border-1 border-white'>
                    <a href="https://devfolio.co/code-of-conduct">
                        <button>Code of Conduct</button>
                    </a>
                </div>
                <div className='text-white flex xl:flex-row lg:flex-row md:flex-row flex-col'>
                    <p className='text-center'>You can Email us at:</p>
                    <a href="mailto: hackathon@nmit.ac.in" className='px-2 font-bold'>
                        hackathon@nmit.ac.in
                    </a>
                </div>
                <div className='text-center'>
                    Made with ❤️ by NMIT HACKS.
                </div>
            </div>
            <div className='text-3xl font-bold'>Team</div>
            <div className='text-2xl font-bold h-10'>{memberName}</div>
            <div className='looperContainer w-[70%] mx-auto h-[80px]'>
                <InfiniteLooper memberName={memberName} onHover={onHover} getMemberName={getMemberName} />
            </div>
        </div>
    )
}

export default Footer;