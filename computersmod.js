// {modData:['Computers mod' Grbldrbl 'a mod that adds computer tech.' '{customSheet: "https://grbldrbl.github.io/orteil-legacy-mods/gmailSheet.png"}'] knows:[{name:computertech displayName:'computer tech' icon:[0 0] cost:{insight:10} req:{language:true} desc:ghgkuihkjvh category:computers startWith:'0' chance:'1' tutorialMesg:jnj}] units:[] resources:[]}
G.AddData({
  name: "Computers mod",
  author: "Grbldrbl",
  desc: "a mod that adds computer tech.",
  engineVersion: 1,
  sheets: {"customSheet":'https://grbldrbl.github.io/orteil-legacy-mods/gmailSheet.png'},
	func:function() {
		G.unitCategories.unshift({
			id:'Compyoutah-tek',
			name:'computers'
});
    new G.Tech({name:'computertech',displayName:'computer tech',icon:['customSheet', 0,0],cost:{insight:1},req:{language:true},desc:'adds [computer]s.',category:'computers',startWith:'0',chance:'1',tutorialMesg:'jnj'})

	new G.unit
			name:'computer',
			displayName:'Computer',
			desc:'A computer.',
			icon:['customSheet', 0,0],
			cost:{},
			req:{'computertech':true},
			use:{
				'land':1,
			},
			gizmos:true,
		  category:'Compyoutah-tek',
});

  }
});
