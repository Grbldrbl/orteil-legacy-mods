G.AddData({
name:'Gmail mod',
author:'grbldrbl',
desc:'GMAIL',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'gmailSheet', grbldrbl.github.io/orteil-legacy-mods},
func:function()
{
	//The idea in this simple example mod is to add a few elements focused around hot sauce, because hot sauce is great and I use that stuff everywhere.
	
	//First we create a couple new resources :
	new G.Res({
		name:'mail',
		desc:'',
		icon:[0,1,'spicySheet'],
		turnToByContext:{'eat':{'health':0.01,'happiness':0.03},'decay':{'junk mail':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
		req:{'computer tech':true},
	});
	
	new G.Res({
		name:'junk mail',
		desc:'',
		icon:[0,1,'gmailSheet'],
		turnToByContext:{'eat':{'health':0.01,'happiness':0.03},'decay':{'junk mail':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
		req:{'computer tech':true},
	});
	
	//Then we augment the base data to incorporate our new resources :
		//adding mail as something that can be gathered from grass
	G.getDict('grass').res['gather']['mail']=3;
		//adding a new mode to artisans so they can make junk mail from mails
	G.getDict('artisan').modes['junk mail']={name:'Make junk mail XD',desc:'Turn [mail]s into 1 [junk mail]s.',req:{'computer tech':true},use:{'knapped tools':1}};
		//adding a new effect to artisans that handles the actual hot sauce preparing and is only active when the unit has the mode "hot sauce"
	G.getDict('artisan').effects.push({type:'convert',from:{'mail':1},into:{'junk mail':1},every:3,mode:'junk mail'});
	
	//Then we add a new technology which is required by the artisans to gain access to the "junk mail" mode :
	new G.Tech({
		name:'computer tech',
		desc:'@[artisan]s can now produce [junk mail] from [mail]s.//This special recipe allows a skilled craftsman to fully express the complex aromas present in hot peppers.',
		icon:[0,0,'gmailSheet'],
		cost:{'insight':10},
		req:{},
	});
	
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled.
	new G.Trait({
		name:'mail madness',
		desc:'@your people appreciate [hot sauce] twice as much and will be twice as happy from consuming it.',
		icon:[0,1,'gmailSheet'],
		chance:20,
		req:{'computer tech':true},
		effects:[
			{type:'function',func:function(){G.getDict('hot sauce').turnToByContext['eat']['happiness']=0.2;}},//this is a custom function executed when we gain the trait
		],
	});
	
	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
