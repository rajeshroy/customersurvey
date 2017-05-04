sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	 "sap/m/MessageToast"
], function(Controller, JSONModel,MessageToast) {
	"use strict";

	return Controller.extend("sap.cust.surveycustomersurvey1.controller.View1", {
		/**
		 * Reading and getting  Model data
		 * 
		 */ 
		onInit: function() {
			var mParameter, oModel, oJSONModel = new JSONModel();
			oModel = this.getOwnerComponent().getModel();
			this.getView().setModel(oJSONModel, "QuestionSet");
			mParameter = {
				context: null,
				success: jQuery.proxy(this.fnSuccessQuestionSet, this),
				error: jQuery.proxy(this.fnErrorQuestionSet, this)
			};
			oModel.read("/QuestionDetSet", mParameter);

		},
		/**
		 * 
		 *Sucess function once the Model data is set
		 * 
		 */ 
		fnSuccessQuestionSet: function(oSuccessData) {
			var oJSONModelData = this._addPropertyRating(oSuccessData);
			this.getView().getModel("QuestionSet").setProperty("/", oJSONModelData);
		},
		
			/**
		 * 
		 * if any error
		 * 
		 */ 
		fnErrorQuestionSet :function(oErrorData){
	},
		/**
		 *  This function is used to bind new property('rating') to each question set
		 * @param {object} oSuccessData json model data 
		 * @returns{object} jsonModelData
		 */
		_addPropertyRating: function(oSuccessData) {
			var aModelData = oSuccessData.results;
			for (var i = 0; i < aModelData.length; i++) {
				aModelData[i].FeedbackRating = 0;
				delete aModelData[i].__metadata;
				delete aModelData[i].CustFeedbackSet;
			}
			return aModelData;
		},
		/**
		 * 
		 * triggred when Save button is clicked
		 * 
		 */ 
		onSave: function() {
			var mParameter, oCreateData, aModelData = this.getView().getModel("QuestionSet").getProperty('/');
			oCreateData = this._fnCreateData(aModelData);
			mParameter = {
				context: null,
				success: jQuery.proxy(this.fnCreateSuccess, this),
				error: jQuery.proxy(this.fnCreateError, this)
			};
			this.getView().getModel().create("/CustAvgFeedbackSet", oCreateData, mParameter);
		},
		/**
		 * 
		 *this function will be called when Create data Sucess
		 * 
		 */
		 fnCreateSuccess: function(oSuccess){
        
         MessageToast.show("Created Sucessfully");
   
		 },
		 /**
		  * triggered if any error is encountered
		  * 
		  */
		  fnCreateError: function(oError){
		  	 MessageToast.show("Error");
		  },
		/**
		 * Private function triggred to create data model in required format
		 * 
		 * 
		 */
		 _fnCreateData: function(aModelData){
		 	var oCreateData = {}, oView = this.getView(),
		 	sProject = oView.byId("projectInput").getValue(),
		 	sDescription = oView.byId("Descriptionid").getValue();
		 	for (var i = 0; i < aModelData.length; i++) {
		 				aModelData[i].FeedbackDate = '';
		 				aModelData[i].Projectid = sProject;
				delete aModelData[i].QuestionText;
			}
			oCreateData.Projectid = sProject;
			oCreateData.FeedbackDesc = sDescription;
			oCreateData.CustFeedbackSet = aModelData;
			return oCreateData;
		 },
         	/**
		 * triggred on any rating indicator select to display or hide the description
		 * 
		 * 
		 */
		onRatingChange: function(oEvent) {

			/*if(oEvent.getParameter("value") < 4){
					this.getView().byId("formId").setVisible(true);
			}*/

		
			var table = this.getView().byId("idQuestionTable");
			var tabLength = table.getItems().length;
			var ratingArray = [];

			for (var i = 0; i < tabLength; i++) {

				var rate = table.getItems()[i].getCells()[1].getValue();
				ratingArray.push(rate);

			}

			for (var j = 0; j < ratingArray.length; j++) {
				if (ratingArray[j] < 5) {
					this.getView().byId("formId").setVisible(true);
					break;
				} else if (j === ratingArray.length - 1) {
					this.getView().byId("formId").setVisible(false);

				}
			
			}
             	
		}

	});
});