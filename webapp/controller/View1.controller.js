sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.cust.surveycustomersurvey1.controller.View1", {
		
	onInit:function(){
	/*	var mParameter, oModel, oJSONModel = new JSONModel();
		oModel = this.getView().getModel();
		this.getView().setModel(oJSONModel, "QuestionSet");
		mParameter = {
			context: null,
			success: jQuery.proxy(this.fnSuccessQuestionSet, this),
			error: jQuery.proxy(this.fnErrorQuestionSet, this)
		};
		oModel.read("/QuestionDetSet", mParameter);*/
		
	},
/*	fnSuccessQuestionSet : function(oSuccessData){
		this.getView().getModel("QuestionSet").setProperty("/", oSuccessData.results);
	},*/
      onSave : function(){
      	
      	
      	
      	
      }
	});
});