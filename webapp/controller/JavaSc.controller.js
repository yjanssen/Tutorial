sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.storage"
], function(jQuery, Controller, JSONModel) {
	"use strict";

	return Controller.extend("testhanatesthana.controller.JavaSc", {

			onInit: function() {
				/*
				window.firstRun = 0;
				window.modelsource = "";
				if (window.firstRun !== 0) {
				window.modelsource = "/model/airquality.json";
				}
				window.firstRun = 1;
				*/
				window.modelsource = "/model/airquality.json";
				var modelsource = window.modelsource;
				
				jQuery.sap.storage.put(12, "ok");
				alert(jQuery.sap.storage.get(12));


				var oModel = new JSONModel(jQuery.sap.getModulePath("testhanatesthana", modelsource));
				this.getView().setModel(oModel);
/*
				// reuse table sample component
				var oComp = sap.ui.getCore().createComponent({
					name: "sap.m.sample.Table"
				});
				oComp.setModel(this.getView().getModel());
				this._oTable = oComp.getTable();
				this.getView().byId("idIconTabBar").insertContent(this._oTable);

				// update table
				this._oTable.setHeaderText(null);
				this._oTable.setShowSeparators("Inner");
*/
				//window.globalAlertSetting = "pollution";

				/*
				var filters;
			
				var searchString = window.globalAlertSetting;
				filters = [new sap.ui.model.Filter("", sap.ui.model.FilterOperator.Contains, searchString)];

				// update list binding
				var list = this.getView().byId("container");
				list.getBinding("TileCollection").filter(filters);
				this._selectedItemIdx = list.indexOfItem(list.getSelectedItem());
				*/
			},
/*
		handleIconTabBarSelect: function(oEvent) {
			var oBinding = this._oTable.getBinding("items"),
				sKey = oEvent.getParameter("key"),
				oFilter;
			if (sKey === "None") {
				oFilter = new Filter("infoState", "EQ", "None");
				oBinding.filter([oFilter]);
			} else if (sKey === "Warning") {
				oFilter = new Filter("infoState", "EQ", "Warning");
				oBinding.filter([oFilter]);
			} else if (sKey === "Error") {
				oFilter = new Filter("infoState", "EQ", "Error");
				oBinding.filter([oFilter]);
			} else {
				oBinding.filter([]);
			}
		},
*/
		onAfterRendering: function() {
			if (window.firstConnection !== 0) {
				this.getOwnerComponent().getRouter().navTo("page3");
			}
		},

		onToSendAlert: function() {
			this.getOwnerComponent().getRouter().navTo("page2");
		},

		onToSettings: function() {
			this.getOwnerComponent().getRouter().navTo("page4");
		},
		
		onToReturn: function() {
			this.getOwnerComponent().getRouter().navTo("page5");
		},

		handleListItemPress: function(evt) {
			// show in a pop-up which list element was pressed
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"You pressed item: " + evt.getSource().jQuery.sap.storage.get(12), {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "It works!",
					actions: [sap.m.MessageBox.Action.OK]
				}
			);
		}
	});
});