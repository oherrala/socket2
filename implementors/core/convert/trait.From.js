(function() {var implementors = {};
implementors["socket2"] = [{"text":"impl From&lt;SocketAddr&gt; for SockAddr","synthetic":false,"types":[]},{"text":"impl From&lt;SocketAddrV4&gt; for SockAddr","synthetic":false,"types":[]},{"text":"impl From&lt;SocketAddrV6&gt; for SockAddr","synthetic":false,"types":[]},{"text":"impl From&lt;TcpStream&gt; for Socket","synthetic":false,"types":[]},{"text":"impl From&lt;TcpListener&gt; for Socket","synthetic":false,"types":[]},{"text":"impl From&lt;UdpSocket&gt; for Socket","synthetic":false,"types":[]},{"text":"impl From&lt;Socket&gt; for TcpStream","synthetic":false,"types":[]},{"text":"impl From&lt;Socket&gt; for TcpListener","synthetic":false,"types":[]},{"text":"impl From&lt;Socket&gt; for UdpSocket","synthetic":false,"types":[]},{"text":"impl&lt;'s, S&gt; From&lt;&amp;'s S&gt; for SockRef&lt;'s&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: AsRawFd,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl From&lt;UnixStream&gt; for Socket","synthetic":false,"types":[]},{"text":"impl From&lt;UnixListener&gt; for Socket","synthetic":false,"types":[]},{"text":"impl From&lt;UnixDatagram&gt; for Socket","synthetic":false,"types":[]},{"text":"impl From&lt;Socket&gt; for UnixStream","synthetic":false,"types":[]},{"text":"impl From&lt;Socket&gt; for UnixListener","synthetic":false,"types":[]},{"text":"impl From&lt;Socket&gt; for UnixDatagram","synthetic":false,"types":[]},{"text":"impl From&lt;i32&gt; for Domain","synthetic":false,"types":[]},{"text":"impl From&lt;Domain&gt; for c_int","synthetic":false,"types":[]},{"text":"impl From&lt;i32&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;Type&gt; for c_int","synthetic":false,"types":[]},{"text":"impl From&lt;i32&gt; for Protocol","synthetic":false,"types":[]},{"text":"impl From&lt;Protocol&gt; for c_int","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()