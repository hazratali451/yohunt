import React, { useEffect, useState } from "react";

const Countdown = ({ countDownDate }) => {
	const [expired, setExpired] = useState(false);
	const [date, setDate] = useState([]);

	useEffect(() => {
		const intervalFunc = setInterval(() => {
			var now = new Date().getTime();

			var distance = countDownDate - now;

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setDate([days, hours, minutes, seconds]);

			if (distance < 0) {
				clearInterval(intervalFunc);
				setExpired(true);
			}
		}, 1000);
		return () => {
			clearInterval(intervalFunc);
		};
	}, [countDownDate]);

	return (
		<>
			{expired ? (
				<h6 className="ms-sm-4 text-white">Oopps! Date Expired</h6>
			) : (
				<ul className="countdown">
					<li>
						<div className="item">
							<h4 className="title text-primary fw-semibold">{date[0]}</h4>
							<p className="text-white">Days</p>
						</div>
					</li>
					<li>
						<div className="item">
							{/* <h4 className="title text-primary fw-semibold">{date[1] + date[0] * 24 || 0}</h4> */}
							<h4 className="title text-primary fw-semibold">{date[1]}</h4>
							<p className="text-white">Hours</p>
						</div>
					</li>
					<li>
						<div className="item">
							{/* <h4 className="title text-primary fw-semibold">{date[2] || 0}</h4> */}
							<h4 className="title text-primary fw-semibold">{date[2]}</h4>
							<p className="text-white">mins</p>
						</div>
					</li>
					<li>
						<div className="item">
							{/* <h4 className="title text-primary fw-semibold">{date[3] || 0}</h4> */}
							<h4 className="title text-primary fw-semibold">{date[3]}</h4>
							<p className="text-white">secs</p>
						</div>
					</li>
				</ul>
			)}
		</>
	);
};

export default Countdown;
