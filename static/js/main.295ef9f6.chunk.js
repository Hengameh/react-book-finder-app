(this["webpackJsonpbooks-app"]=this["webpackJsonpbooks-app"]||[]).push([[0],{21:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),s=a.n(r),i=(a(21),a(2)),c=a(3),l=a(5),u=a(4),h=a(16),m=a.n(h),p=(a(39),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{key:this.props.id,className:"book"},this.props.imageLinks&&o.a.createElement("img",{className:"book-thumbnail",src:this.props.imageLinks,alt:this.props.title}),o.a.createElement("h2",{className:"book-title"},o.a.createElement("a",{href:this.props.canonicalVolumeLink,target:"_blank",rel:"noopener noreferrer"},this.props.title)),o.a.createElement("p",null,o.a.createElement("strong",null,"Authors:")," ",this.props.authors),o.a.createElement("p",null,o.a.createElement("strong",null,"Category:")," ",this.props.categories),o.a.createElement("p",null,o.a.createElement("strong",null,"Description:")," ",this.props.description))}}]),a}(n.Component));a(40);var d=function(){return o.a.createElement("div",{id:"Footer"},"Photo by"," ",o.a.createElement("a",{href:"https://unsplash.com/@christinhumephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Christin Hume")," ","on"," ",o.a.createElement("a",{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))},k=(a(41),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={searchTerm:"harry potter",bookList:[],isSearching:!1,errorMessage:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"handleInput",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"handleEnterKey",value:function(e){"Enter"===e.key&&this.searchBook()}},{key:"searchBook",value:function(){this.setState({isSearching:!0}),this.getBooks()}},{key:"getBooks",value:function(){var e=this;m.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.searchTerm,"&maxResults=12")).then((function(t){var a=t.data.totalItems;0===t.data.totalItems?e.setState({bookList:[],isSearching:!1,errorMessage:"No books found for ".concat(e.state.searchTerm)}):e.setState({bookList:t.data.items,isSearching:!1,errorMessage:"".concat(a," search results found for ").concat(e.state.searchTerm)})})).catch((function(){e.setState({bookList:[],isSearching:!1,errorMessage:"Encountered Server Error. Please enter a search term and try again..."})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h1",null,"Google Book Search"),o.a.createElement("p",null,"Find your book here and visit Google Play to find out more."),o.a.createElement("div",{className:"bar"},o.a.createElement("input",{className:"searchbar",type:"text",value:this.state.searchTerm,placeholder:'Eg. "harry potter", "javascript".',onChange:this.handleInput.bind(this),onKeyDown:this.handleEnterKey.bind(this)}),this.state.isSearching&&o.a.createElement("div",{className:"loader"}),o.a.createElement("button",{className:"button",type:"button",onClick:this.searchBook.bind(this)},"Search"))),o.a.createElement("div",{className:"result"},o.a.createElement("div",{className:"result-message"},this.state.errorMessage&&o.a.createElement("p",null,this.state.errorMessage)),this.state.bookList&&o.a.createElement("div",{className:"book-list"},this.state.bookList.map((function(e,t){return o.a.createElement(p,{key:e.id,index:t,imageLinks:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,canonicalVolumeLink:e.volumeInfo.canonicalVolumeLink,authors:e.volumeInfo.authors||"N/A",categories:e.volumeInfo.categories||"N/A",description:e.volumeInfo.description||"N/A"})})))),o.a.createElement(d,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.295ef9f6.chunk.js.map