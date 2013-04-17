 function() {

 	function get_amazon_product_info(document) 
	 	{
	 		var title_span = document.getElementById("btAsinTitle");
	 		var title = title_span.innerText;

	 		var image_tag = document.getElementById("main-image");
	 		var image = image_tag.getAttribute("src");

	 		var price_span = document.getElementById("actualPriceValue");
	 		var price = price_span.innerText;
 		}

 	function get_etsy_product_info(document)
 	{
 		 	var title_span = document.getElementById("item-title");
	 		var title = title_span.innerText;

	 		var image_div = document.getElementById("fullimage_link1");
	 		var image_tag = image_div.getElementsByTagName("img");
	 		var image = image_tag[0].getAttribute("src");

	 		var price_div = document.getElementsByClassName("item-price");
	 		var price_span = price_div[0].getElementsByClassName("currency-value")
	 		var price = price_span[0].innerText;
 	}

 	function get_jcrew_product_info()
 	{

  		var title_span = document.getElementById("pdp-title");
	 		var title = title_span.innerText;

	 		var image_div = document.getElementsByClassName("prod_main_img");
	 		var image_tag = image_div[0].getElementsByTagName("img");
	 		var image = image_tag[0].getAttribute("src");

	 		//lame implementation -- need to be able to determine which radio button is checked. Finish later!

	 		var price_div = document.getElementsByClassName("pdp-shapes");
	 		var price_span = price_div[0].getElementsByClassName("price")
	 		var price = price_span[0].innerText;
 	}

 	function send_data()
 	{
		function determine_params() 
	 	{
	 		domain = document.domain;
	 		if (domain == 'www.amazon.com')
	 		{	
	 			get_amazon_product_info;
	 		}
	 		else if (domain == 'www.etsy.com')
	 		{
				get_etsy_product_info;
	 		}
	 		else if (domain == 'www.jcrew.com')
	 		{
	 			get_jcrew_product_info;
	 		}
	 	}	
 
 		var http = new XMLHttpRequest();

 		var url = // create_product_path
 		var params = "title=" + title + "&image=" + image + "&price=" price;
 		http.open("POST", url , true);
 		
 		//Send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.setRequestHeader("Content-length", params.length);
		http.setRequestHeader("Connection", "close");

 		http.onreadystatechange = function() {
 			if(http.readyState == 4 && http.status == 200) {
 				alert(http.responseText);
 			}
 		}

		http.send(params);
 	}
}