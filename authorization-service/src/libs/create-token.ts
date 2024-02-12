import { config } from 'dotenv';
config();

console.log(Buffer.from(`lma:${process.env.levaimarcell}`).toString('base64'));