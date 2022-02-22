
// query-by-attribute @ npm, query selector by attribute name and value.

//call .querySelector() by attribute name and value
module.exports = function (el, head, attrName, attrValue, tail, all) {
	if (typeof el === "string") el = document.getElementById(el);

	var selector = (head || "") + "[" + attrName +
		(
			(typeof attrValue !== "undefined" && attrValue !== null)
				? ("='" + ("" + attrValue).replace(/([\[\]\<\>\'\"\:\\\/ \t])/g, "\\$1")
					//.replace(/\r/g, "\\\\r").replace(/\n/g, "\\n")	//not work at chrome
					+ "'")
				: ""
		) +
		"]" + (tail || "");
	//console.log(selector);

	return all ? el.querySelectorAll(selector) : el.querySelector(selector);
}
