	"use strict";

			function displayButton() {
					var auth2 = gapi.auth2.getAuthInstance();
					var value = auth2.isSignedIn.get();
					console.log('User logged In'+ value);
					if(value){
						$('#signin').hide();
						$('#signout').show();
					}else{
						$('#signin').show();
						$('#signout').hide();
						$('#maincontent').hide();
						$('#stocklist').text("");
						$('#stockdetails').text("");
					}
				}


				function onLogin(googleUser) {
							 console.log('Logged in as: ' + googleUser.getBasicProfile().getName()+' ... '+ googleUser.getBasicProfile().getEmail());
							 $('#signin').hide();
	 						 $('#signout').show();
	 						 $('#maincontent').show();
							 document.getElementById('stock').value=null;

							 var str = googleUser.getBasicProfile().getName();
							 document.getElementById('user').innerHTML= str;
			  }

				function onLogout(googleUser) {
							var auth2 = gapi.auth2.getAuthInstance();
							auth2.signOut().then(function () {
									console.log('User signed out.');
									$('#signin').show();
									$('#ssignout').hide();
									$('#maincontent').hide();
									$('#stocklist').text("");
									$('#stockdetails').text("");
									$('#user').text("");
								});
				}


				function submit(){
					var textContent = "<li><span class='fa'><a href='#' onclick=\"loadStock('" +
					 document.getElementById("stock").value + "')\">"
									+document.getElementById("stock").value + "</a></span><br/></li>";
					appendValue(textContent);

				}

				function appendValue(stock) {
						var pre = document.getElementById('stocklist');
						var textContent = document.createTextNode(stock + '\n');
						document.getElementById('stocklist').innerHTML = document.getElementById('stocklist').innerHTML + stock;
				}

				function loadStock(stock){
					 $.ajax({
							url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://articlefeeds.nasdaq.com/nasdaq/symbols?symbol='+stock),
							dataType : 'json',
							success  : function (data) {
								if (data.responseData.feed && data.responseData.feed.entries) {
									$('#stockdetails').text("");
									$.each(data.responseData.feed.entries, function (i, e) {
										var newDiv = document.createElement("div");
										newDiv.textContent = e.contentSnippet;
										var link = document.createElement('a');
										link.setAttribute("href",e.link);
										link.setAttribute("target","_blank");
										var span = document.createElement("span");
										span.textContent = e.title;
										link.appendChild(span);
										var br = document.createElement("br");
										$('#stockdetails').append(link).append(newDiv).append(br);
								});
							}
						},
						error: function() {
									$('#stockdetails').text("");
									var span = document.createElement("span");
									span.textContent = "Incorrect stock index : "+ stock ;       // Create a text node
									$('#stockdetails').append(span);
							}
					});
				}
