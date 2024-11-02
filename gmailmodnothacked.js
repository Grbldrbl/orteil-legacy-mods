G.AddData({
name:'Example mod',
author:'Orteil',
desc:'A gmail mod',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'grbldrbl.github.io/orteil-legacy-mods/gmailSheet.png'},//custom stylesheet
func:function()
{
	new G.Res({
		name:'mail',
		desc:'[mail]s are loaded with text for stuff.',
		icon:[0,0],
		partOf:'misc',
		category:'Miscellaneous',
	});
	
	//Then we augment the base data to incorporate our new resources :
		//adding hot pepper as something that can be gathered from grass
	G.getDict('grass').res['gather']['mail']=55;
	
	//Then we add a new technology which is required by the artisans to gain access to the "hot sauce" mode :
	new G.Tech({
		name:'computer tech',
		desc:'gatherers can now produce [mail]
		icon:[0,1,'spicySheet'],
		cost:{'insight':10},
		req:{'cooking':true},
	});
	
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled.
	new G.Trait({
		name:'hot sauce madness',
		desc:'@your people appreciate [hot sauce] twice as much and will be twice as happy from consuming it.',
		icon:[1,1,'spicySheet'],
		chance:20,
		req:{'hot sauce preparing':true},
		effects:[
			{type:'function',func:function(){G.getDict('hot sauce').turnToByContext['eat']['happiness']=0.2;}},//this is a custom function executed when we gain the trait
		],
	});
	
	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
