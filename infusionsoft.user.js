// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    infusionsoftUserScriptProject
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://*.infusionsoft.com/Contact/manageContact.jsp*
// @grant        none
// ==/UserScript==

InfusionsoftUserscriptFramework = function(){            
    var ns = {};
    
    var tabs = {
        'ManageContact': [],
        'Order': []
    };
        
    ns.addTab = addTab;
    ns.init = init;
    ns.addWidget = addWidget;
    ns.tabs = tabs;
    
    function init(){
        log.on();
        if(typeof jQuery === "function"){
        	var where = whereAreWe();
            switch(where){
                case 'Dashboard':
                    //Insert new widgets...
                    break;
                case 'ManageContact':        
                    debugger;
                    log.info("Adding Tabs For ManageContact");
                    alert(tabs.ManageContact.length);
                    for(var key in tabs.ManageContact){
                        if(tabs.ManageContact.hasOwnProperty(key)){
                            addTabToPage(tabs.ManageContact[key], key);
                        }
                    }                    
                    break;
                    
            }
        } else {
            log.warn("jQuery not detected, so I'm going to assume this page isn't important...");
        }
        log.off();
    }
    /**
     * 
     */
    
    function addTab(where, linkText, source){        
    	tabs[where][linkText] = source;    
    }
    
    function addWidget(source){
        
    }
    
    function whereAreWe(){
        console.log(location.pathname);
        switch(location.pathname){
            case '/Admin/home.jsp':
                return "Dashboard";
            case '/Contact/manageContact.jsp':                                
                return "ManageContact";
        }
    }  
    
    function addTabToPage(value, name){
        alert("Here");
        var $tabUl = jQuery(jQuery('ul.tabs').eq(0));                            
        $tabUl.append('<li class="tab-sel active" id="tab_addressa" nowrap="nowrap"><a class="tab-sel" id="tab_link_addressa" href="#" onclick="showTabtabs(\'address\');return false;">' + String(value) + '</a></li>');
    }
           
    return ns;
}();


function testContactTab(){
    return 'Bob';
}    

InfusionsoftUserscriptFramework.addTab('ManageContact', 'Bob', testContactTab);
InfusionsoftUserscriptFramework.addWidget(testContactTab);

InfusionsoftUserscriptFramework.init();