const axios = require("axios").default;
const adpItemsModel = require("../models/adp-items.js");
const arrayOrObjHelperUtil = require("../utils/array-or-obj-helper.js");

module.exports = async () => {
	console.log("Fetching ao-bin-dumps/items.json");
	const itemsJson = (
		await axios.get(
			"https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/items.json",
			{ responseType: "json" }
		)
	).data;

	console.log("Bulding adp-items collection");
	const itemKeys = Object.keys(itemsJson.items);
	for (let i = 3; i < itemKeys.length; ++i) {
		let itemValue = itemsJson.items[itemKeys[i]];
		await arrayOrObjHelperUtil(itemValue, async (item) => {
			console.log(`@uniquename: ${item["@uniquename"]}`);
			await adpItemsModel.create(item);
		});
	}
};
