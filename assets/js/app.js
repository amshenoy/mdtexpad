var content=$("#content"),render=$("#render");window.onload=function(){function e(){texme.setOption("style","plain"),texme.renderElement("content","render"),document.querySelectorAll("pre code").forEach(e=>{Prism.highlightElement(e)})}var n;e();function t(){e()}function o(n){var t=n.target.result;t&&t.length&&($("#content").val(t),e())}content.on("keyup",function(){clearTimeout(n),n=setTimeout(t,2e3)}),content.on("keydown",function(){clearTimeout(n)}),content.on("paste",function(){e()}),$("#download").on("click",function(){var e=$("#content").val(),n=e.trim().split("\n",1)[0].replace(/^\s*#*\s*|\s*#*\s*$/g,"");""==n&&(n="Untitled"),function(e,n){var t=new Blob([e],{type:"text/plain"}),o=document.createElement("a");o.download=n,o.innerHTML="Download",null!=window.webkitURL?o.href=window.webkitURL.createObjectURL(t):(o.href=window.URL.createObjectURL(t),o.onclick=destroyClickedElement,o.style.display="none",document.body.appendChild(o)),o.click()}(e,n+".md")}),$("#upload").on("click",function(){$("#fileupload").click(),$("#fileupload").change(function(e){if(!window.FileReader)return alert("Your browser is not supported"),!1;var n=$("#fileupload").get(0),t=new FileReader;if(n.files.length){var r=n.files[0];t.readAsText(r),$(t).on("load",o)}})}),$("#preview").on("click",function(){"0"==$(this).data("toggle")?($(this).data("toggle","1"),$(this).val("Edit"),$("#content").hide(),$("#editbar").show(),$("body").css("overflow-y","visible"),render.width("21cm"),render.height("100%"),render.css("padding","2em 5em"),render.css("overflow-y","hidden"),render.css("float","none")):($(this).data("toggle","0"),$(this).val("Preview"),content.show(),$("#editbar").hide(),$("body").css("overflow-y","hidden"),render.width(render.css("min-width")),render.height(render.css("min-height")),render.css("padding","4em 5em"),render.css("overflow-y","auto"),render.css("float","right"))}),$("#print").on("click",function(){$("#actionbar").hide(),render.css("box-shadow","none"),render.css("padding","0em 2em"),render.css("margin","0em"),window.print(),$("#actionbar").show(),render.css("box-shadow","0.4em 0.4em 0.4em #222"),render.css("padding","4em 5em"),render.css("margin","50px auto")})};
