import dva from 'dva'
import RootRouter from './router'
import modules from './modules'
import './utils/request.test'
const app = dva();
modules.forEach(item=>app.model(item));
app.router(RootRouter);
app.start('#root');


if(process.env.NODE_ENV === 'development'){
    let serviceWorker = require('./serviceWorker')
    serviceWorker.unregister();
}
