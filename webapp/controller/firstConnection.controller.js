sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"jquery.sap.storage"
], function(Controller) {
	"use strict";

	return Controller.extend("testhanatesthana.controller.firstConnection", {

		onInit: function() {
		},

		onToPage1: function() {
			jQuery.sap.storage.put(99, "true");
			this.getOwnerComponent().getRouter().navTo("page1");
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testhanatesthana.view.firstConnection
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testhanatesthana.view.firstConnection
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testhanatesthana.view.firstConnection
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testhanatesthana.view.firstConnection
		 */
		//	onExit: function() {
		//
		//	}

	});

});