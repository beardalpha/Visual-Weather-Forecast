import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default ({data, color}) => {
	return (
		<div>
			<Sparklines height={30} width={100} data={data}>
				<SparklinesLine color={color} />
			</Sparklines>
		</div>
	)
}