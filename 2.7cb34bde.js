(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{346:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("polaris-layout",[a("polaris-layout-section",{attrs:{secondary:""}},[a("polaris-card",{staticStyle:{"background-color":"transparent","box-shadow":"none"},attrs:{title:"Select what meta data on what pages you are ready to delete."}},[a("polaris-card-section",{staticStyle:{"padding-bottom":"0"}},[a("polaris-list",{attrs:{type:"number"}},[a("polaris-list-item",[e._v("Select the page type")]),e._v(" "),a("polaris-list-item",[e._v("Fill the meta fields for the chosen page type")]),e._v(" "),a("polaris-list-item",[e._v("Use the tags below. Place the cursor in the required place and click on the required tag to insert its value into the meta field.")])],1)],1)],1)],1),e._v(" "),a("polaris-layout-section",[a("polaris-card",{attrs:{sectioned:""}},[a("polaris-form-layout",[a("polaris-form-layout-group",{attrs:{title:"Select the page type(s) where the meta tags will be deleted"}},[a("polaris-stack",{attrs:{wrap:"",distribution:"fillEvenly"}},[a("polaris-choice-list",{attrs:{choices:e.choices[0],allowMultiple:""},model:{value:e.choiceValues[0],callback:function(t){e.$set(e.choiceValues,0,t)},expression:"choiceValues[0]"}}),e._v(" "),a("polaris-choice-list",{attrs:{choices:e.choices[1],allowMultiple:""},model:{value:e.choiceValues[1],callback:function(t){e.$set(e.choiceValues,1,t)},expression:"choiceValues[1]"}})],1)],1),e._v(" "),a("polaris-form-layout-group",{attrs:{title:"Select the meta tags that will be deleted"}},[a("polaris-stack",{attrs:{wrap:"",distribution:"fillEvenly"}},[a("polaris-choice-list",{attrs:{choices:e.choices[2],allowMultiple:""},model:{value:e.choiceValues[2],callback:function(t){e.$set(e.choiceValues,2,t)},expression:"choiceValues[2]"}}),e._v(" "),a("polaris-choice-list",{attrs:{choices:e.choices[3],allowMultiple:""},model:{value:e.choiceValues[3],callback:function(t){e.$set(e.choiceValues,3,t)},expression:"choiceValues[3]"}})],1)],1)],1)],1),e._v(" "),a("polaris-page-actions",{attrs:{"primary-action":{content:"Save",onAction:e.onSave}}})],1)],1),e._v(" "),a("polaris-modal",{attrs:{closeOnLayout:!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem ea eius in, itaque laudantium magni, nam numquam odit optio quisquam quo, suscipit voluptates! Assumenda inventore magni tenetur unde voluptate.")])])],1)};l._withStripped=!0;var o={data:function(){return{title:"Delete Meta Tags",show:!1,tags:["Store name","Customer email","Store phone","Street","Apartment, suite, etc","City","Postal / ZIP code","State","Country/Region"],choiceValues:[[],[],[],[]],choices:[[{label:"Home page",value:"hidden"},{label:"Collection pages",value:"optional"},{label:"Product pages",value:"required"}],[{label:"Informational pages",value:"hidden"},{label:"Blog page",value:"optional"},{label:"Articule pages",value:"required"}],[{label:"Meta title",value:"hidden"},{label:"Meta description",value:"optional"}],[{label:"Meta keywords",value:"hidden"},{label:"Alt-text",value:"optional"}]]}},methods:{onClick:function(e){console.log(e)},onSave:function(){this.show=!0,console.log("onSave")}},created:function(){}},i=a(93),s=Object(i.a)(o,l,[],!1,null,"1d0383f8",null);s.options.__file="views/DeleteMetaTags.vue";t.default=s.exports}}]);