import { Progress } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const formatDateTime = ({ isoDate }) => {
	const date = new Date(isoDate);
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	};
	return date.toLocaleString("en-US", options).replace(" at ", " ");
};

const Timer = (endDate) => {
	const [timeLeft, setTimeLeft] = useState({});

	const deadline = endDate ? formatDateTime(endDate) : null;

	const calculateTimeLeft = () => {
		if (!deadline) return {};

		const difference = new Date(deadline) - new Date();

		if (difference <= 0) return {}; // Time's up

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	};

	useEffect(() => {
		if (!deadline) return; // No deadline to count down to

		const updateTimer = () => setTimeLeft(calculateTimeLeft());
		updateTimer(); // Set initial time left

		const timer = setInterval(updateTimer, 1000);

		return () => clearInterval(timer);
	}, [deadline]);

	// if (!Object.keys(timeLeft).length) {
	// 	return <div className="text-center text-white">Time's up!</div>;
	// }

	const totalSeconds =
		timeLeft.days * 24 * 60 * 60 +
		timeLeft.hours * 60 * 60 +
		timeLeft.minutes * 60 +
		timeLeft.seconds;

	const progressWidth =
		Math.floor((totalSeconds / (totalSeconds + 1)) * 100) || 0; // Prevent division by zero

	return (
		<div className="flex flex-col items-center p-4 bg-primary-400 rounded-lg">
			<div className="flex justify-center space-x-4">
				{["days", "hours", "minutes", "seconds"].map((unit) => (
					<div key={unit} className="text-center text-white">
						<div className="text-4xl font-bold">
							{String(timeLeft[unit]).padStart(2, "0")}
						</div>
						<div className="text-lg capitalize">{unit}</div>
					</div>
				))}
			</div>
			<div className="w-full mt-4">
				{/* <div className="relative h-2 bg-green-200 rounded">
					<div
						className="absolute h-2 bg-white rounded"
						style={{ width: `${progressWidth}%` }}
					/>
				</div> */}
				<Progress value={progressWidth} color="green" />
			</div>
		</div>
	);
};

export default Timer;
