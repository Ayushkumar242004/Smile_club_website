import { React, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonial } from '../constants/Testimonial.jsx';

export default function Testimonial() {

	const [view,setView] = useState(0);

	const handleNext = () => {
		setView(view + 1);
		if (view === testimonial.length - 2) {
			setView(0);
		}
	};

	const handlePrev = () => {
		setView(view - 1);
		if (view === 0) {
			setView(testimonial.length - 2);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 3000);
	
		return () => clearInterval(interval);
	}, [handleNext]);

	return (
		<div>

			{/* Header */}
			<div className="text-center mb-16">
				<div className="flex items-center justify-center gap-4 mb-4">
					<span className="text-[#7E4555] text-2xl">ॐ</span>
					<h2 className="text-[#7E4555] text-3xl font-bold tracking-wide">TESTIMONIALS</h2>
					<span className="text-[#7E4555] text-2xl">ॐ</span>
				</div>
				<div className="text-[#DB4242] text-5xl font-bold">
					What Our
					<br />
					Congregation Say
				</div>
			</div>

			{/* Individual testimonial card */}
			<div className='flex flex-nowrap w-[80%] transform-flat scrollbar-hidden overflow-hidden mx-[10%] '>
				{testimonial.map((item) => (
					<div key={item.id}
					style={{transform: `translateX(-${view * 108.69}%)`}}
					className={`shadow-[#a1a1a1] min-w-[92%] lg:min-w-[46%] rounded-lg shadow-md transform duration-500 ease-out flex flex-row p-6 mx-[4%] lg:mx-[2%] my-8`}>
						<div className="basis-1/3 justify-items-center rounded-full">
							<img
							src={item.image}
							alt={item.name}
							className=" object-center max-h-[280px] rounded-lg"
							/>
						</div>
						<div className="flex flex-col basis-2/3 p-6">
						<div className="text-[#E47474] text-sm lg:text-lg font-bold ">{item.quote}</div>
							<div className='border border-[#a5a5a5] opacity-40 mt-10 mb-5'></div>
							<div className="text-[#DB4242] text-lg lg:text-2xl font-bold p-2">{item.name}</div>
							<div className="text-[#767E88] text-sm lg:text-lg font-bold pl-3">{item.role}</div>
						</div>
					</div>
				))}
			</div>
			
			{/* Buttons */}
			<div className='flex justify-center'>
				<div className='rounded-full bg-[#e6e6e6] '>
					<button onClick={handlePrev} className='bg-[#f7f7f7] rounded-full justify-items-center size-16 m-3'>
					<ChevronLeft color='#777777' className='' />
					</button>
					<button onClick={handleNext} className='bg-[#f7f7f7] rounded-full size-16 justify-items-center m-3 '>
					<ChevronRight color='#777777' className='' />
					</button>
				</div>
			</div>
		</div>
	)
}