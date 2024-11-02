G.AddData({
name:'Gmail mod',
author:'Grbldrbl',
desc:'A gmail mod',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'gmailSheet' 'grbldrbl.github.io/orteil-legacy-mods/gmailSheet.png'},//custom stylesheet
func:function()
{
	new G.Res({
		name:'mail',
		desc:'[mail]s are loaded with text for stuff.',
		icon:[0,0],
		turnToByContext:{'eat':{'health':0,'happiness':55},
		partOf:'food',
		category:'Miscellaneous',
		req{'computer tech':true}
	});
	
	//Then we augment the base data to incorporate our new resources :
		//adding hot pepper as something that can be gathered from grass
	G.getDict('grass').res['gather']['mail']=5;
	
	new G.Tech({
		name:'computer tech',
		desc:'gatherers can now produce [mail]
		icon:[0,1,'gmailSheet'],
		cost:{'insight':10},
		req:{},
	});
	
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Computer tech" tech) is fulfilled.
	new G.Trait({
		name:'gmail madness',
		desc:'@your people appreciate [mail] twice as much and will be twice as happy from consuming it.',
		icon:[0,1,'spicySheet'],
		chance:20,
		req:{'computer tech':true},
		effects:[
			{type:'function',func:function(){G.getDict('mail').turnToByContext['eat']['happiness']=120;}},//this is a custom function executed when we gain the trait
		],
	});
	
	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
