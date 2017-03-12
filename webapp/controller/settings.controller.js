sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"jquery.sap.storage"
], function(Controller, History) {
	"use strict";

	return Controller.extend("testhanatesthana.controller.settings", {

		onInit: function() {
			
		},
		
		onBeforeRendering: function() {
			this.getView().byId("Switch1").setState(jQuery.sap.storage.get(1));
			this.getView().byId("Switch2").setState(jQuery.sap.storage.get(2));
			this.getView().byId("Switch3").setState(jQuery.sap.storage.get(3));
			//this.getView().byId("Switch4").setState(jQuery.sap.storage.get(4));
			//this.getView().byId("Switch5").setState(jQuery.sap.storage.get(5));
			this.getView().byId("Switch6").setState(jQuery.sap.storage.get(6));
			this.getView().byId("Switch7").setState(jQuery.sap.storage.get(7));
			this.getView().byId("Switch8").setState(jQuery.sap.storage.get(8));
			this.getView().byId("Switch9").setState(jQuery.sap.storage.get(9));
			//if (document.getCookie !== undefined) {
				//this.getView().byId("Switch1").setState(document.getCookie("Switch1"));
			//}
		},

		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("page1", {}, true);
			}
		},

		onSettingChange1: function(evt) {
			jQuery.sap.storage.put(1, evt.getSource().getState());
			//window.document.reload();
			/*jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"You pressed item: " + evt.getSource().getState(), {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "It works!",
					actions: [sap.m.MessageBox.Action.OK]
				}
			);*/
		},

		onSettingChange2: function(evt) {
			jQuery.sap.storage.put(2, evt.getSource().getState());
		},

		onSettingChange3: function(evt) {
			jQuery.sap.storage.put(3, evt.getSource().getState());
		},

		onSettingChange4: function(evt) {
			jQuery.sap.storage.put(4, evt.getSource().getState());
		},

		onSettingChange5: function(evt) {
			jQuery.sap.storage.put(5, evt.getSource().getState());
		},

		onSettingChange6: function(evt) {
			jQuery.sap.storage.put(6, evt.getSource().getState());
		},

		onSettingChange7: function(evt) {
			jQuery.sap.storage.put(7, evt.getSource().getState());
		},

		onSettingChange8: function(evt) {
			jQuery.sap.storage.put(8, evt.getSource().getState());
		},

		onSettingChange9: function(evt) {
			jQuery.sap.storage.put(9, evt.getSource().getState());
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testhanatesthana.view.settings
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testhanatesthana.view.settings
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testhanatesthana.view.settings
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testhanatesthana.view.settings
		 */
		//	onExit: function() {
		//
		//	}

	});

});