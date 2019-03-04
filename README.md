# REACT STREAMER

React-Redux Web App for watching live streams via flv.js over http-flv.
Backend is powered by Node-Media-Server (A Node.js implementation of RTMP/HTTP-FLV/WS-FLV/HLS/DASH/MP4 Media Server)
https://github.com/illuspas/Node-Media-Server
## Usage
```
https://github.com/rahularorar95/react-streamer
```
Run both servers

```
1. cd client/
   npm start
2. cd server/
   npm start
```

## Publishing live streams
### From OBS
```
Settings -> Stream
```

Stream Type : Custom Streaming Server

URL : rtmp://localhost/live

Stream key : STREAM_NAME  ```Unique Id of the stream```
