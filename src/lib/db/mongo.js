import mongoose from 'mongoose';

export async function connectDB() {
	try {
		mongoose.connect(
			'mongodb+srv://DanPin:D9xt9rM0r1n@cluster0.nhhx7zr.mongodb.net/ctio-golf?retryWrites=true&w=majority'
		);
		console.log('Connected to DB with Mongoose');
	} catch (e) {
		console.log(e);
		await mongoose.connection.close();
	}
}
