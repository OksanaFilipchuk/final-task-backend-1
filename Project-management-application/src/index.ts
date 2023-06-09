import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';




(async () => {
  try {
    await mongoose.connect('mongodb://oksanafilipchuk:StOJ9LGlgX97Aujs@ac-wiefxtm-shard-00-00.it0zwnt.mongodb.net:27017,ac-wiefxtm-shard-00-01.it0zwnt.mongodb.net:27017,ac-wiefxtm-shard-00-02.it0zwnt.mongodb.net:27017/?ssl=true&replicaSet=atlas-10y87v-shard-0&authSource=admin&retryWrites=true&w=majority');
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
