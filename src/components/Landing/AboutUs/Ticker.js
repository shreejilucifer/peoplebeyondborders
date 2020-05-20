import { useState } from 'react';
import { ItemNumbers } from './style';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Ticker = ({ numbers }) => {
	return (
		<CountUp start={0} end={parseInt(numbers)} redraw separator="," useEasing>
			{({ countUpRef, start }) => (
				<VisibilitySensor onChange={start} delayedCall>
					<ItemNumbers ref={countUpRef} />
				</VisibilitySensor>
			)}
		</CountUp>
	);
};

export default Ticker;
