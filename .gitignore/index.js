const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Æna ★ : ~help");
    console.log("Connectedç");
    bot.user.setNote("Found a New Horizon")
});

bot.login(process.env.Token1);

bot.on('guildMemberAdd', memberd => {//ENTREE 
  let porte_role = memberd.guild.roles.find("name", "porte");
  memberd.addRole(porte_role)
  const channelinn = memberd.guild.channels.find('name', "salle-des-commandes")
  const mbrduser = memberd.user
  var embedad = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(mbrduser.displayAvatarURL)
   .setTitle(`Bienvenue à Aena !`)
   .setDescription(`Bienvenue <@${memberd.user.id}> ! Nous t'invitons à aller lire le <#528935433984409611> !`)
   .addField(`Pour entrer sur ce serveur il te suffit d'entrer la commande :`, "``~enterAena``")
   .setFooter("Æna ★")
   channelinn.send(embedad);
  var pa = memberd.guild.memberCount
  var ma = String(pa)
  memberd.guild.channels.get("529300584784986115").setName(`Total Users: ${ma}`);
});


bot.on('message', msg => {//PORTE
  if(msg.content === "~enterAena"){
    let portee_role = msg.guild.roles.find("name", "porte");
    var mbrd = msg.member
    let new_role = mbrd.guild.roles.find("name", "Aena");
    if(!msg.member.roles.get('529001289258893333')){
      mbrd.addRole(new_role);
      mbrd.removeRole(portee_role);
      msg.channel.bulkDelete(1);
    const channelin = mbrd.guild.channels.find('name', "nouveaux-arrivants")
      let member = msg.author
      var embeda = new Discord.RichEmbed()
           .setColor(msg.guild.member(member).highestRole.color)
          .setThumbnail(member.displayAvatarURL)
          .setTitle(`Informations de ${member.username}.`)
          .addField(`Nom:`, member.username, true)
          .addField(`Id:`, member.id, true)
          .addField(`Bot:`, member.bot ? "Oui" : "Non", true)
          .addField("Game:", msg.guild.member(member).presence.game ? msg.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
          .addField("Surnom:", msg.guild.member(member).nickname ? msg.guild.member(member).nickname : "Aucun", true )
          .addField("Dernier message:", member.lastMessage, true)
          .addField(`Roles:`, msg.guild.member(member).roles.map(s => s).join(" | "), true)
          .setDescription(`<@${mbrd.user.id}> est entré(e) avec succés, Bienvenue à Æna ★`)
          .setFooter("Æna ★")
       channelin.send(embeda);

     const GG = mbrd.guild.channels.find('name', 'général')   
  var embed = new Discord.RichEmbed()
  .setColor('#7133FF')
  .setTitle("Bienvenue !")
  .setDescription(`:inbox_tray: **Bienvenue à <@${mbrd.user.id}> qui nous rejoint sur Æna ★ ! \n Je t’invite fortement à lire les <#469326888528248832> ainsi qu'à lire les <#473643368077852722> !!** `)
  .setFooter("Æna ★")
  return GG.send({embed})
   }else{
    msg.reply("Vous n'avez pas à utiliser cette commande !")
      }}
});


bot.on("guildMemberRemove", member => {//LEAVE
  var pa = member.guild.memberCount
  var ma = String(pa)
  member.guild.channels.get("529300584784986115").setName(`Total Users: ${ma}`);
  let serverTag = member.guild.name
  const GG = member.guild.channels.find('name', 'général')   
  var embed = new Discord.RichEmbed()
  .setColor('#7133FF')
  .setDescription(`:inbox_tray: <@${member.user.id}> **à quitté ${serverTag} , à la prochaine fois en espérant te revoir très bientôt !!** `)
  return GG.send({embed})
});


bot.on('message', message => {//Démarrage
    if (message.content === prefix + "start"){
      message.channel.sendMessage("Bot en cours d'éxecution !");
        };

    if (message.content === "~test"){
      message.channel.sendMessage("```Execution => test.exe```")
      setTimeout(() => {message.channel.sendMessage("``.``");}, 60 * 14)
      setTimeout(() => {message.channel.sendMessage("``.``");}, 60 * 14)
       setTimeout(() => {message.channel.sendMessage("``.``");}, 60 * 14)
       setTimeout(() => {message.channel.sendMessage("```OK```");}, 60 * 18)
        };
});


bot.on('message', msg => {//INFO
                  
          
 if(msg.content === "~help"){
  var embed1 = new Discord.RichEmbed()
  .setTitle("Liste des commandes :")
  .addField("**~test : **", "Tester le bot.")
  .addField("**~createchannel : **", "Créer vos propres channels !")
  .addField("**~sondage :**", "Faites voter vos idées !")
  .addField("**~link : **", "Un lien permanent du serveur vous sera envoyé !")
  .addField("**~modocmd**", "Affiche les commandes pour les modérateurs !")
  .addField("**~infobot : **", "Afficher quelques renseignement à propos du bot")
  .addField("**~infodiscord :**", "Infos à propos du serveur.")
  .addField("**~embed : **", "Créer des Embed.")
  .addField("**~avatar :**", "Afficher l'avatar de qui vous souhaitez.")
 .addField("**~userinfo :**", "Affiche pleins d'information au sujet du membre souhaité !")
 .addField("**~say :**", "Faites dire ce que vous souhaitez au bot !.")
 .addField("**~ping :**", "Indication du temps de latence du serveur")
  .addField("**~date :**", "Il vous sera indiqué la date actuelle !")
  .addField("**~listfun :**", "Afficher la liste des commandes.. inutile")
  .addField(" \n ***Bonne visite à Æna ★ !***", "**:D**")
  .setColor("#581845")
  .setAuthor("New Horizon")
  .setFooter("Aena")
  msg.channel.sendEmbed(embed1)        
  };     
              
 
if(msg.content === "~modocmd") { 
        var embed = new Discord.RichEmbed()
      .setTitle("Commande de modération")
      .addField("~clear <nombre>", "Effacer un nombre de message voulu")
      .addField("~mute <mention>", "Muter un membre du serveur")
      .addField("~kick <mention>", "Kick un membre du serveur")
      .addField("~ban <mention>", "Ban un membre du serveur")
      .setFooter("Æna ★")
      .setColor("#7133FF")
           msg.channel.sendEmbed(embed)
       };

 if(msg.content === "~infodiscord") { 
      let bicon = msg.author.displayAvatarURL;
      var embed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setTitle("Information du Discord")
    .addField("Nom du discord", msg.guild.name)
    .addField("Crée le", msg.guild.createdAt)
    .addField("Tu as rejoins le", msg.member.joinedAt)
    .addField("Utilisateur sur le discord", msg.guild.memberCount)
    .addField("Nombre de catégories et de salons", msg.guild.channels.size)
    .setFooter("Æna ★")
    .setColor("#1A0647")
         msg.channel.sendEmbed(embed)
     };

  if(msg.content === "~infobot"){
      let bicon1 = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
    .setTitle("Information du bot")
    .setColor("#1A0647")
    .setThumbnail(bicon1)
    .addField("Nom du bot", bot.user.username)
    .addField("Développeur", "<@387291278670430208>")
    .addField("Nombre de commande :", "**25**")
    .addField("Créer le", bot.user.createdAt)
    .addField("Pour toute aide : ", "``~help``");
       msg.channel.send(botembed);
    };

if(msg.content === "~listfun") { 
      var embed1 = new Discord.RichEmbed()
    .setTitle("Liste des commandes fun :")
    .addField("**~rndm : **", "Fait apparaitre un gif random !!.")
    .addField("**Hugs :**", "Faites des câlins !")
    .addField("**Et d'autres à venir..**", "Proposez vos idées..")
    .setColor("#1A0647")
       msg.channel.sendEmbed(embed1)
   };

   
  if (msg.content.startsWith("~userinfo")) {
    let member = msg.mentions.users.first() || msg.author;
    let userembed = new Discord.RichEmbed()
        .setColor(msg.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        .setTitle(`Informations de ${member.username}.`)
        .addField(`Nom:`, member.username, true)
        .addField(`Id:`, member.id, true)
        .addField(`Bot:`, member.bot ? "Oui" : "Non", true)
        .addField("Game:", msg.guild.member(member).presence.game ? msg.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Surnom:", msg.guild.member(member).nickname ? msg.guild.member(member).nickname : "Aucun", true )
        .addField("Dernier message:", member.lastMessage, true)
        .addField(`Roles:`, msg.guild.member(member).roles.map(s => s).join(" | "), true)
      msg.channel.send(userembed);
  };

  const date = new Date();
    let hour = date.getHours() +1;
    hour = (hour < 10 ? '0' : '') + hour;
    let min = date.getMinutes();
    min = (min < 10 ? '0' : '') + min;
    let sec = date.getSeconds();
    sec = (sec < 10 ? '0' : '') + sec;
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = (month < 10 ? '0' : '') + month;
    let day = date.getDate();
    day = (day < 10 ? '0' : '') + day;

   if(msg.content === "~date"){
    var embedsys = new Discord.RichEmbed()
    .setTitle('HORLOGE')
    .setColor('RANDOM')
    .addField(`__**Heure :**__`, `**${hour}h ${min}min ${sec}sec**`)
    .addField(`__**Date :**__`, `**${day}/${month}/${year}**`)
    .setAuthor("New Horizon")
    .setFooter("Æna ★")
    msg.channel.sendEmbed(embedsys)
};

  var pa = msg.guild.memberCount
  var ma = String(pa)
    if (msg.content === "--test") {
    msg.guild.channels.get("529300584784986115").setName(`Total Users: ${ma}`); 
    };
});

bot.on('message', message => { //Slice message

  if (message.content.startsWith("~say")) {
    message.delete()
    const str = message.content.substring("~say".length)
    message.channel.sendMessage(str)
  };

  if (message.content.split(" ")[0] == "~embed"){
    message.delete()
    var embed = new Discord.RichEmbed()
  .setColor("#FF7F50")  
  .setDescription(message.content.slice("~embed ".length))
    message.channel.send({embed});
  };

if (message.content.split(" ")[0] == "~sondage"){
    message.delete()
    var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**Idée de : ${message.author}** \n ${message.content.slice("~sondage ".length)} `);
    message.channel.send({embed}).then(embedMessage => {
    embedMessage.react("👍");
    embedMessage.react("👎");
})};
});

bot.on('message', message => { //OTHERS
  if(message.content === "~ping"){
    message.channel.sendMessage('Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
  };

  if(message.content === "~avatar"){
       message.reply("Merci de mentionner un utilisateur valide avec la commande ``~avatar <Utilisateur>``")
    }else{
       if(message.content.startsWith('~avatar')) {
        let user = message.mentions.users.first() || message.author;
           let embed = new Discord.RichEmbed()
           .setTitle(`Avatar de <@${user}>`)
         .setImage(user.avatarURL)
         .setColor('RANDOM')
           message.channel.send(embed);
         }};
});

bot.on('message', message => {//RANDOM
var randnum = 0

  function randomc(min, max){
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

if (message.content === "~rndm"){
  randomc()
  switch(randnum){
    case 1:
    var embed = new Discord.RichEmbed()
    .setDescription("1")
    .setImage("https://media.giphy.com/media/l44QvKoQuUD3xPZKg/giphy.gif")
   .setColor("RANDOM")
message.channel.sendEmbed(embed)
    break;
    case 2:
    var embed = new Discord.RichEmbed()
    .setDescription("2")
    .setImage("https://media.giphy.com/media/nwCz29GZlx0HfZZIwF/giphy.gif")
   .setColor("RANDOM")
message.channel.sendEmbed(embed)
    break;
    case 3:
    var embed = new Discord.RichEmbed()
    .setDescription("3")
    .setImage("https://media.giphy.com/media/zcwCC4GqKznj2/giphy.gif")
   .setColor("RANDOM")
message.channel.sendEmbed(embed)
    break;
  }
};

var randhug = 0

  function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(4);
    randhug = Math.floor(Math.random() * (max - min +1)+ min);
}

if (message.content === "Hugs"){
  random()

  switch(randhug){
    case 1:
    var embed = new Discord.RichEmbed()
    .setDescription("***Tiens un câlin ! :D***")
   .setColor("#8800fc")
message.channel.sendEmbed(embed)
break;
case 2:
var embed = new Discord.RichEmbed()
    .setDescription("***Non ?! T'as cru que j'étais ton pote ?*** ")
   .setColor("#000000")
message.channel.sendEmbed(embed)
break;
case 3:
var embed = new Discord.RichEmbed()
    .setDescription("***Petit câlin - qui fait du bien.~***")
   .setColor("#C71585")
message.channel.sendEmbed(embed)
break;
case 4:
var embed = new Discord.RichEmbed()
    .setDescription("***Full of hugs for you!*** ")
   .setColor("#FFB6C1")
message.channel.sendEmbed(embed)
break;
  }
}
      var randlovecalc = 0

      function random(min, max){
        min = Math.ceil(0);
        max = Math.floor(100);
        randlovecalc = Math.floor(Math.random() * (max - min +1)+ min);
    }
  
    if(message.content === "~lovecalc"){
      message.reply("Merci d'utiliser la commande correctement avec ``~lovecalc <utilisateur>``")
    }else{
      if(message.content.startsWith("~lovecalc")){
        let lovecal = String(randlovecalc)
        let memberd = message.mentions.members.first();
        var colorlove = "RANDOM"
        var textlove = "abc"
        if(randlovecalc >= 50){
          colorlove = "#00FF00"
          textlove = "A croire qu'ils sont fait l'un pour l'autre !"
        }
        if((randlovecalc < 50) && (randlovecalc >= 25)){
          colorlove = "#FFA500"
          textlove ="Qui ne tente rien n'a rien."
        }
        if((randlovecalc < 25) && (randlovecalc >= 1)){
          colorlove = "#FF0000"
          textlove = "Rien à faire.. Clairement."
        }
        var embedlove = new Discord.RichEmbed()
        .setColor(`${colorlove}`)
        .setDescription(`Le love score de ${message.author} avec ${memberd} est de ${lovecal} :heartbeat: !!. \n ${textlove}`)
        message.channel.sendEmbed(embedlove)
      }else{
        message.reply("Merci d'utiliser la commande correctement avec ``~lovecalc <utilisateur>``")
      }
    }
});

bot.on('message', msg => {//MODOCMD

  if(msg.content === "~clear"){
    msg.reply("Merci de préciser le nombre de message à supprimer avec la commande ``~clear <nombre>")
  }else{
    if(msg.content.startsWith("~clear")){
      if(!msg.member.hasPermission("KICK_MEMBERS")){
        msg.reply("Vous n'avez pas la permission")
      }else{
        var limita = msg.content.slice(7)
        var limitao = parseInt(limita)
        msg.channel.fetchMessages()
            .then(msg => {
              msg.channel.bulkDelete(limitao + 1);
              messagesDeleted = msg.array().length
              var embedw = new Discord.RichEmbed()
           .setColor('#FF4500')
           .setDescription(`Messages supprimés avec succés. \n Total  des messages supprimés : ` + limitao)
           msg.channel.sendEmbed(embedw)
           setTimeout(() => {msg.channel.bulkDelete(1);}, 60 * 50)
            })
        }}};

  if (msg.content === "~mute"){
    msg.reply("Vous devez mentionner un utilisateur à mute avec ``!!mute <heures> <mention>``");
 }else{
     if(msg.content.startsWith("!mute")){
       if(!msg.member.hasPermission("KICK_MEMBERS")){
         msg.reply("Vous n'avez pas la permission de mute !")
       }else{
         let args = msg.content.split(' ')
         if(Number.isInteger(parseInt(args[1]))){
           let arg = parseInt(args[1])
          let mute_role = msg.guild.roles.find("name", "Muted");
           let memberd = msg.mentions.members.first();
           memberd.addRole(mute_role)
           setTimeout(() => {memberd.removeRole(mute_role);}, 3600000 * arg)
           var embedsys = new Discord.RichEmbed()
           .setColor('#FFFF63')
           .setTitle(`Mute de ${args[1]} heure(s) effectué avec succés !`)
           .setDescription(`${memberd} s'est fait mute par ${msg.author} le temps de ${args[1]} heure(s)..`)
           .setImage("https://media.giphy.com/media/zcwCC4GqKznj2/giphy.gif")
           .setFooter("Aena ★")
           .setAuthor("New Horizon")
           msg.channel.sendEmbed(embedsys)
        }else{
       msg.reply("Merci de mentionner une durée valide avec la commande ``!!mute <heures> <@utilisateur>``.")
     }}}};

  if (msg.content === "~ban"){
      msg.reply("Vous devez mentionner un utilisateur à ban avec ``~ban <nom>``");
     }else{
        if(msg.content.startsWith("~ban")){
           if(!msg.member.hasPermission("BAN_MEMBERS")){
               msg.reply("Vous n'avez pas la permission de ban !")
            }else{
              let memberd = msg.mentions.members.first();
              memberd.ban("GG")
              var embedsys = new Discord.RichEmbed()
              .setTitle("BAN effectué avec succés !")
              .setColor('#CC1714')
              .setDescription(`${memberd} s'est fait ban par ${msg.author} ! Ce n'est qu'un au revoir !!`)
              .setImage("https://media.giphy.com/media/l44QvKoQuUD3xPZKg/giphy.gif")
              .setFooter("Æna ★")
              .setAuthor("New Horizon")
              msg.channel.sendEmbed(embedsys)
              var pa = msg.guild.memberCount
              var ma = String(pa)
              msg.guild.channels.get("529300584784986115").setName(`Total Users: ${ma}`);
                }}}

if (msg.content === "~kick"){
    msg.reply("Vous devez mentionner un utilisateur à kick avec ``~kick <nom>``");
  }else{
    if(msg.content.startsWith("~kick")){
      if(!msg.member.hasPermission("KICK_MEMBERS")){
        msg.reply("Vous n'avez pas la permission de kick !")
      }else{
          let memberd = msg.mentions.members.first();
          memberd.kick("GG")
           var embedsys = new Discord.RichEmbed()
           .setTitle('KICK effectué avec succés !')
           .setColor('#FF9300')
           .setDescription(`${memberd} s'est fait Kick par ${msg.author} ! A la prochaine !`)
            .setImage("https://media.giphy.com/media/nwCz29GZlx0HfZZIwF/giphy.gif")
           .setAuthor("New Horizon")
            .setFooter("Æna ★")
             msg.channel.sendEmbed(embedsys)
             var pa = msg.guild.memberCount
             var ma = String(pa)
            msg.guild.channels.get("529300584784986115").setName(`Total Users: ${ma}`);
                    }}}
});

bot.on('message', msg => { //CHANNEL
  if(msg.content === "~createchannel"){
    var embedz = new Discord.RichEmbed()
    .setTitle("Création de channel ")
    .setDescription("***Ces commandes sont uniquemet utilisables par les utilisateurs ayant la permission de \"Manage Channels\"***")
    .addField("**~createtchannel : **", "Créer votre channel textuel avec : ``~createtchannel <nom>``")
    .addField("**~tempochannel : **", "Créer votre channel vocal privé avec : ``~tempochannel <\"nom\"> <nombre>``")
    .addField("**~deletechannel : **", "Supprimer votre channel après l'avoir utilisé avec : ``~deletechannel <nom>``")
    .setFooter(`Toutes ces commandes sont à utiliser dans le channel invocation !`)
    .setColor("#FF85E9")
       msg.channel.sendEmbed(embedz)
   };

   if(msg.content === "~createtchannel"){
    msg.reply("Merci de mentionner un nom de channel avec la commande  ``~createtchannel <Nom>`` !")
    }else{
       if(msg.content.startsWith('~createtchannel')) {
         if(!msg.member.hasPermission("MANAGE_CHANNELS")){
           msg.reply("Vous n'avez pas la permission.")
        }else{
        const argsws = msg.content.slice(16)
        const args2t = argsws.toLocaleLowerCase()
        msg.guild.createChannel(`${args2t}`, 'text',).then(channel => {
        channel.setParent('526185406245503009')
        var embedvv = new Discord.RichEmbed()
       .setColor("RANDOM")  
       .setDescription(`Votre channel textuel <#${channel.id}> a bien été créé ! `)
       msg.channel.send(embedvv)
       const channelrc = msg.guild.channels.find('name', `${args2t}`)
        var embedd = new Discord.RichEmbed()
        .setColor('#FF4500')
        .setTitle(`${argsws}`)
        .setDescription(`**Voici votre channel ! <@${msg.author.id}>**`)
        channelrc.sendEmbed(embedd)
    })
}}};

if(msg.content === "~deletechannel"){
  msg.reply("Merci de mentionner un channel avec la commande ``~deletechannel <channel>`` !")
}else{
  if(msg.content.startsWith("~deletechannel")){
    if(!msg.member.hasPermission("MANAGE_CHANNELS")){
      msg.reply("Vous n'avez pas pas la permission.")
    }else{
      var argss = msg.content.slice(15)
      var argss2 = argss.toLocaleLowerCase()
      var channelrss = msg.guild.channels.find('name', `${argss2}`)
      if(!msg.guild.channels.exists('name', `${argss2}`)){
        msg.reply("Channel introuvable") 
      }else{
      const channelip = msg.guild.channels.find('name', `invocation`)
       channelrss.delete(`${argss2}`, 'text',).then(msg => {
         var embedss = new Discord.RichEmbed()
         .setColor('#FF85E9')
         .setDescription(`Le channel #${argss} a bien été supprimé !`)
         channelip.sendEmbed(embedss)
      })}
    }}};

    class TempChannel {
      constructor(msg) {
          this.msg = msg;
          this.guild = msg.guild;
          this.channel;
          this.namer;
          this.max;
  
          this.getArgs();
          this.create();
          this.interval = setInterval(() => {this.autodelete()}, 1000 * 60 * 1);
      }
  
      getArgs() {
          this.namer = this.msg.content.split('"')[1];
          this.max = Number(this.msg.content.split('"')[2].split(" ")[1]);
      }
  
      create() {
          this.guild.createChannel(this.namer, "voice")
              .then(chan => {
                  this.get(chan);
              })
              .catch(console.error);
      }
  
      get(chan) {
          this.channel = chan;
          this.channel.setParent("526185406245503009")
              .catch(console.catch);
  
          this.channel.edit({
              userLimit: this.max
          })
      }
  
      autodelete() {
          if (this.channel.members.array().length == 0) {
              this.delete();
              clearInterval(this.interval);
          }
      }
  
      delete() {
          this.channel.delete();
      }};

if (msg.content == '~tempochannel'){
      msg.reply("Merci d'utiliser correctement la commande avec ``~tempochannel <\"nom\"> <nombre>``");
  }else{
    if(msg.content.startsWith('~tempochannel')) {
      if(!msg.member.hasPermission("MANAGE_CHANNELS")){
       msg.reply("Vous n'avez pas la permission.")
      }else{
        var num = msg.content.slice.length
        if(num === 2){
          new TempChannel(msg);
        var embed1 = new Discord.RichEmbed()
        .setDescription("***Channel créé avec succés !***")
        .setColor("#8800fc")
           msg.channel.sendEmbed(embed1).catch(err => console.log(err));
          }else{
             msg.reply("Merci d'utiliser correctement la commande avec ``~tempochannel <\"nom\"> <nombre>``.")
          }}}}
});

bot.on('message', msg => {
  if(msg.content === "~link"){
    var embed1 = new Discord.RichEmbed()
        .setTitle(`Voici ton lien vers Aena !`)
        .setDescription(`https://discord.gg/crWm7yg`)
        .setThumbnail("https://cdn.discordapp.com/icons/468475819682168872/d4b8338a5f026b2b98d52d1287f78cd4.jpg?size=128")
        .setImage('https://cdn.discordapp.com/attachments/474923379590168596/516294112375209999/Multi_Color_Bar.gif')
        .setColor("RANDOM")
        .setFooter("Æna ★")
           msg.author.sendEmbed(embed1).then(msg =>{
             msg.reply("Mp envoyé !!")
           })
}

});
