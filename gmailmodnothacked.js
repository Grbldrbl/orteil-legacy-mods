G.AddData({
name:'Gmail mod',
author:'Grbldrbl',
desc:'A gmail mod',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'gmailSheet' 'grbldrbl.github.io/orteil-legacy-mods/gmailSheet.png'},
func:function() {
		G.unitCategories.unshift({
			id:'mail_category',
			name:'mailing'
		});
{
	new G.Unit({
			name:'computer',
			displayName:'Computer',
			desc:'A computer is set in this piece of [land] to mail. note: USELESS. gatherers gather mail from GRASS XD',
			icon:[0,0,"gmailSheet"],
			cost:{},
			req:{
				'computer-tech':true
			},
			use:{
				'land':1,
			},
			gizmos:false
		});
	
	new G.Res({
		name:'mail',
		desc:'mails are loaded with text for stuff.',
		icon:[0,0],
		turnToByContext:{'eat':{'health':0,'happiness':5},
		partOf:'food',
		category:'mail_category',
		req{'computer-tech':true}
	});
	G.getDict('grass').res['Gather']['mail']=5;
	
	new G.Tech({
		name:'computer-tech',
		desc:'gatherers can now produce mail
		icon:[0,1,'gmailSheet'],
		cost:{'insight':10},
		req:{},
	});
	new G.Trait({
		name:'gmail madness',
		desc:'your people .',
		icon:[0,1,'gmailSheet'],
		chance:1,
		req:{'computer-tech':true},
		effects:[
			{type:'function',func:function(){G.getDict('mail').turnToByContext['eat']['happiness']=12;}}
		],
	});
}
});
