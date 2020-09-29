import   http from 'http';
 import app from '../server/app'
 import socket from 'socket.io'
import { user_sockets } from './sockets/User_socket';
import { upload_to_aws } from './database_AWs/User_action_aws';


const port = process.env.port|| 3000;
const serve=http.createServer(app);

  user_sockets._server=serve
  user_sockets.data_aws=new upload_to_aws("","",null);
user_sockets.listen_to_real_time()
serve.listen(port)
