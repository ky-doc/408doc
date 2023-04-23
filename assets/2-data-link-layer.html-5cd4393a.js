const l=JSON.parse('{"key":"v-1cf19b0f","path":"/408notesPlus/Computer-Network/2-data-link-layer.html","title":"第三章 数据链路层","lang":"zh-CN","frontmatter":{"title":"第三章 数据链路层","order":3,"description":"基本概念 结点：主机、路由器。; 链路：网络中两个结点之间的物理通道。; 数据链路：网络中两个结点之间的逻辑通道。; 帧：链路层的协议数据单元。; 数据链路层功能 1. 为网络层提供服务：无确认无连接服务、有确认无连接服务、有确认面向连接服务。面向连接就一定会确认。 2. 链路管理：控制对物理传输介值访问。 3. 组帧（定义数据格式）：帧定界、帧同步、...","head":[["meta",{"property":"og:url","content":"https://ky-doc.github.io/mydoc/408doc/408notesPlus/Computer-Network/2-data-link-layer.html"}],["meta",{"property":"og:site_name","content":"研小布「考研资料站」"}],["meta",{"property":"og:title","content":"第三章 数据链路层"}],["meta",{"property":"og:description","content":"基本概念 结点：主机、路由器。; 链路：网络中两个结点之间的物理通道。; 数据链路：网络中两个结点之间的逻辑通道。; 帧：链路层的协议数据单元。; 数据链路层功能 1. 为网络层提供服务：无确认无连接服务、有确认无连接服务、有确认面向连接服务。面向连接就一定会确认。 2. 链路管理：控制对物理传输介值访问。 3. 组帧（定义数据格式）：帧定界、帧同步、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-23T10:21:12.000Z"}],["meta",{"property":"article:author","content":"研小布"}],["meta",{"property":"article:modified_time","content":"2023-04-23T10:21:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三章 数据链路层\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-23T10:21:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"研小布\\",\\"url\\":\\"https://ky-doc.github.io/mydoc/\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"数据链路层功能","slug":"数据链路层功能","link":"#数据链路层功能","children":[]}]},{"level":2,"title":"组帧","slug":"组帧","link":"#组帧","children":[{"level":3,"title":"字符计数法","slug":"字符计数法","link":"#字符计数法","children":[]},{"level":3,"title":"字符填充法","slug":"字符填充法","link":"#字符填充法","children":[]},{"level":3,"title":"零比特填充法","slug":"零比特填充法","link":"#零比特填充法","children":[]},{"level":3,"title":"违规编码法","slug":"违规编码法","link":"#违规编码法","children":[]}]},{"level":2,"title":"差错控制","slug":"差错控制","link":"#差错控制","children":[{"level":3,"title":"奇偶校验码","slug":"奇偶校验码","link":"#奇偶校验码","children":[]},{"level":3,"title":"CRC循环冗余码","slug":"crc循环冗余码","link":"#crc循环冗余码","children":[]},{"level":3,"title":"海明码","slug":"海明码","link":"#海明码","children":[]}]},{"level":2,"title":"流量控制","slug":"流量控制","link":"#流量控制","children":[{"level":3,"title":"停止等待协议（Stop-and-Wait）","slug":"停止等待协议-stop-and-wait","link":"#停止等待协议-stop-and-wait","children":[]},{"level":3,"title":"后退N帧协议（GBN）","slug":"后退n帧协议-gbn","link":"#后退n帧协议-gbn","children":[]},{"level":3,"title":"选择重传协议（SR）","slug":"选择重传协议-sr","link":"#选择重传协议-sr","children":[]}]},{"level":2,"title":"介质访问控制","slug":"介质访问控制","link":"#介质访问控制","children":[{"level":3,"title":"信道划分介质访问控制","slug":"信道划分介质访问控制","link":"#信道划分介质访问控制","children":[]},{"level":3,"title":"ALOHA协议","slug":"aloha协议","link":"#aloha协议","children":[]},{"level":3,"title":"CSMA协议","slug":"csma协议","link":"#csma协议","children":[]},{"level":3,"title":"CSMA/CD协议","slug":"csma-cd协议","link":"#csma-cd协议","children":[]},{"level":3,"title":"CSMA/CA协议","slug":"csma-ca协议","link":"#csma-ca协议","children":[]},{"level":3,"title":"轮询访问介质访问控制","slug":"轮询访问介质访问控制","link":"#轮询访问介质访问控制","children":[]}]},{"level":2,"title":"局域网","slug":"局域网","link":"#局域网","children":[{"level":3,"title":"局域网特性","slug":"局域网特性","link":"#局域网特性","children":[]},{"level":3,"title":"以太网","slug":"以太网","link":"#以太网","children":[]},{"level":3,"title":"无线局域网","slug":"无线局域网","link":"#无线局域网","children":[]},{"level":3,"title":"虚拟局域网","slug":"虚拟局域网","link":"#虚拟局域网","children":[]}]},{"level":2,"title":"广域网","slug":"广域网","link":"#广域网","children":[{"level":3,"title":"PPP协议","slug":"ppp协议","link":"#ppp协议","children":[]},{"level":3,"title":"HDLC协议","slug":"hdlc协议","link":"#hdlc协议","children":[]}]},{"level":2,"title":"数据链路层设备","slug":"数据链路层设备","link":"#数据链路层设备","children":[{"level":3,"title":"网桥（Bridge）","slug":"网桥-bridge","link":"#网桥-bridge","children":[]},{"level":3,"title":"交换机（Switch）","slug":"交换机-switch","link":"#交换机-switch","children":[]},{"level":3,"title":"交换机与网桥","slug":"交换机与网桥","link":"#交换机与网桥","children":[]},{"level":3,"title":"冲突域与广播域","slug":"冲突域与广播域","link":"#冲突域与广播域","children":[]}]}],"git":{"createdTime":1682245272000,"updatedTime":1682245272000,"contributors":[{"name":"408doc","email":"doc_408@163.com","commits":1}]},"readingTime":{"minutes":149.57,"words":44870},"filePathRelative":"408notesPlus/Computer-Network/2-data-link-layer.md","localizedDate":"2023年4月23日","autoDesc":true,"excerpt":""}');export{l as data};
