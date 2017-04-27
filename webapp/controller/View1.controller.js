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
      	
      	//this.getView().byId("formId").setVisible(true);
      	if(this.getView().byId("projectInput") === " ") {
      		
      	}
      	
      },
      
      
      onRatingChange : function(oEvent){
      	
      	/*if(oEvent.getParameter("value") < 4){
      			this.getView().byId("formId").setVisible(true);
      	}*/
      	
      	var i; var table = this.getView().byId("idQuestionTable");
      	var tabLength = table.getItems().length;
       var ratingArray = [];
      
      	for (i= 0 ; i < tabLength ; i++) {
      	
      		var rate  = table.getItems()[i].getCells()[1].getValue();
      		ratingArray.push(rate);
      		
      	
      	}
      	
      	for(var j = 0;j<ratingArray.length; j++){
      		if(ratingArray[j] < 4){
      				this.getView().byId("formId").setVisible(true);
      				break;
      		}
      		else if(j === ratingArray.length-1){
      			this.getView().byId("formId").setVisible(false);
      			
      		}
      		this.getView().byId("saveId").setEnabled(true);
      	}
      	
      	
      }
      
	});
});