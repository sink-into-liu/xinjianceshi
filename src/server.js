const http = require('http');
// 创建一个http服务器
const server = http.createServer(function(request, response) {
    // 是猪状态码和响应头
    response.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    response.write('<h1>利用http模块创建静态服务器</h1>');
    response.write('hello<strong>jingjing</strong>');
    response.end('<p><----------我是有底线的---------></p>');
});
server.listen(2101, () => {
    console.log('服务器创建成功...');
})