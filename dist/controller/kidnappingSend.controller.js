sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/json/JSONModel"],
	function(Controller, JSONModel) {
	"use strict";
 
	var CController = Controller.extend("testhanatesthana.controller.kidnappingSend", {
 
		onInit: function () {
			var oModel = new JSONModel({data: {}});
			this.getView().setModel(oModel);
		},
 
		handleLiveChange: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			this.getView().byId("getValue").setText(sValue);
		}
	});
 
	return CController;
 
});