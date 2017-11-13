import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styles: []
})
export class SideMenuComponent implements OnInit {
	menuList:any;
	level1Selected:any;
	level2Selected:any;
	initialSelected:any;
	
	level1Click(clicked: string): void {
        this.level1Selected = this.level1Selected == clicked ? null : clicked;
		this.level2Selected = null;
    }
	
	level2Click(clicked: string): void {
        this.level2Selected = this.level2Selected == clicked ? null : clicked;
    }
	
	isLevel2Active(item){
		return this.level2Selected === item;
    }
	
	isLevel1Active(item){
		return this.level1Selected === item;
    }
	
	isRouteActive(item){
		return this.initialSelected === item;
    }
	constructor(private router:Router) { 
  
	  this.menuList = [  
	   {  
		  "displayName":"Quick Services",
		  "url":"",
		  "subMenu":[  
			 {  
				"displayName":"Pay Your Bill",
				"url":"/account/billing"
			 },
			 {  
				"displayName":"Pay As Guest",
				"url":""
			 },
			 {  
				"displayName":"View Balance and Usage",
				"url":""
			 },
			 {  
				"displayName":"Report an Outage",
				"url":""
			 },
			 {  
				"displayName":"Turn Service On/Off",
				"url":""
			 },
			 {  
				"displayName":"Rebate for Your Home",
				"url":""
			 },
			 {  
				"displayName":"Contact Us",
				"url":""
			 }
		  ]
	   },
	   	{  
		  "displayName":"Your Home",
		  "url":"",
		  "subMenu":[  
			 {  
				"displayName":"Overview",
				"url":""
			 },
			 {  
				"displayName":"Rebates, Incentives & Saving Tips",
				"url":""
			 },
			 {  
				"displayName":"Help With Bill",
				"url":""
			 },
			 {  
				"displayName":"Electric Vehicles",
				"url":""
			 },
			 {  
				"displayName":"Rates",
				"url":""
			 },
			 {  
				"displayName":"Classes & Events",
				"url":""
			 }
		  ]
	   },
	   {  
		  "displayName":"Your Business",
		  "url":"",
		  "subMenu":[  
			 {  
				"displayName":"Overview",
				"url":""
			 },
			 {  
				"displayName":"Rebates, Incentives & Saving Tips",
				"url":""
			 },
			 {  
				"displayName":"Help With Bill",
				"url":""
			 },
			 {  
				"displayName":"Electric Vehicles",
				"url":""
			 },
			 {  
				"displayName":"Rates",
				"url":""
			 },
			 {  
				"displayName":"Classes & Events",
				"url":""
			 }
		  ]
	   },
	   {  
		  "displayName":"Outage Center",
		  "url":"",
		  "subMenu":[  
			{  
				"displayName":"Overview - Outage Center",
				"url":""
			},
			{  
				"displayName":"Report a Power Outage",
				"url":""
			},
			{  
				"displayName":"Report a Street Light Outage",
				"url":""
			},
			{  
				"displayName":"View Current Outages",
				"url":"/outage/outage-map"
			},
			{  
				"displayName":"Maintenance Outage Status",
				"url":""
			},
			{  
				"displayName":"All About Power Outages",
				"url":"",
				"subMenu":[  
				   {  
					  "displayName":"Overview - All About Power Outages",
					  "url":""
				   },
				   {  
					  "displayName":"How we Restore Power",
					  "url":""
				   }
				]
			 },
			 {  
				"displayName":"Outage Tips",
				"url":""
			 },
			 {  
				"displayName":"Our Service Guarantee",
				"url":""
			 }
		  ]
	   },
	   {  
		  "displayName":"Safety",
		  "url":"",
		  "subMenu":[  
			 {  
				"displayName":"Overview",
				"url":""
			 },
			 {  
				"displayName":"Rebates, Incentives & Saving Tips",
				"url":""
			 },
			 {  
				"displayName":"Help With Bill",
				"url":""
			 },
			 {  
				"displayName":"Electric Vehicles",
				"url":""
			 },
			 {  
				"displayName":"Rates",
				"url":""
			 },
			 {  
				"displayName":"Classes & Events",
				"url":""
			 }
		  ]
	   },
	]
  
  }

  ngOnInit() {
	  let currentUrl = this.router.url;
	  for(let menu of this.menuList){
		for(let secondMenu of menu.subMenu){
		  if(secondMenu.url == currentUrl){
			  this.initialSelected = secondMenu.displayName;
			  this.level1Selected = menu.displayName;
			  break;
		  }else if(secondMenu.subMenu){
			for(let thirdMenu of secondMenu.subMenu){
			  if(thirdMenu.url == currentUrl){
				  this.initialSelected = thirdMenu.displayName;
				  this.level1Selected = menu.displayName;
				  this.level2Selected = secondMenu.displayName;
				  break;
			  }
			}   
		  }
	    }  
	  }
  }

}
