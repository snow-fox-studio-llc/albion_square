const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
	uniqueName: {
		type: String,
		required: true,
	},
	shopCategory: {
		type: String,
		required: true,
	},
	shopSubCategory: {
		type: String,
		required: true,
	},
	tier: {
		type: Number,
		required: true,
	},
	enchantment: {
		type: Number,
		required: true,
	},
	quality: {
		type: Number,
		required: true,
	},
	availableEnchantments: {
		type: [Number],
		required: true,
	},
	maxQuality: {
		type: Number,
		required: true,
	},
	en: {
		type: String,
		required: true,
	},
	de: {
		type: String,
		required: true,
	},
	fr: {
		type: String,
		required: true,
	},
	ru: {
		type: String,
		required: true,
	},
	pl: {
		type: String,
		required: true,
	},
	es: {
		type: String,
		required: true,
	},
	pt: {
		type: String,
		required: true,
	},
	zh: {
		type: String,
		required: true,
	},
	ko: {
		type: String,
		required: true,
	},
	hasAssetAvailable: {
		type: Boolean,
		default: null,
	},
	adpVersion: {
		type: String,
		required: true,
	},
});
