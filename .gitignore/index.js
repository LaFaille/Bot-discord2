const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = '?'


client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'kick') {
     if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
     if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
     member.kick()
     message.channel.send('**' + member.user.username + '** a été exclue :white_check_mark:')
  }

})



client.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
      return channel.send('𝙱𝚘𝚗𝚓𝚘𝚞𝚛𝚜 𝚓𝚎𝚞𝚗𝚎 𝚗𝚎𝚐𝚛𝚘 ' + member.displayName + ' 𝚎𝚝 𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚞𝚎 𝚜𝚞𝚛 𝚕𝚎 𝚍𝚒𝚜𝚌𝚘𝚛𝚍 𝙵𝚊𝚌𝚝𝚒𝚘𝚗 𝙼𝟶𝚗𝚜𝚝𝟹𝚛 ! :fire: 𝚃𝚞 𝚏𝚊𝚒𝚜 𝚞𝚗𝚎 𝚋ê𝚝𝚒𝚜𝚎 Tes mort  𝚋𝚒𝚎𝚗 𝚏𝚘𝚛𝚝 𝚌 𝚎𝚜𝚝 𝚌𝚕𝚊𝚒𝚛𝚎 ! 𝚁è𝚐𝚕𝚎𝚜 𝚁𝚎𝚜𝚙𝚎𝚌𝚝𝚎𝚛 𝚕’𝚎𝚜 𝚊𝚞𝚝𝚛𝚎𝚜 𝚗𝚎 𝚙𝚊𝚜 𝚒𝚗𝚜𝚞𝚕𝚝𝚎𝚛 ê𝚝𝚛𝚎 𝚙𝚘𝚕𝚒𝚜  𝙸𝚗𝚜𝚞𝚕𝚝e 𝚍𝚎 𝚗ô𝚝𝚛𝚎 𝚏𝚊𝚌𝚝𝚒𝚘𝚗 tes 𝚋𝚊𝚗 Propos nazi autorisée :star: ')
  }).catch(console.error)


})



client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'ban') {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un utilisateur a calmez :x:")
    if (!member.bannable) return message.channel.send("Je ne peux pas calmez cet utilisateur :fire: ")
    member.ban()
    message.channel.send('**' + member.user.username + '** a été calmez :white_check_mark:')
 }
})




client.on('ready', function(){
    client.user.setActivity('M0nst3r Faction!!')})

client.on('ready', () => {
  console.log(`Connectée a ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'salut') {
    msg.reply('Salut jeune Negro');
  }
});

client.on('message', msg => {
  if (msg.content === 'Tu fais quoi BOT') {
    msg.reply('Je viole ta mere, monte pas dans la chambre!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sava') {
    msg.reply('Mieux que toi vue ta geuele');
  }
})


client.login("Njg2Nzk4NzExMDU3MDIzMDA5.Xmmtuw.Q_YebHqi4B268zC_rGpPPLFEc78");






