const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"bd22517a2acb3f7f92718089195a39f4",url:"./404.html"},{revision:"97154525a82beaa044acdd45305955e8",url:"./about/index.html"},{revision:"34a4fc86034d490e54df92a782d0e52f",url:"./archives/2019/10/index.html"},{revision:"08e0ad11ddd2c84b4b7540aca956d0c1",url:"./archives/2019/index.html"},{revision:"88e73ad9a07ec416c591f6886d2fd351",url:"./archives/2020/01/index.html"},{revision:"e0bfea337aed90531843fe16307d92da",url:"./archives/2020/02/index.html"},{revision:"8f010331193333e1f24a74e7355d396b",url:"./archives/2020/index.html"},{revision:"c8f89f1c401a0a4bb539ecf12f0e0067",url:"./archives/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"9178be5a2e1e05c17d9640ef911c231c",url:"./blogLog/index.html"},{revision:"a69c460e9496f109f007970957fde778",url:"./categories/Handbook/index.html"},{revision:"760da19d2efb98dbd799db0a6455610f",url:"./categories/Handbook/Windows/index.html"},{revision:"55cd2db827bcb29a21edfbcb2ce4da3f",url:"./categories/index.html"},{revision:"e3877e13f337b40fcae85a3f5490e114",url:"./categories/Latex/index.html"},{revision:"38b1dc357166c767e703001655457c4a",url:"./categories/技术分享/index.html"},{revision:"af270f5a14f67d9f7d42696d0d520cff",url:"./categories/技术分享/博客/index.html"},{revision:"b8b57fe068d863c7bee5cdce18e7f40f",url:"./categories/法律/index.html"},{revision:"357786ca6b54a4719f996657ec7d237e",url:"./categories/法律/安全法/index.html"},{revision:"e40b18d516cfb28708dadf5b4ab47695",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"85db9855007f86fa85d63e9f7c49d558",url:"./guest/index.html"},{revision:"ecbb40f0cf18a38a5a25c692ba691d70",url:"./Hexo博客部署PWA.html"},{revision:"a546b71f364a263d7c036b86c1ec747a",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"a40800a06bb977c7acc797f5602e23a7",url:"./l1n/index.html"},{revision:"e23ee539ada27f6ded66d03767272c0e",url:"./LaTeX安装教程.html"},{revision:"5a63f68ca5cf583204b6a29ebf8d4c97",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"f10ad922af6a586dc9f160da6f562861",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"d2bbee26489198238c71b196ac920e0c",url:"./LoveHeart/css/default_dev.css"},{revision:"d2bbee26489198238c71b196ac920e0c",url:"./LoveHeart/css/default.css"},{revision:"fc073f6cf7d5230cc6a7a0dea3f44528",url:"./LoveHeart/index.html"},{revision:"e54c4c3bf2cb0589247b029821f952b4",url:"./LoveHeart/js/functions_dev.js"},{revision:"bf793d486fd4b68e6c74d2663c11cfab",url:"./LoveHeart/js/functions.js"},{revision:"f450b5e2edbd84e8d8243bf39755fa39",url:"./LoveHeart/js/garden_dev.js"},{revision:"0bba994a307dd63a7103f2f5e442f2d1",url:"./LoveHeart/js/garden.js"},{revision:"10092eee563dec2dca82b77d2cf5a1ae",url:"./LoveHeart/js/jquery.js"},{revision:"13fe9e11b26fb90d3f34c1f810b3a88d",url:"./manifest.json"},{revision:"bcc99b2ee9ca15112186363694397b9a",url:"./tags/GitHub/index.html"},{revision:"1f6fd66cbedf0995b17f48210c03dd06",url:"./tags/gulp/index.html"},{revision:"623e1ac432f9147d08380b61984833b5",url:"./tags/Hexo/index.html"},{revision:"dc6037aa1514d92329314977ce18417f",url:"./tags/index.html"},{revision:"cfb919b5cc84262d62397e3bbec53c7b",url:"./tags/Latex安装/index.html"},{revision:"54cfddd7db0347b35c8a61db6b00c325",url:"./tags/Mist/index.html"},{revision:"6f8d3a678c0b8df18418549bdc923f51",url:"./tags/Next/index.html"},{revision:"1281ccfdfb4d3ad0115a306dcb5d368e",url:"./tags/PWA/index.html"},{revision:"18d8d00e4d9245bd4a5dca44ca3f5b99",url:"./tags/wifi/index.html"},{revision:"6f1b5adf1066c6f5d68d42a429ea9758",url:"./tags/Windows10/index.html"},{revision:"273dc1772fb7ae9eec0b92036b590ee2",url:"./tags/内存型号/index.html"},{revision:"dc28a5400e268bfb00ceb012450c59c2",url:"./tags/录屏/index.html"},{revision:"61e0d9ffdf8c07302981880f330aa37e",url:"./tags/法律与技术/index.html"},{revision:"14d77cbf3477d0bc56242e4caed9f130",url:"./tags/端口占用查看/index.html"},{revision:"a1b39ffde57eb524919138324b8fcc4e",url:"./tags/网络实名制/index.html"},{revision:"e741942d9421c158f9af8e6e2806b88c",url:"./tags/隐私保护/index.html"},{revision:"7bb574ec43ecc8ac782e2956e1dac444",url:"./个人信息隐私保护的法律及技术双重角度思考.html"},{revision:"64b358df662cb8eab250d29a15134c7d",url:"./博客主题优化.html"},{revision:"5ab6d8cc6078130f7e91e3634f36c433",url:"./微软系统使用手册.html"},{revision:"06e925cfeb061c7677acc6ae4c94509e",url:"./搭建个人博客.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();