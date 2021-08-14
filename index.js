const { MessageEmbed, Client } = require('discord.js');
const client = new Client({ fetchAllMembers: true });
const buttons = require('discord-buttons')
buttons(client);
const { MessageMenu, MessageMenuOption } = require('discord-buttons');

client.settings = {
  menu_role_1: "875486337019555860",
  menu_role_2: "875885690313920562",
  menu_role_3: "875885736145080340",
  menu_role_4: "876052180359082044",
  menu_role_5: "876063182337232906",
  menu_role_6: "876063739844112455",

  token: "",
  prefix: "."
};

client.on("message", async(message) => {
  let args = message.content.trim().split(" ")
  if(args[0] !== client.settings.prefix + "start" /* setup message */) { return false } else {

    let option_1 = new MessageMenuOption()
    .setLabel("Bırakmak İstediğin Rengi Seç")
    .setValue("1")
    .setDescription("Kırmızı Rol İçin")
    .setDefault()
    .setEmoji("❤️") //  you can add emoji next to the label

    let option_2 = new MessageMenuOption()
      .setLabel("Bırakmak İstediğin Rengi Seç")
      .setValue("2")
      .setDescription("Beyaz Rol İçin")
      .setDefault()
      .setEmoji("🤍") //  you can add emoji next to the label

    let option_3 = new MessageMenuOption()
      .setLabel("Bırakmak İstediğin Rengi Seç")
      .setValue("3")
      .setDescription("Siyah Rol İçin")
      .setDefault()
      .setEmoji("🖤") //  you can add emoji next to the label

    let option_4 = new MessageMenuOption()
      .setLabel("Bırakmak İstediğin Rengi Seç")
      .setValue("4")
      .setDescription("Mavi Rol İçin")
      .setDefault()
      .setEmoji("💙") //  you can add emoji next to the label

      let option_5 = new MessageMenuOption()
      .setLabel("Bırakmak İstediğin Rengi Seç")
      .setValue("5")
      .setDescription("Mor Rol İçin")
      .setDefault()
      .setEmoji("💜") //  you can add emoji next to the label

      let option_6 = new MessageMenuOption()
      .setLabel("Bırakmak İstediğin Rengi Seç")
      .setValue("6")
      .setDescription("Yeşil")
      .setDefault()
      .setEmoji("💚") //  you can add emoji next to the label

    let selection = new MessageMenu()
    .setID("selector")
    //.setMaxValue() maximum value if you type 1 for both, <user> can only select 1 role or option (probably)
    //.setMinValue() minumum value if you type 1 for both, <user> can only select 1 role or option (probably)
    .setPlaceholder("Select")
    .addOption(option_1)
    .addOption(option_2)
    .addOption(option_3)
    .addOption(option_4)
    .addOption(option_5)
    .addOption(option_6)

    
    /* var embed = new MessageEmbed()
    .setColor("RANDOM")
    //.setTitle("xd")
    //.setDescipriton("xd")
    let msg = await message.channel.send(embed, selection)
    */

    let msg = await message.channel.send("Aldığın Rolleri Bırakmak İçin Menüyü Kullan", selection); 
    

    client.on("clickMenu", async (menu) => {
      if(menu.message.id === msg.id) {
        menuselect(menu)
      }
    })
  };

async function menuselect(menu) {
  switch(menu.values[0]) {
      case "1":
          menu.reply.send("Başarıyla Kırmızı Rolünü Üzerinden Aldım", true)
         await menu.clicker.member.roles.remove(client.settings.menu_role_1)
        break;
          
      case "2":
          menu.reply.send("Başarıyla Beyaz Rolünü Üzerinden Aldım", true)
        await menu.clicker.member.roles.remove(client.settings.menu_role_2)
        break;
      case "3":
          menu.reply.send("Başarıyla Siyah Rolünü Üzerinden Aldım", true)
        await menu.clicker.member.roles.remove(client.settings.menu_role_3)
        break;
      case "4":
          menu.reply.send("Başarıyla Mavi Rolünü Üzerinden Aldım", true)
        await menu.clicker.member.roles.remove(client.settings.menu_role_4)
        break;
        case "5":
          menu.reply.send("Başarıyla Mor Rolünü Üzerinden Aldım", true)
        await menu.clicker.member.roles.remove(client.settings.menu_role_5)
        break;
        case "6":
          menu.reply.send("Başarıyla Yeşil Rolünü Üzerinden Aldım", true)
        await menu.clicker.member.roles.remove(client.settings.menu_role_6)
        break;
      default:
          
        break;
  }
}

});


client.login(client.settings.token)
  .then(() => console.log("\x1b[34m%s\x1b[1m", "[ Bot ] Discord API Botun tokenini doğruladı"))
  .catch(err => console.error("\x1b[31m%s\x1b[0m", "[ Bot ] Discord API Tokeni Doğrulayamıyor"))