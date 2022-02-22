
//global variable, for html page, refer tpsvr @ npm.
query_by_attribute = require("../query-by-attribute.js");

module.exports = {

	"query_by_attribute": function (done) {

		_ele('divResult3').innerHTML = "<span myattr=11>aaa</span> <span myattr=22>bbb</span> " +
			"<b myattr=22>ccc</b> <b myattr=22>ddd</b> <b id='sp-char'>eee</b>";

		var val = "[]:<>'\"\\/  \t 	 ";
		_ele('sp-char').setAttribute('myattr', val);

		//query_by_attribute(el, head, attrName, attrValue, tail, all)
		return query_by_attribute('divResult3', '', 'myattr').getAttribute('myattr') === '11' &&
			query_by_attribute('divResult3', '', 'myattr', '22').textContent === 'bbb' &&
			query_by_attribute('divResult3', 'b', 'myattr', '22').textContent === 'ccc' &&
			query_by_attribute('divResult3', 'b', 'myattr', '22', ':nth-of-type(2)').textContent === 'ddd' &&
			query_by_attribute('divResult3', '', 'myattr', val).textContent === 'eee';
		;
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('query_by_attribute', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
