const categoryRouter = require('./CategoryRouter');
const brandRouter = require("./BrandRouter")
const productRouter = require("./ProductRouter");
const postRouter = require("./PostRouter");
const topicRouter = require("./TopicRouter");
const contactRouter = require("./ContactRouter");
const bannerRouter = require("./BannerRouter")
const menuRouter = require("./MenuRouter");
const orderRouter = require("./OrderRouter");
const orderdetailRouter = require("./OrderDetailRouter");
const userRouter = require("./UserRouter");
const pageRouter = require("./PageRouter");

const router = (app) => {
    app.use('/api/category', categoryRouter);
    app.use('/api/brand', brandRouter);
    app.use('/api/product', productRouter);
    app.use('/api/post', postRouter);
    app.use('/api/topic', topicRouter);
    app.use('/api/contact', contactRouter);
    app.use('/api/banner', bannerRouter);
    app.use('/api/menu', menuRouter);
    app.use('/api/order', orderRouter);
    app.use('/api/orderdetail', orderdetailRouter);
    app.use('/api/user', userRouter);
    app.use('/api/page', pageRouter);



}
module.exports = router;
