sap.ui.define([
		'sap/m/MessageBox',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
], function(MessageBox, Fragment, Controller, JSONModel) {
	"use strict";

	var CController = Controller.extend("testhanatesthana.controller.sendalerts", {

	onToPage1   : function () {
			this.getOwnerComponent().getRouter().navTo("page1");
	},
	
	onInit : function() {
		// create any data and a model and set it to the view
		var oData = {
			checkBox1Text : "CheckBox",
			checkBox2Text : "CheckBox - focused"
		};
		var oModel = new JSONModel(oData);
		var oView = this.getView();
		oView.setModel(oModel);
	},
	handleInfoMessageBoxPress: function(oEvent) {
		var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
		MessageBox.information(
			"Votre requête a bien été prise en compte. Le Gouvernement Luxembourgeois vous remercie pour votre implication citoyenne.",
			{
				styleClass: bCompact? "sapUiSizeCompact" : ""
			}
		);
	}
	
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testhanatesthana.view.sendalerts
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testhanatesthana.view.sendalerts
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testhanatesthana.view.sendalerts
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testhanatesthana.view.sendalerts
		 */
		//	onExit: function() {
		//
		//	}

	});
	return CController;
});