# query-by-attribute
query selector by attribute name and value

# Install
```
npm install query-by-attribute
```

# Usage & Api
```javascript

var query_by_attribute = require("query-by-attribute");

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

```
