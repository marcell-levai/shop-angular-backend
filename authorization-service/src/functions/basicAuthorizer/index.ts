
import { handlerPath } from '@libs/handler-resorver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'token',
        cors: true,
      },
    },
  ],
};