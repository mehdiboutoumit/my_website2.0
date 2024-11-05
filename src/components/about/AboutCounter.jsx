import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'LinkedIn followers', end: 3000, duration: 5 });
	useCountUp({ ref: 'exp', end: 2, duration: 1 });
	

	

	return (
		<div className="mt-10 sm:mt-10 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="LinkedIn followers"
					counter={<span id="LinkedIn followers" />}
					measurement=""
				/>
				<CounterItem
					title="Years of experience"
					counter={<span id="exp" />}
					measurement=""
				/>
				
			</div>
		</div>
	);
};

export default AboutCounter;
