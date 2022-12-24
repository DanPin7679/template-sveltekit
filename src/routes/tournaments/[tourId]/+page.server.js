// @ts-nocheck
import { getTour } from '../../../lib/db/controllers/tourController';

export const load = async function ({ params }) {
	const data = await getTour(params.tourId);
	console.log(data);
	return {
		tour: data
	};
};
