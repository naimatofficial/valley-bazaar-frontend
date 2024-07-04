import { useState, useEffect } from "react";
import Loader from "../Loader";

const Timer = () => {
	const [timeLeft, setTimeLeft] = useState({});
	const deadline = "December 31, 2024 23:59:59";

	const calculateTimeLeft = () => {
		const difference = +new Date(deadline) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	if (!timeLeft) {
		return <Loader />;
	}

	return (
		<div className="flex flex-col items-center p-4 bg-primary-400 rounded-lg">
			<div className="flex justify-center space-x-4">
				{["days", "hours", "minutes", "seconds"].map((unit) => (
					<div key={unit} className="text-center text-white">
						<div className="text-4xl font-bold">
							{String(timeLeft[unit]).padStart(2, "0")}
						</div>
						<div className="text-lg">
							{unit.charAt(0).toUpperCase() + unit.slice(1)}
						</div>
					</div>
				))}
			</div>
			<div className="w-full mt-4">
				<div className="relative h-2 bg-green-100 rounded">
					<div
						className="absolute h-2 bg-white rounded"
						style={{
							width: `${
								(100 *
									((timeLeft.days * 24 * 60 * 60 +
										timeLeft.hours * 60 * 60 +
										timeLeft.minutes * 60 +
										timeLeft.seconds) /
										(calculateTimeLeft().days * 24 * 60 * 60 +
											calculateTimeLeft().hours * 60 * 60 +
											calculateTimeLeft().minutes * 60 +
											calculateTimeLeft().seconds))) %
								100
							}%`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Timer;
