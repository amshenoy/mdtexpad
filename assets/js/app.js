	window.onload = function () {
		
		////////////////////////////////////////
		//var main_search = "github";
		//var sub_search = "ams";
		
		var main_search = "localhost";
		var sub_search = "localhost";
		
		var domain = window.location.host.split('.')[0];
		var subdomain =  window.location.host.split('.')[1] ? window.location.host.split('.')[0] : domain;
		//console.log(domain, subdomain);
		
		var valid = (subdomain.indexOf(sub_search) !== -1) && (subdomain.indexOf(main_search) !== -1);
		if (!valid){
		   return;
		}
		////////////////////////////////////////
		function renderViewer(){
			texme.setOption('style', 'plain');
			texme.renderElement("content", "render");
			document.querySelectorAll('pre code').forEach((block) => {
				//hljs.highlightBlock(block);
				Prism.highlightElement(block);
			});
		}
		renderViewer();
		
		//setup before functions
		var typingTimer;                //timer identifier
		var doneTypingInterval = 2000;  //time in ms
		var content = $("#content");

		function doneTyping() {
			renderViewer();
		}
		
		//on keyup, start the countdown
		content.on('keyup', function () {
		  clearTimeout(typingTimer);
		  typingTimer = setTimeout(doneTyping, doneTypingInterval);
		});

		//on keydown, clear the countdown 
		content.on('keydown', function () {
		  clearTimeout(typingTimer);
		});
		
		content.on("paste", function() {
			renderViewer();
		});

		//// add enter breaks for div with #content
		// $('div#content').on('keydown', function (e) {
			// if (e.keyCode === 13) {
				// document.execCommand('insertHTML', false, '<br>');
				// return false; 
			// }
		// });

		function saveTextAsFile(text, fileName){
			var textFileAsBlob = new Blob([text], {type:'text/plain'}); 
			var downloadLink = document.createElement("a");
			downloadLink.download = fileName;
			downloadLink.innerHTML = "Download";
			
			if (window.webkitURL != null){
				// Chrome allows the link to be clicked without actually adding it to the DOM.
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			}else{
				// Firefox requires the link to be added to the DOM before it can be clicked.
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
			}
			downloadLink.click();
		}

		$("#download").on("click", function(){
			var text = $("#content").val();
			//var text = $("#content").val();
			//function dataUrl(data) {return "data:x-application/text," + escape(data);}
			//window.open(dataUrl(text));
			var title = text.trim().split('\n', 1)[0].replace(/^\s*#*\s*|\s*#*\s*$/g, '');
			if (title == ""){
				title = "Untitled";
			}
			saveTextAsFile(text, title+".md");
		});
		
		$('#upload').on('click', function() {
			$('#fileupload').click();
			$('#fileupload').change(function(e){
				if (!window.FileReader) {
					alert('Your browser is not supported');
					return false;
				}
				var input = $('#fileupload').get(0);
				// Create a reader object
				var reader = new FileReader();
				if (input.files.length) {
					var textFile = input.files[0];
					// Read the file
					reader.readAsText(textFile);
					// When it's loaded, process it
					$(reader).on('load', processFile);
				}
			});
		});

		function processFile(e) {
			var file = e.target.result, results;
			if (file && file.length) {
				$('#content').val(file);
				renderViewer();
			}
		}
		
		$('#preview').on("click", function(){
			if ($(this).data("toggle") == "0"){
				$(this).data("toggle", "1");
				$(this).val("Edit");
				$('#content').hide();
				
				$('#editbar').show();
				$('body').css("overflow-y", "visible");
				
				//$('#render').width("60%");
				$('#render').width("21cm");
				//$('#render').height("29.7cm");
				$('#render').height("100%");
				//$('#render').css("zoom","100%");
				$('#render').css("padding","2em 5em");
				//$('#render').margin("30mm 45mm 30mm 45mm");
				
				$('#render').css("overflow-y", "hidden");
				$('#render').css("float", "none");
				//$('#render').css("page-break-after", "always");
				
			}else{
				$(this).data("toggle", "0");
				$(this).val("Preview");
				$('#content').show();
				
				$('#editbar').hide();
				$('body').css("overflow-y", "hidden");
				
				$('#render').width($('#render').css('min-width'));
				$('#render').height($('#render').css('min-height'));
				$('#render').css("padding","4em 5em");
				
				$('#render').css("overflow-y", "scroll");
				$('#render').css("float", "right");
			}
		});
		
		$('#print').on("click", function(){
			$('#actionbar').hide();
			$('#render').css("box-shadow", "none");
			$('#render').css("padding","0em 2em");
			$('#render').css("margin","0em");
			window.print();
			$('#actionbar').show();
			$('#render').css("box-shadow", "0.4em 0.4em 0.4em #222");
			$('#render').css("padding","2em 5em");
			$('#render').css("margin","3em auto");
		});
		
	}
	
	