/*
 Route360° JavaScript API v0.2.1 ("55c441f"), a JS library for leaflet maps. http://route360.net
 (c) 2014 Henning Hollburg and Daniel Gerber, (c) 2014 Motion Intelligence GmbH
*/
!function(t,e,o){r360.photonPlaceAutoCompleteControl=function(t){return new r360.PhotonPlaceAutoCompleteControl(t)},r360.PhotonPlaceAutoCompleteControl=L.Control.extend({initialize:function(t){this.options=JSON.parse(JSON.stringify(r360.config.photonPlaceAutoCompleteOptions)),"undefined"!=typeof t&&(r360.has(t,"position")&&(this.options.position=t.position),r360.has(t,"label")&&(this.options.label=t.label),r360.has(t,"country")&&(this.options.country=t.country),r360.has(t,"reset")&&(this.options.reset=t.reset),r360.has(t,"serviceUrl")&&(this.options.serviceUrl=t.serviceUrl),r360.has(t,"reverse")&&(this.options.reverse=t.reverse),r360.has(t,"placeholder")&&(this.options.placeholder=t.placeholder),r360.has(t,"width")&&(this.options.width=t.width),r360.has(t,"maxRows")&&(this.options.maxRows=t.maxRows),r360.has(t,"image")&&(this.options.image=t.image),r360.has(t,"index")&&(this.options.index=t.index),r360.has(t,"autoHide")&&(this.options.autoHide=t.autoHide),r360.has(t,"options")&&(this.options.options=t.options,this.options.travelType=r360.has(this.options.options,"init")?this.options.options.init:"walk"))},toggleOptions:function(t){var e=this;"undefined"==typeof t?$("#"+e.options.id+"-options").slideToggle():$(t).find("#"+e.options.id+"-options").slideToggle()},onAdd:function(t){var e=this,o=r360.config.i18n,i="",n=L.DomUtil.create("div",e._container);e.options.map=t,e.options.id=$(t._container).attr("id")+r360.Util.generateId(10),t.on("resize",e.onResize.bind(e));var s=e.options.width,a='style="width:'+s+'px;"';e.options.input='<div class="input-group autocomplete" '+a+'>                 <input id="autocomplete-'+e.options.id+'" style="color: black;width:'+s+'"                 type="text" class="form-control r360-autocomplete" placeholder="'+e.options.placeholder+'" onclick="this.select()">',e.options.image&&(e.options.input+='<span id="'+e.options.id+'-image" class="input-group-addon btn-autocomplete-marker">                     <img style="height:22px;" src="'+e.options.image+'">                  </span>');var r=[];return e.options.input+='<span id="'+e.options.id+'-options-button" class="input-group-btn travel-type-buttons" '+(e.options.options?"":'style="display: none;"')+'>                     <button class="btn btn-autocomplete" type="button" title="'+o.get("settings")+'"><i class="fa fa-cog fa-fw"></i></button>                 </span>',r.push('<div id="'+e.options.id+'-options" class="text-center" style="color: black;width:'+s+'; display: none;">'),r.push('  <div class="btn-group text-center">'),e.options.options&&e.options.options.walk&&r.push('<button type="button" class="btn btn-default travel-type-button '+("walk"==this.options.travelType?"active":"")+'" travel-type="walk"><span class="fa fa-male travel-type-icon"></span> <span lang="en">Walk</span><span lang="no">Gå</span><span lang="de">zu Fuß</span></button>'),e.options.options&&e.options.options.bike&&r.push('<button type="button" class="btn btn-default travel-type-button '+("bike"==this.options.travelType?"active":"")+'" travel-type="bike"><span class="fa fa-bicycle travel-type-icon"></span> <span lang="en">Bike</span><span lang="no">Sykle</span><span lang="de">Fahrrad</span></button>'),e.options.options&&e.options.options.rentbike&&r.push('<button type="button" class="btn btn-default travel-type-button '+("rentbike"==this.options.travelType?"active":"")+'" travel-type="rentbike">                             <span class="fa fa-bicycle travel-type-icon"></span> <span lang="en">Hire Bike</span><span lang="no">Bysykkel</span><span lang="de">Leihfahrrad</span>                        </button>'),e.options.options&&e.options.options.rentandreturnbike&&r.push('<button type="button" class="btn btn-default travel-type-button '+("rentandreturnbike"==this.options.travelType?"active":"")+'" travel-type="rentandreturnbike">                             <span class="fa fa-bicycle travel-type-icon"></span> <span lang="en">Hire & Return Bike</span><span lang="no">Bysykkel</span><span lang="de">Leihfahrrad</span>                        </button>'),e.options.options&&e.options.options.ebike&&r.push('<button type="button" class="btn btn-default travel-type-button '+("ebike"==this.options.travelType?"active":"")+'" travel-type="ebike"><span class="fa fa-bicycle travel-type-icon"></span> <span lang="en">E-Bike</span><span lang="no">Elsykkel</span><span lang="de">E-Fahrrad</span></button>'),e.options.options&&e.options.options.transit&&r.push('<button type="button" class="btn btn-default travel-type-button '+("transit"==this.options.travelType?"active":"")+'" travel-type="transit"><span class="map-icon-train-station travel-type-icon"></span> <span lang="en">Transit</span><span lang="de">ÖPNV</span></button>'),e.options.options&&e.options.options.car&&r.push('<button type="button" class="btn btn-default travel-type-button '+("car"==this.options.travelType?"active":"")+'" travel-type="car"><span class="fa fa-car"></span> <span lang="en">Car</span><span lang="de">Auto</span></button>'),r.push("  </div>"),r.push("</div>"),e.options.input+='<span id="'+e.options.id+'-reverse" '+(e.options.reverse?"":'style="display: none;"')+'" class="input-group-btn">                     <button class="btn btn-autocomplete" type="button" title="'+o.get("reverse")+'"><i class="fa fa-arrows-v fa-fw"></i></button>                 </span>',e.options.input+='<span id="'+e.options.id+'-reset" '+(e.options.reset?"":'style="display: none;"')+'" class="input-group-btn">                     <button class="btn btn-autocomplete" type="button" title="'+o.get("reset")+'"><i class="fa fa-times fa-fw"></i></button>                 </span>',e.options.input+="</div>",e.options.options&&(e.options.input+=r.join("")),$(n).append(e.options.input),$(n).find("#"+e.options.id+"-reset").click(function(){e.options.onReset()}),$(n).find("#"+e.options.id+"-reverse").click(function(){e.options.onReverse()}),$(n).find("#"+e.options.id+"-options-button").click(function(){$("#"+e.options.id+"-options").slideToggle()}),$(n).find(".travel-type-button").click(function(){$(n).find(".travel-type-button").removeClass("active"),$(this).addClass("active"),e.options.autoHide&&setTimeout(function(){$("#"+e.options.id+"-options").slideToggle()},300),e.options.travelType=$(this).attr("travel-type"),e.options.onTravelTypeChange()}),L.DomEvent.disableClickPropagation(n),r360.has(e.options,"country")&&(i+=" AND country:"+e.options.country),$(n).find("#autocomplete-"+e.options.id).autocomplete({source:function(t,o){e.source=this;var i=t.term;$.ajax({url:"https://service.route360.net/geocode/api/",async:!1,data:{q:i,limit:e.options.maxRows},success:function(i){var n=new Array;o($.map(i.features,function(o){if("boundary"!=o.osm_key){var i={},s=[],a=[];if(i.name=o.properties.name,i.city=o.properties.city,i.street=o.properties.street,i.housenumber=o.properties.housenumber,i.country=o.properties.country,i.postalCode=o.properties.postcode,i.name&&s.push(i.name),i.city&&s.push(i.city),i.street&&a.push(i.street),i.housenumber&&a.push(i.housenumber),i.postalCode&&a.push(i.postalCode),i.city&&a.push(i.city),a.push(i.country),!r360.contains(n,s.join()+a.join()))return n.push(s.join()+a.join()),{label:s.join(", "),value:s.join(", "),firstRow:s.join(", "),secondRow:a.join(" "),term:t.term,index:e.options.index,latlng:new L.LatLng(o.geometry.coordinates[1],o.geometry.coordinates[0])}}}))}})},minLength:2,select:function(t,o){e.options.value=o.item,e.options.onSelect(o.item)}}).data("ui-autocomplete")._renderItem=function(t,e){function o(t){return t.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}var i=e.term?e.firstRow.replace(new RegExp(o(e.term),"gi"),"<strong>$&</strong>"):e.firstRow,n=e.term?e.secondRow.replace(new RegExp(o(e.term),"gi"),"<strong>$&</strong>"):e.secondRow,s="<a><span class='address-row1'>"+i+"</span><br/><span class='address-row2'>  "+n+"</span></a>";return $("<li>").append(s).appendTo(t)},this.onResize(),n},updateI18n:function(t){var e=this;$("#autocomplete-"+e.options.id).attr("placeholder",r360.config.i18n.get(t?"placeholderSrc":"placeholderTrg")),$("#"+e.options.id+"-reverse-button").attr("title",r360.config.i18n.get("reverse")),$("#"+e.options.id+"-reset-button").attr("title",r360.config.i18n.get("reset")),$("#"+e.options.id+"-options-btn").attr("title",r360.config.i18n.get("settings"))},onSelect:function(t){this.options.onSelect=t},onReset:function(t){this.options.onReset=t},onReverse:function(t){this.options.onReverse=t},onTravelTypeChange:function(t){this.options.onTravelTypeChange=t},reset:function(){this.options.value={},this.setFieldValue("")},update:function(t,e){this.setLatLng(t),this.setFieldValue(e)},setLatLng:function(t){this.options.value.latlng=t},setFieldValue:function(t){var e=this;$("#autocomplete-"+e.options.id).val(t)},getFieldValue:function(){var t=this;return $("#autocomplete-"+t.options.id).val()},getTravelType:function(){return this.options.travelType},setValue:function(t){this.options.value=t},getValue:function(){return this.options.value},getIndex:function(){return this.options.index},onResize:function(){var t=this;this.options.map.getSize().x<550?$(t.options.input).css({width:"45px"}):$(t.options.input).css({width:""})}}),r360.TravelStartDateControl=L.Control.extend({options:{position:"topright",dateFormat:"yy-mm-dd",minDate:0},initialize:function(t){L.Util.setOptions(this,t)},onChange:function(t){this.options.onChange=t},onAdd:function(t){var e=this;e.options.map=t;var o=L.DomUtil.create("div","startDatePicker",this._container);e.datepicker=$("<div/>"),$(o).append(e.datepicker);var i={onSelect:function(){e.options.onChange(e.getValue())},firstDay:1},n=r360.config.i18n;return"en"!=n.language&&(i.monthNames=n.monthNames[n.language],i.dayNames=n.dayNames[n.language],i.dayNamesMin=n.dayNamesMin[n.language]),$(e.datepicker).datepicker(i),L.DomEvent.disableClickPropagation(o),o},getValue:function(){var t=this,e=$(t.datepicker).datepicker({dateFormat:"dd-mm-yy"}).val(),o=e.split("/"),i=o[2]+""+o[0]+o[1];return i}}),r360.travelStartDateControl=function(){return new r360.TravelStartDateControl},r360.TravelStartTimeControl=L.Control.extend({options:{position:"topright",range:!1,min:0,max:86400,step:600,initValue:28800,value:0},initialize:function(t){this.options.value=r360.Util.getHoursAndMinutesInSeconds(),L.Util.setOptions(this,t)},onSlideStop:function(t){this.options.slideStop=t},minToString:function(t){t/=60;var e=Math.floor(t/60),o=t-60*e;return e>24&&(e-=24),10>e&&(e="0"+e),10>o&&(o="0"+o),0==o&&(o="00"),e+":"+o},onAdd:function(t){var e=this;e.options.map=t,e.options.mapId=$(t._container).attr("id"),t.on("resize",this.onResize.bind(this));var o=L.DomUtil.create("div","startTimeSlider",this._container);return e.miBox=$("<div/>",{"class":"mi-box"}),e.startTimeInfo=$("<div/>"),e.label=$("<span/>"),e.slider=$("<div/>"),$(o).append(e.miBox.append(e.startTimeInfo.append(e.label)).append(e.slider)),$(e.label).text(r360.config.i18n.get("departure")+": "+e.minToString(this.options.value)+" "+r360.Util.getTimeFormat(e.options.value)),$(e.slider).slider({range:e.options.range,value:e.options.value,min:e.options.min,max:e.options.max,step:e.options.step,slide:function(t,o){$(e.label).text(r360.config.i18n.get("departure")+": "+e.minToString(o.value)+" "+r360.Util.getTimeFormat(o.value)),e.options.value=o.value},stop:function(t,o){e.options.slideStop(o.value)}}),this.onResize(),L.DomEvent.disableClickPropagation(o),o},onResize:function(){this.options.map.getSize().x<550?(this.removeAndAddClass(this.miBox,"leaflet-traveltime-slider-container-max","leaflet-traveltime-slider-container-min"),this.removeAndAddClass(this.startTimeInfo,"travel-time-info-max","travel-time-info-min"),this.removeAndAddClass(this.slider,"leaflet-traveltime-slider-max","leaflet-traveltime-slider-min")):(this.removeAndAddClass(this.miBox,"leaflet-traveltime-slider-container-min","leaflet-traveltime-slider-container-max"),this.removeAndAddClass(this.startTimeInfo,"travel-time-info-min","travel-time-info-max"),this.removeAndAddClass(this.slider,"leaflet-traveltime-slider-min","leaflet-traveltime-slider-max"))},removeAndAddClass:function(t,e,o){$(t).addClass(o),$(t).removeClass(e)},getValue:function(){return this.options.value}}),r360.travelStartTimeControl=function(){return new r360.TravelStartTimeControl},r360.TravelTimeControl=L.Control.extend({initialize:function(t){this.options=JSON.parse(JSON.stringify(r360.config.defaultTravelTimeControlOptions)),"undefined"!=typeof t&&(r360.has(t,"position")&&(this.options.position=t.position),r360.has(t,"unit")&&(this.options.unit=t.unit),r360.has(t,"initValue")&&(this.options.initValue=t.initValue),r360.has(t,"label")&&(this.options.label=t.label),r360.has(t,"travelTimes")&&(this.options.travelTimes=t.travelTimes),r360.has(t,"icon")&&(this.options.icon=t.icon)),this.options.maxValue=r360.max(this.options.travelTimes,function(t){return t.time}).time/60,this.options.step=(this.options.travelTimes[1].time-this.options.travelTimes[0].time)/60},onAdd:function(t){var e=this;this.options.map=t,t.on("resize",this.onResize.bind(this));for(var o="",i=100/this.options.travelTimes.length,n=0;n<this.options.travelTimes.length;n++)0==n?o+='<div style="position: absolute; top: 0; bottom: 0; left: '+n*i+"%; right: "+(100-(n+1)*i)+"%; background-color: "+this.options.travelTimes[n].color+'; -moz-border-top-left-radius: 8px;-webkit-border-radius-topleft: 8px; border-top-left-radius: 8px; -moz-border-bottom-left-radius: 8px;-webkit-border-radius-bottomleft: 8px; border-bottom-left-radius: 8px;"></div>':n<this.options.travelTimes.length-1?o+='<div style="position: absolute; top: 0; bottom: 0; left: '+n*i+"%; right: "+(100-(n+1)*i)+"%; background-color: "+this.options.travelTimes[n].color+';"></div>':n==this.options.travelTimes.length-1&&(o+='<div style="position: absolute; top: 0; bottom: 0; left: '+n*i+"%; right: "+(100-(n+1)*i)+"%; background-color: "+this.options.travelTimes[n].color+'; -moz-border-top-right-radius: 8px;-webkit-border-radius-topright: 8px; border-top-right-radius: 8px; -moz-border-bottom-right-radius: 8px;-webkit-border-radius-bottomright: 8px; border-bottom-right-radius: 8px;"></div>');this.options.sliderContainer=L.DomUtil.create("div",this._container),this.options.miBox=$("<div/>",{"class":"mi-box"}),this.options.travelTimeInfo=$("<div/>"),this.options.travelTimeSlider=$("<div/>",{"class":"no-border"}).append(o);var s=$("<div/>",{"class":"ui-slider-handle"});this.options.labelSpan=this.options.label,r360.has(this.options,"icon")&&"undefined"!==this.options.icon&&(this.options.iconHTML=$("<img/>",{src:this.options.icon})),this.options.travelTimeSpan=$("<span/>",{text:this.options.initValue});var a=$("<span/>",{text:this.options.unit});return $(this.options.sliderContainer).append(this.options.miBox),this.options.miBox.append(this.options.travelTimeInfo),this.options.miBox.append(this.options.travelTimeSlider),this.options.travelTimeSlider.append(s),this.options.travelTimeInfo.append(this.options.iconHTML).append(this.options.labelSpan).append(": ").append(this.options.travelTimeSpan).append(a),$(this.options.travelTimeSlider).slider({range:!1,value:e.options.initValue,min:0,max:e.options.maxValue,step:e.options.step,slide:function(t,o){return 0==o.value?!1:void $(e.options.travelTimeSpan).text(o.value)},stop:function(t,o){for(var i=new Array,n=0;n<o.value;n+=e.options.step)i.push(e.options.travelTimes[n/e.options.step]);e.options.onSlideStop(i)}}),this.onResize(),L.DomEvent.disableClickPropagation(this.options.sliderContainer),this.options.sliderContainer},onResize:function(){this.options.map.getSize().x<550?(this.removeAndAddClass(this.options.miBox,"leaflet-traveltime-slider-container-max","leaflet-traveltime-slider-container-min"),this.removeAndAddClass(this.options.travelTimeInfo,"travel-time-info-max","travel-time-info-min"),this.removeAndAddClass(this.options.travelTimeSlider,"leaflet-traveltime-slider-max","leaflet-traveltime-slider-min")):(this.removeAndAddClass(this.options.miBox,"leaflet-traveltime-slider-container-min","leaflet-traveltime-slider-container-max"),this.removeAndAddClass(this.options.travelTimeInfo,"travel-time-info-min","travel-time-info-max"),this.removeAndAddClass(this.options.travelTimeSlider,"leaflet-traveltime-slider-min","leaflet-traveltime-slider-max"))},removeAndAddClass:function(t,e,o){$(t).addClass(o),$(t).removeClass(e)},onSlideStop:function(t){var e=this.options;e.onSlideStop=t},setValue:function(t){$(this.options.travelTimeSlider).slider("value",t),$(this.options.travelTimeSpan).text(t)},getValues:function(){for(var t=this.options,e=new Array,o=0;o<$(this.options.travelTimeSlider).slider("value");o+=t.step)e.push(t.travelTimes[o/t.step].time);return e},getMaxValue:function(){return r360.max(this.getValues())}}),r360.travelTimeControl=function(t){return new r360.TravelTimeControl(t)},r360.waitControl=function(t){return new L.Control.WaitControl(t)},L.Control.WaitControl=L.Control.extend({options:{position:"topleft"},initialize:function(t){L.Util.setOptions(this,t)},onAdd:function(t){this.options.map=t,this.options.mapId=$(t._container).attr("id");var e=L.DomUtil.create("div","leaflet-control-wait");return $(e).append('<div id="wait-control-'+this.options.mapId+'" class="mi-box waitControl">                 <i class="fa fa-spinner fa-spin"></i> '+("undefined"!=typeof this.options.text?this.options.text:r360.config.i18n.get("wait"))+"            </div>"),e},updateText:function(t){$("#wait-control-"+this.options.mapId).html('<i class="fa fa-spinner fa-spin"></i> '+t),$("span[lang][lang!='"+r360.config.i18n.language+"']").hide()},show:function(){$("#wait-control-"+this.options.mapId).show()},hide:function(){$("#wait-control-"+this.options.mapId).hide()}}),r360.htmlControl=function(t){return new L.Control.HtmlControl(t)},L.Control.HtmlControl=L.Control.extend({options:{position:"topleft"},initialize:function(t){L.Util.setOptions(this,t)},onAdd:function(t){this.options.id=$(t._container).attr("id")+r360.Util.generateId();var e=L.DomUtil.create("div","leaflet-control-html");return $(e).append('<div id="html-control-'+this.options.id+'" class="html-control '+this.options.classes+'"></div>'),$(e).on("mouseover",function(){t.scrollWheelZoom.disable()}),$(e).on("mouseout",function(){t.scrollWheelZoom.enable()}),e},setHtml:function(t){$("#html-control-"+this.options.id).html(t)},show:function(){$("#html-control-"+this.options.id).show()},hide:function(){$("#html-control-"+this.options.id).hide()},toggle:function(){$("#html-control-"+this.options.id).toggle()}}),r360.RadioButtonControl=L.Control.extend({initialize:function(t){this.options=JSON.parse(JSON.stringify(r360.config.defaultRadioOptions)),"undefined"!=typeof t?("undefined"!=typeof t.position&&(this.options.position=t.position),"undefined"!=typeof t.buttons&&(this.options.buttons=t.buttons),"undefined"!=typeof t.onChange&&(this.options.onChange=t.onChange)):alert("No buttons supplied!")},onAdd:function(t){var e=this;this.options.map=t;var o=L.DomUtil.create("div",this._container);return this.options.input=this.getRadioButtonHTML(),$(o).append(this.options.input),$(this.options.input).buttonset({}).change(function(){e.options.checked=$("input[name='r360_radiobuttongroup_"+e.options.buttonGroupId+"']:checked").attr("key"),e.options.onChange(e.options.checked)}),$(this.options.input).each(function(t){$(this).tooltip({open:function(t,e){$("[lang='de'], [lang='en'], [lang='no']").hide(),$("[lang='"+r360.config.i18n.language+"']").show()},content:function(){return $(this).attr("title")},position:{my:"center top+10",at:"center bottom",using:function(t,e){$(this).css(t),$("<div>").addClass("arrow top").addClass(e.vertical).addClass(e.horizontal).appendTo(this)}}})}),L.DomEvent.addListener(o,"click",L.DomEvent.stopPropagation),o},onChange:function(t){this.options.onChange=t},setValue:function(t){$("input[name='r360_radiobuttongroup_"+this.options.buttonGroupId+"']:checked").next().removeClass("ui-state-active");var e=$("input[name='r360_radiobuttongroup_"+this.options.buttonGroupId+"'][key='"+t+"']");e.attr("checked",!0),e.addClass("checked"),e.next().addClass("ui-state-active"),this.options.checked=t},getValue:function(){return this.options.checked},getRadioButtonHTML:function(){var t=this;t.options.buttonGroupId=r360.Util.generateId(5);var e=$("<div/>",{id:t.options.buttonGroupId});return e.addClass("r360-box-shadow"),r360.each(t.options.buttons,function(o){var i=r360.Util.generateId(),n=$("<input/>",{type:"radio",id:"r360_"+i,value:o.key,key:o.key,name:"r360_radiobuttongroup_"+t.options.buttonGroupId}),s=$("<label/>",{"for":"r360_"+i,html:o.label});o.checked&&(t.options.checked=o.key,n.attr({checked:"checked"})),"undefined"!=typeof o.tooltip&&s.attr({title:o.tooltip}),e.append(n),e.append(s)}),e}}),r360.radioButtonControl=function(t){return new r360.RadioButtonControl(t)},r360.CheckboxButtonControl=L.Control.extend({initialize:function(t){this.options=JSON.parse(JSON.stringify(r360.config.defaultRadioOptions)),this.options.checked={},"undefined"!=typeof t?("undefined"!=typeof t.position&&(this.options.position=t.position),"undefined"!=typeof t.buttons&&(this.options.buttons=t.buttons),"undefined"!=typeof t.onChange&&(this.options.onChange=t.onChange)):alert("No buttons supplied!")},onAdd:function(t){var e=this;this.options.map=t;var o=L.DomUtil.create("div",this._container);return this.options.input=this.getCheckboxButtonHTML(),$(o).append(this.options.input),$(this.options.input).buttonset({}).change(function(){$("input:checkbox[name='r360_checkboxbuttongroup_"+e.options.buttonGroupId+"']").each(function(){$(this).is(":checked")?e.options.checked[$(this).attr("key")]=!0:e.options.checked[$(this).attr("key")]=!1}),e.options.onChange(e.options.checked)}),$(this.options.input).each(function(){$(this).tooltip({open:function(t,e){$("[lang='de'], [lang='en'], [lang='no']").hide(),$("[lang='"+r360.config.i18n.language+"']").show()},content:function(){return $(this).attr("title")},position:{my:"center top+10",at:"center bottom",using:function(t,e){$(this).css(t),$("<div>").addClass("arrow top").addClass(e.vertical).addClass(e.horizontal).appendTo(this)}}})}),L.DomEvent.addListener(o,"click",L.DomEvent.stopPropagation),o},onChange:function(t){this.options.onChange=t},getValue:function(){return this.options.checked},getId:function(){return this.id},getCheckboxButtonHTML:function(){var t=this;t.options.buttonGroupId=r360.Util.generateId(5),t.id=t.options.buttonGroupId;var e=$("<div/>",{id:t.options.buttonGroupId});return e.addClass("r360-box-shadow"),r360.each(t.options.buttons,function(o){var i=r360.Util.generateId(),n=$("<input/>",{type:"checkbox",id:"r360_"+i,value:o.key,key:o.key,name:"r360_checkboxbuttongroup_"+t.options.buttonGroupId}),s=$("<label/>",{"for":"r360_"+i,html:r360.isUndefined(o.icon)?""+o.label:o.icon+" "+o.label});o.checked&&(t.options.checked[o.key]=!0,n.attr({checked:"checked"})),"undefined"!=typeof o.tooltip&&s.attr({title:o.tooltip}),e.append(n),e.append(s)}),e}}),r360.checkboxButtonControl=function(t){return new r360.CheckboxButtonControl(t)},r360.LeafletPolygonLayer=L.Class.extend({initialize:function(t){this.opacity=r360.config.defaultPolygonLayerOptions.opacity,this.strokeWidth=r360.config.defaultPolygonLayerOptions.strokeWidth,this.tolerance=r360.config.defaultPolygonLayerOptions.tolerance,this.extendWidthX=r360.config.defaultPolygonLayerOptions.strokeWidth/2,this.extendWidthY=r360.config.defaultPolygonLayerOptions.strokeWidth/2,this.backgroundColor=r360.config.defaultPolygonLayerOptions.backgroundColor,this.backgroundOpacity=r360.config.defaultPolygonLayerOptions.backgroundOpacity,"undefined"!=typeof t&&("undefined"!=typeof t.opacity&&(this.opacity=t.opacity),"undefined"!=typeof t.strokeWidth&&(this.strokeWidth=t.strokeWidth),"undefined"!=typeof t.inverse&&(this.inverse=t.inverse),"undefined"!=typeof t.tolerance&&(this.tolerance=t.tolerance),"undefined"!=typeof t.extendWidthX&&(this.extendWidthX=t.extendWidthX),"undefined"!=typeof t.extendWidthY&&(this.extendWidthY=t.extendWidthY))},setInverse:function(t){this.inverse=t},getInverse:function(){return this.inverse},getBoundingBox3857:function(){return this.multiPolygons[0].getBoundingBox3857()},getBoundingBox4326:function(){return this.multiPolygons[0].getBoundingBox4326()},onAdd:function(t){this.map=t,this.id=r360.Util.generateId(),this.element=L.DomUtil.create("div","r360-leaflet-polygon-layer-"+$(t._container).attr("id")+"-"+this.id+" leaflet-zoom-hide"),$(this.element).attr("id","canvas"+$(this.map._container).attr("id")+"-"+this.id),this.map.getPanes().overlayPane.appendChild(this.element),this.map.on("moveend",this.draw,this),this.draw()},fitMap:function(t){var e=this.getBoundingBox4326(),o=e.getSouthWest(),i=e.getNorthEast();this.map.fitBounds(L.latLngBounds(L.latLng({lat:o.lat,lng:o.lng}),L.latLng({lat:i.lat,lng:i.lng})),t)},clearAndAddLayers:function(t,e,o){return console.log("clearAndAddLayers"),this.clearLayers(),this.addLayer(t),"undefined"!=typeof e&&e===!0&&this.fitMap(o),this},addLayer:function(t){this.multiPolygons=t,this.draw()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t.getPanes().overlayPane.removeChild(this.element),t.off("viewreset",this.draw,this)},createSvgData:function(t){var e=r360.PolygonUtil.extendBounds(this.getMapPixelBounds(),this.extendWidthX,this.extendWidthY);return r360.SvgUtil.createSvgData(t,{bounds:e,scale:256*Math.pow(2,this.map._zoom),tolerance:this.tolerance,pixelOrigin:this.map.getPixelOrigin(),offset:this.offset})},getMapPixelBounds:function(){var t=this.map.getPixelBounds();return{max:{x:t.max.x,y:t.max.y},min:{x:t.min.x,y:t.min.y}}},clearLayers:function(){this.multiPolygons=o,$("#canvas"+$(this.map._container).attr("id")+"-"+this.id).empty()},setStrokeWidth:function(t){this.strokeWidth=t},draw:function(){if("undefined"!=typeof this.multiPolygons){this.svgWidth=this.map.getSize().x+this.extendWidthX,this.svgHeight=this.map.getSize().y+this.extendWidthY;var t=$("#svg_"+$(this.map._container).attr("id")+"-"+this.id).offset(),e=$(this.map._container).offset();"undefined"==typeof this.offset&&(this.offset={x:0,y:0}),t&&(this.offset.x+=e.left-t.left-this.extendWidthX/2,this.offset.y+=e.top-t.top-this.extendWidthY/2),$("#canvas"+$(this.map._container).attr("id")+"-"+this.id).empty();for(var o=[],i=0;i<this.multiPolygons.length;i++){for(var n=this.multiPolygons[i],s=[],a=0;a<n.polygons.length;a++)s.push(this.createSvgData(n.polygons[a]));0!=s.length&&o.push(r360.SvgUtil.getGElement(s,{color:this.inverse?"black":n.getColor(),opacity:this.inverse?n.getOpacity():1,strokeWidth:this.strokeWidth}))}var r={id:$(this.map._container).attr("id"),offset:this.offset,svgHeight:this.svgHeight,svgWidth:this.svgWidth,backgroundColor:this.backgroundColor,backgroundOpacity:this.backgroundOpacity,opacity:this.opacity,strokeWidth:this.strokeWidth};$("#canvas"+$(this.map._container).attr("id")+"-"+this.id).append(this.inverse?r360.SvgUtil.getInverseSvgElement(o,r):r360.SvgUtil.getNormalSvgElement(o,r))}}}),r360.leafletPolygonLayer=function(t){return new r360.LeafletPolygonLayer(t)},r360.LeafletUtil={getMarker:function(t,e){var o=r360.has(e,"color")?"-"+e.color:"-blue";return e.icon=L.icon({iconSize:[25,41],iconUrl:e.iconPath+"marker-icon"+o+".png",iconAnchor:[12,41],shadowSize:[41,41],shadowUrl:e.iconPath+"marker-shadow.png",shadowAnchor:[41/3,41],popupAnchor:[0,-35]}),L.marker(t,e)},fadeIn:function(t,e,o,i,n,s){function a(t){segment=e.routeSegments[t],percent="travelTime"==i?segment.getTravelTime()/e.getTravelTime():segment.getDistance()/e.getDistance(),timeToDraw=percent*o,"TRANSFER"!=segment.getType()?l(segment,timeToDraw,n,t):(("undefined"==typeof n||n.paintTransfer||"undefined"!=typeof n&&!r360.has(n,"paintTransfer"))&&r(segment,n),++t<e.routeSegments.length&&a(t))}function r(t,e){p(t.points[0],t,e),t.points.length>1&&t.points[0].lat!=t.points[1].lat&&t.points[0].lng!=t.points[1].lng&&p(t.points[1],t,e)}function p(e,o,i){var n=L.circleMarker(e,{color:!r360.isUndefined(i)&&r360.has(i,"transferColor")?i.transferColor:o.getColor(),fillColor:!r360.isUndefined(i)&&r360.has(i,"transferHaloColor")?i.transferHaloColor:"undefined"!=typeof o.getHaloColor()?o.getHaloColor():"#9D9D9D",fillOpacity:!r360.isUndefined(i)&&r360.has(i,"transferFillOpacity")?i.transferFillOpacity:1,opacity:!r360.isUndefined(i)&&r360.has(i,"transferOpacity")?i.transferOpacity:1,stroke:!r360.isUndefined(i)&&r360.has(i,"transferStroke")?i.transferStroke:!0,weight:!r360.isUndefined(i)&&r360.has(i,"transferWeight")?i.transferWeight:4,radius:!r360.isUndefined(i)&&r360.has(i,"transferRadius")?i.transferRadius:8}),s=!r360.isUndefined(i)&&r360.has(i,"popup")?i.popup:"INSERT_TEXT";if("undefined"!=typeof o){var a=r360.contains(["walk","transit","source","target","bike","car"],o.startname)?"":o.startname;a=""!=a||r360.contains(["walk","transit","source","target","bike","car"],o.endname)?a:o.endname,s=s.replace("INSERT_TEXT",a)}!r360.isUndefined(i)&&r360.has(i,"popup")&&(n.bindPopup(s),n.on("mouseover",function(){n.openPopup()})),n.addTo(t),n.bringToFront()}function l(e,o,i,n){var a={};a.color=!r360.isUndefined(i)&&r360.has(i,"color")?i.color:e.getColor(),a.opacity=!r360.isUndefined(i)&&r360.has(i,"opacity")?i.opacity:.8,a.weight=!r360.isUndefined(i)&&r360.has(i,"weight")?i.weight:5,"TRANSIT"!=e.getType()&&"WALK"==e.getType()&&(a.color=!r360.isUndefined(i)&&r360.has(i,"walkColor")?i.walkColor:"#006F35",a.weight=!r360.isUndefined(i)&&r360.has(i,"walkWeight")?i.walkWeight:7,a.dashArray=!r360.isUndefined(i)&&r360.has(i,"walkDashArray")?i.walkDashArray:"1, 10");var r={};r.weight=!r360.isUndefined(i)&&r360.has(i,"haloWeight")?i.haloWeight:10,r.opacity=!r360.isUndefined(i)&&r360.has(i,"haloOpacity")?i.haloOpacity:.7,r.color=!r360.isUndefined(i)&&r360.has(i,"haloColor")?i.haloColor:"undefined"!=typeof e.getHaloColor()?e.getHaloColor():"#9D9D9D";var p=o/15,l=h(e.getPoints(),p),u=L.polyline(l[0],r).addTo(t),c=L.polyline(l[0],a).addTo(t);u.on("click",s),c.on("click",s),d(c,u,l,1,n)}function d(t,o,i,n,s){for(var r=t.getLatLngs(),p=0;p<i[n].length;p++)r.push(i[n][p]);0!=r.length&&(o.setLatLngs(r),t.setLatLngs(r)),++n<i.length?setTimeout(function(){d(t,o,i,n,s)},15):++s<e.routeSegments.length&&a(s)}function h(t,e){for(var o,i,n=0,s=1/e,a=0,r=new Array,p=1;p<t.length;p++)n+=t[p-1].distanceTo(t[p]);for(var l=new Array,p=0;p<t.length-1;p++)if(l.push(t[p]),o=t[p].distanceTo(t[p+1]),i=o/n,a+=i,a>=s)for(;a>=s;)percent=(s-(a-i))/i,l.push(u(t[p],t[p+1],percent)),s+=1/e,r.push(l),l=new Array;return r.push(l),l=new Array,l.push(t[t.length-1]),r.push(l),r}function u(e,o,i){var n;n="undefined"!=typeof t.project?t:t._map;var s=n.project(e),a=n.project(o),r=(a.x-s.x)*i+s.x,p=(a.y-s.y)*i+s.y,l=new r360.point(r,p),d=n.unproject(L.point(l.x,l.y));return d}"undefined"==typeof o&&(o=0),"undefined"==typeof i&&(i="travelTime"),a(0)}}}(window,document);