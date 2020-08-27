const Discord = require('discord.js'),
      request = require('request-promise'),
      config = require('./config.json'),
      { MessageEmbed } = require('discord.js');

const FortniteAPI = require("fortnite-api-com");
const cnfg = {
  language: "en"
};
var Fortnite = new FortniteAPI(cnfg);

const client = new Discord.Client();

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

client.on('ready', () => {
  console.log('Ready.');
});

client.on('message', async message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
const args = message.content.slice(config.prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if (command === 'say') {
  const content = args.slice(0).join(' ');
  if (!content) return message.channel.send('Please provide something to say.');
  message.delete();
  
  message.channel.send(content);
}
if (command === 'leaked') {
const FortniteAPI = require("fortnite-api-io");
const fortniteAPI = new FortniteAPI("7d283ce3-916c915b-dc4e615e-e3d25c1c"); // 7d283ce3-916c915b-dc4e615e-e3d25c1c :joy::joy::joy:


  let skin = [];
  let backpack = [];
  let pickaxe = [];
  let emote = [];
  let emoji = [];
  let wrap = [];
  let glider = [];

    const upcomingItems = await fortniteAPI.listUpcomingItems('en');

    upcomingItems.items.map((o, index) => {
      if (o.type === 'backpack') {
        backpack.push(o.name)
      }

      if (o.type === 'outfit') {
        skin.push(o.name);
      }

      if (o.type === 'emote') {
        emote.push(o.name);
      }

      if (o.type === 'pickaxe') {
        pickaxe.push(o.name);
      }

      if (o.type === 'wrap') {
        wrap.push(o.name);
      }

      if (o.type === 'emoji') {
        emoji.push(o.name);
      }

      if (o.type === 'glider') {
        glider.push(o.name);
      }

    })  
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Leaked')
  if (skin) embed.addField(`- Skins (${skin.length})`, skin.join('\n'));
  if (emote) embed.addField(`- Emotes (${emote.length})`, `${emote.join('\n')}`);
  if (backpack) embed.addField(`- Backpacks (${backpack.length})`, `${backpack.join('\n')}`);
  if (pickaxe) embed.addField(`- Pickaxes (${pickaxe.length})`, `${pickaxe.join('\n')}`);
  if (wrap) embed.addField(`- Wraps (${wrap.length})`, `${wrap.join('\n')}`);
  if (glider) embed.addField(`- Gliders (${glider.length})`, `${glider.join('\n')}`);
  
  message.channel.send(embed);
}
if (command === 'shop') {
      Fortnite.BRShop()
.then(async res => {
  let embed = new Discord.MessageEmbed()
  .setColor("BLURPLE")
  .setTitle(`Shop`) //
  .setDescription(`${res.data.date}`)
        if (res.data.featured.entries) {
        embed.addField(`**- Featured**`, res.data.featured.entries.map(
                  (o, index) =>
                    `${index + 1}. ${o.items[0].name} - ${o.finalPrice} <:vbux:747505712757997578>`
                )
               .join("\n"), true)
      }
      if (res.data.daily.entries) {
        embed.addField(`**- Daily**`, res.data.daily.entries.map(
                  (o, index) =>
                    `${index + 1}. ${o.items[0].name} - ${o.finalPrice} <:vbux:747505712757997578>`
                )
               .join("\n"), true)
      }

      if (res.data.specialFeatured) {
        embed.addField(`**- Special Featured**`, res.data.specialFeatured.entries.map(
                  (o, index) =>
                    `${index + 1}. ${o.items[0].name} - ${o.finalPrice} <:vbux:747505712757997578>`
                )
               .join("\n"))
      }

      if (res.data.specialDaily) {
        embed.addField(`**- Special Daily**`, res.data.specialDaily.entries.map(
                  (o, index) =>
                    `${index + 1}. ${o.items[0].name} - ${o.finalPrice} <:vbux:747505712757997578>`
                )
               .join("\n"))
      }

    embed.setTimestamp()
    embed.setFooter(client.user.username)
  message.channel.send(embed);
      return;
      
}).catch(err => {
  console.log(err);
});
}
if (command === 'cosmetic') {

  if (!message.content.toLowerCase().includes('-id')) {
    let content = args.slice(0).join(" ");
    let url = `https://benbotfn.tk/api/v1/cosmetics/br/search/all?lang=en&searchLang=en&matchMethod=contains&name=${content}`;
    
      async function getCosmetic(name) {
    
      var data = await request(url, {json: true}).catch(e => {
          throw e.response.body.error;
      });
      return data;
  }
        
    getCosmetic(content).then(r => {
      if (!content) {
        return message.channel.send(`No cosmetic was provided.`)
      }

      if (r > r[25]) {
        return message.channel.send(`Too many cosmetics were found.`)
      }
      if (r > r[0]) {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Multiple Cosmetics Found`)
        .setDescription(`**Choose one of these cosmetics** \n` +
              r
                .map(
                  (o, index) =>
                    `${index}. [${o.name}](${o.icons.icon}), ${o.id}`
                ).slice(15)
                .join("\n"))
        .setTimestamp()
        message.channel.send(embed);

         // First argument is a filter function - which is made of conditions
         // m is a 'Message' object
         message.channel.awaitMessages(m => m.author.id == message.author.id,
                 {max: 1, time: 10000}).then(collected => {

                         // only accept messages by the user who sent the command
                         // accept only 1 message, and return the promise after 30000ms = 30s

                         // first (and, in this case, only) message of the collection
                         if (collected.first().content.toLowerCase() in r) {
                           let content = collected.first().content

                           let embed = new Discord.MessageEmbed()
                           .setThumbnail(r[content].icons.icon)
                           .setTitle(`Cosmetic`)
                       if (r[content].name) {
                           embed.addField(`Name`, `${r[content].name}`, true)
                       }
                       if (r[content].description) {
                           embed.addField(`Description`, `${r[content].description}`, true)
                       }
                       if (r[content].rarity) {
                           embed.addField(`Rarity`, `${r[content].rarity}`, true)
                       }
                           embed.setTimestamp()
                       if (r[content].set) {
                       embed.addField(`Set`, `${r[content].set}`, true);
                       }
                       if (r[content].series) {
                         embed.addField(`Series`, `${r[content].series.name}`, true)
                       }
                           if (r[content].id) {
                           embed.addField(`ID`, `${r[content].id}`)
                           }
                           if (r[content].path) {
                           embed.addField(`Path`, `${r[content].path}`, true)
                           }
                           if (r[content].variants) {
                             r[content].variants.forEach(v => {
                               // ${res.data.variants[0].options[0].image}
                               embed.addField(
                                 `(${v.type}) Variants (${v.channel})`,
                                 v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
                               );
                             });
                           }

                           if (r[content].gameplayTags) {
                             embed.addField(`Tags`, `\`\`\`css\n${r[content].gameplayTags.join("\n")}\`\`\``)
                           }

                           if (r[content].rarity === "Common") {
                             embed.setColor("#000000");
                           }
                           if (r[content].rarity === "Uncommon") {
                             embed.setColor("#17ff00");
                           }
                           if (r[content].rarity === "Rare") {
                             embed.setColor("#008fff");
                           }
                           if (r[content].rarity === "Epic") {
                             embed.setColor("#ff00e7");
                           }
                           if (r[content].rarity === "Legendary") {
                             embed.setColor("#fff205");
                           }
                           if (r[content].rarity === "Icon Series") {
                             embed.setColor("#008fff");
                           }
                          return message.channel.send(embed)
                         }


                         else
                      embed = new Discord.MessageEmbed()
                      .setTitle("Error")
                      .setColor("#ffdf00")
                      .setDescription(`${collected.first().content} is not a valid option.`)
                      .setTimestamp()
                      return message.channel.send(embed);
                 }).catch((err) => {
                         console.log(err)
                 });
      } else {

          let embed = new Discord.MessageEmbed()
          if (r[0].icons.icon) {
          embed.setThumbnail(r[0].icons.icon)
          }
          embed.setTitle(`Cosmetic`)
          embed.addField(`Name`, `${r[0].name}`, true)
          embed.addField(`Description`, `${r[0].description}`, true)
          embed.addField(`Rarity`, `${r[0].rarity}`, true)
          embed.setTimestamp()

      if (r[0].set) {
      embed.addField(`Set`, `${r[0].set}`, true);
      }
      if (r[0].series) {
        embed.addField(`Series`, `${r[0].series.name}`, true)
      }
          embed.addField(`ID`, `${r[0].id}`)
          embed.addField(`Path`, `${r[0].path}`, true)
          if (r[0].variants) {
            r[0].variants.forEach(v => {
              // ${res.data.variants[0].options[0].image}
              embed.addField(
                `(${v.type}) Variants (${v.channel})`,
                v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
              );
            });
          }
       if (r[0].gameplayTags) {
         embed.addField(`Tags`, `\`\`\`css\n${r[0].gameplayTags.join("\n")}\`\`\``)
       }

          if (r[0].rarity === "Common") {
            embed.setColor("#000000");
          }
          if (r[0].rarity === "Uncommon") {
            embed.setColor("#17ff00");
          }
          if (r[0].rarity === "Rare") {
            embed.setColor("#008fff");
          }
          if (r[0].rarity === "Epic") {
            embed.setColor("#ff00e7");
          }
          if (r[0].rarity === "Legendary") {
            embed.setColor("#fff205");
          }
          if (r[0].rarity === "Icon Series") {
            embed.setColor("#008fff");
          }

          message.channel.send(embed)
    }}).catch(e => {
      console.log(e)
      message.channel.send(`No cosmetic was found for: ${content}`)
    })
  } else if (message.content.toLowerCase().includes('-id')) {

    let content = args[0]
        let url = `https://benbotfn.tk/api/v1/cosmetics/br/search/all?lang=en&searchLang=en&matchMethod=contains&name=${content}`
        
          async function getCosmetic(name) {
    
      var data = await request(url, {json: true}).catch(e => {
          throw e.response.body.error;
      });
      return data;
  }
        
    getCosmetic(content).then(r => {
      if (!content) {
        return message.channel.send(`No cosmetic was provided.`)
      }

      if (r > r[25]) {
        return message.channel.send(`Too many cosmetics found, please be more specific.`)
      }
      if (r > r[0]) {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Multiple Cosmetics Found`)
        .setDescription(`**Choose one of the cosmetics below by sending the number.** \n` +
              r
                .map(
                  (o, index) =>
                    `${index}. [${o.name}](${o.icons.icon}), ${o.id}`
                ).slice(15)
                .join("\n"))
        .setTimestamp()
        message.channel.send(embed);

         // First argument is a filter function - which is made of conditions
         // m is a 'Message' object
         message.channel.awaitMessages(m => m.author.id == message.author.id,
                 {max: 1, time: 10000}).then(collected => {

                         // only accept messages by the user who sent the command
                         // accept only 1 message, and return the promise after 30000ms = 30s

                         // first (and, in this case, only) message of the collection
                         if (collected.first().content.toLowerCase() in r) {
                           let content = collected.first().content

                           let embed = new Discord.MessageEmbed()
                           .setThumbnail(r[content].icons.icon)
                           .setTitle(`Cosmetic`)
                       if (r[content].name) {
                           embed.addField(`Name`, `${r[content].name}`, true)
                       }
                       if (r[content].description) {
                           embed.addField(`Description`, `${r[content].description}`, true)
                       }
                       if (r[content].rarity) {
                           embed.addField(`Rarity`, `${r[content].rarity}`, true)
                       }
                           embed.setTimestamp()
                       if (r[content].set) {
                       embed.addField(`Set`, `${r[content].set}`, true);
                       }
                       if (r[content].series) {
                         embed.addField(`Series`, `${r[content].series.name}`, true)
                       }
                           if (r[content].id) {
                           embed.addField(`ID`, `${r[content].id}`)
                           }
                           if (r[content].path) {
                           embed.addField(`Path`, `${r[content].path}`, true)
                           }
                           if (r[content].variants) {
                             r[content].variants.forEach(v => {
                               // ${res.data.variants[0].options[0].image}
                               embed.addField(
                                 `(${v.type}) Variants (${v.channel})`,
                                 v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
                               );
                             });
                           }

                           if (r[content].gameplayTags) {
                             embed.addField(`Tags`, `\`\`\`css\n${r[content].gameplayTags.join("\n")}\`\`\``)
                           }

                           if (r[content].rarity === "Common") {
                             embed.setColor("#000000");
                           }
                           if (r[content].rarity === "Uncommon") {
                             embed.setColor("#17ff00");
                           }
                           if (r[content].rarity === "Rare") {
                             embed.setColor("#008fff");
                           }
                           if (r[content].rarity === "Epic") {
                             embed.setColor("#ff00e7");
                           }
                           if (r[content].rarity === "Legendary") {
                             embed.setColor("#fff205");
                           }
                           if (r[content].rarity === "Icon Series") {
                             embed.setColor("#008fff");
                           }
                          return message.channel.send(embed)
                         }


                     else
                      embed = new Discord.MessageEmbed()
                      .setTitle("Error")
                      .setColor("#ffdf00")
                      .setDescription(`${collected.first().content} is not a valid option.`)
                      .setTimestamp()
                      return message.channel.send(embed);
                 }).catch((err) => {
                         console.log(err)
                 });
      } else {


          let embed = new Discord.MessageEmbed()
          .setThumbnail(r[0].icons.icon)
          .setTitle(`Cosmetic`)
          embed.addField(`Name`, `${r[0].name}`, true)
          embed.addField(`Description`, `${r[0].description}`, true)
          embed.addField(`Rarity`, `${r[0].rarity}`, true)
          embed.setTimestamp()

      if (r[0].set) {
      embed.addField(`Set`, `${r[0].set}`, true);
      }
      if (r[0].series) {
        embed.addField(`Series`, `${r[0].series.name}`, true)
      }
          embed.addField(`ID`, `${r[0].id}`)
          embed.addField(`Path`, `${r[0].path}`, true)
          if (r[0].variants) {
            r[0].variants.forEach(v => {
              // ${res.data.variants[0].options[0].image}
              embed.addField(
                `(${v.type}) Variants (${v.channel})`,
                v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
              );
            });
          }
       if (r[0].gameplayTags) {
         embed.addField(`Tags`, `\`\`\`css\n${r[0].gameplayTags.join("\n")}\`\`\``)
       }

          if (r[0].rarity === "Common") {
            embed.setColor("#000000");
          }
          if (r[0].rarity === "Uncommon") {
            embed.setColor("#17ff00");
          }
          if (r[0].rarity === "Rare") {
            embed.setColor("#008fff");
          }
          if (r[0].rarity === "Epic") {
            embed.setColor("#ff00e7");
          }
          if (r[0].rarity === "Legendary") {
            embed.setColor("#fff205");
          }
          if (r[0].rarity === "Icon Series") {
            embed.setColor("#008fff");
          }

          message.channel.send(embed)
    }}).catch(e => {
      console.log(e)
      message.channel.send(`No cosmetic was found for: ${content}`)
    })
}
}
      
      if (command === 'skin') {

  if (!message.content.toLowerCase().includes('-id')) {
    let content = args.slice(0).join(" ");
    let url = `https://benbotfn.tk/api/v1/cosmetics/br/search/all?lang=en&searchLang=en&matchMethod=contains&name=${content}&backendType=AthenaCharacter`;
    
      async function getCosmetic(name) {
    
      var data = await request(url, {json: true}).catch(e => {
          throw e.response.body.error;
      });
      return data;
  }
        
    getCosmetic(content).then(r => {
      if (!content) {
        return message.channel.send(`No cosmetic was provided.`)
      }

      if (r > r[25]) {
        return message.channel.send(`Too many cosmetics were found.`)
      }
      if (r > r[0]) {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Multiple Cosmetics Found`)
        .setDescription(`**Choose one of these cosmetics** \n` +
              r
                .map(
                  (o, index) =>
                    `${index}. [${o.name}](${o.icons.icon}), ${o.id}`
                )
                .join("\n"))
        .setTimestamp()
        message.channel.send(embed);

         // First argument is a filter function - which is made of conditions
         // m is a 'Message' object
         message.channel.awaitMessages(m => m.author.id == message.author.id,
                 {max: 1, time: 10000}).then(collected => {

                         // only accept messages by the user who sent the command
                         // accept only 1 message, and return the promise after 30000ms = 30s

                         // first (and, in this case, only) message of the collection
                         if (collected.first().content.toLowerCase() in r) {
                           let content = collected.first().content

                           let embed = new Discord.MessageEmbed()
                           .setThumbnail(r[content].icons.icon)
                           .setTitle(`Cosmetic`)
                       if (r[content].name) {
                           embed.addField(`Name`, `${r[content].name}`, true)
                       }
                       if (r[content].description) {
                           embed.addField(`Description`, `${r[content].description}`, true)
                       }
                       if (r[content].rarity) {
                           embed.addField(`Rarity`, `${r[content].rarity}`, true)
                       }
                           embed.setTimestamp()
                       if (r[content].set) {
                       embed.addField(`Set`, `${r[content].set}`, true);
                       }
                       if (r[content].series) {
                         embed.addField(`Series`, `${r[content].series.name}`, true)
                       }
                           if (r[content].id) {
                           embed.addField(`ID`, `${r[content].id}`)
                           }
                           if (r[content].path) {
                           embed.addField(`Path`, `${r[content].path}`, true)
                           }
                           if (r[content].variants) {
                             r[content].variants.forEach(v => {
                               // ${res.data.variants[0].options[0].image}
                               embed.addField(
                                 `(${v.type}) Variants (${v.channel})`,
                                 v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
                               );
                             });
                           }

                           if (r[content].gameplayTags) {
                             embed.addField(`Tags`, `\`\`\`css\n${r[content].gameplayTags.join("\n")}\`\`\``)
                           }

                           if (r[content].rarity === "Common") {
                             embed.setColor("#000000");
                           }
                           if (r[content].rarity === "Uncommon") {
                             embed.setColor("#17ff00");
                           }
                           if (r[content].rarity === "Rare") {
                             embed.setColor("#008fff");
                           }
                           if (r[content].rarity === "Epic") {
                             embed.setColor("#ff00e7");
                           }
                           if (r[content].rarity === "Legendary") {
                             embed.setColor("#fff205");
                           }
                           if (r[content].rarity === "Icon Series") {
                             embed.setColor("#008fff");
                           }
                          return message.channel.send(embed)
                         }


                         else
                      embed = new Discord.MessageEmbed()
                      .setTitle("Error")
                      .setColor("#ffdf00")
                      .setDescription(`${collected.first().content} is not a valid option.`)
                      .setTimestamp()
                      return message.channel.send(embed);
                 }).catch((err) => {
                         console.log(err)
                 });
      } else {

          let embed = new Discord.MessageEmbed()
          if (r[0].icons.icon) {
          embed.setThumbnail(r[0].icons.icon)
          }
          embed.setTitle(`Cosmetic`)
          embed.addField(`Name`, `${r[0].name}`, true)
          embed.addField(`Description`, `${r[0].description}`, true)
          embed.addField(`Rarity`, `${r[0].rarity}`, true)
          embed.setTimestamp()

      if (r[0].set) {
      embed.addField(`Set`, `${r[0].set}`, true);
      }
      if (r[0].series) {
        embed.addField(`Series`, `${r[0].series.name}`, true)
      }
          embed.addField(`ID`, `${r[0].id}`)
          embed.addField(`Path`, `${r[0].path}`, true)
          if (r[0].variants) {
            r[0].variants.forEach(v => {
              // ${res.data.variants[0].options[0].image}
              embed.addField(
                `(${v.type}) Variants (${v.channel})`,
                v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
              );
            });
          }
       if (r[0].gameplayTags) {
         embed.addField(`Tags`, `\`\`\`css\n${r[0].gameplayTags.join("\n")}\`\`\``)
       }

          if (r[0].rarity === "Common") {
            embed.setColor("#000000");
          }
          if (r[0].rarity === "Uncommon") {
            embed.setColor("#17ff00");
          }
          if (r[0].rarity === "Rare") {
            embed.setColor("#008fff");
          }
          if (r[0].rarity === "Epic") {
            embed.setColor("#ff00e7");
          }
          if (r[0].rarity === "Legendary") {
            embed.setColor("#fff205");
          }
          if (r[0].rarity === "Icon Series") {
            embed.setColor("#008fff");
          }

          message.channel.send(embed)
    }}).catch(e => {
      console.log(e)
      message.channel.send(`No cosmetic was found for: ${content}`)
    })
  } else if (message.content.toLowerCase().includes('-id')) {

    let content = args[0]
        let url = `https://benbotfn.tk/api/v1/cosmetics/br/search/all?lang=en&searchLang=en&matchMethod=contains&name=${content}&backendType=AthenaCharacter`
        
          async function getCosmetic(name) {
    
      var data = await request(url, {json: true}).catch(e => {
          throw e.response.body.error;
      });
      return data;
  }
        
    getCosmetic(content).then(r => {
      if (!content) {
        return message.channel.send(`No cosmetic was provided.`)
      }

      if (r > r[25]) {
        return message.channel.send(`Too many cosmetics found, please be more specific.`)
      }
      if (r > r[0]) {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Multiple Cosmetics Found`)
        .setDescription(`**Choose one of the cosmetics below by sending the number.** \n` +
              r
                .map(
                  (o, index) =>
                    `${index}. [${o.name}](${o.icons.icon}), ${o.id}`
                )
                .join("\n"))
        .setTimestamp()
        message.channel.send(embed);

         // First argument is a filter function - which is made of conditions
         // m is a 'Message' object
         message.channel.awaitMessages(m => m.author.id == message.author.id,
                 {max: 1, time: 10000}).then(collected => {

                         // only accept messages by the user who sent the command
                         // accept only 1 message, and return the promise after 30000ms = 30s

                         // first (and, in this case, only) message of the collection
                         if (collected.first().content.toLowerCase() in r) {
                           let content = collected.first().content

                           let embed = new Discord.MessageEmbed()
                           .setThumbnail(r[content].icons.icon)
                           .setTitle(`Cosmetic`)
                       if (r[content].name) {
                           embed.addField(`Name`, `${r[content].name}`, true)
                       }
                       if (r[content].description) {
                           embed.addField(`Description`, `${r[content].description}`, true)
                       }
                       if (r[content].rarity) {
                           embed.addField(`Rarity`, `${r[content].rarity}`, true)
                       }
                           embed.setTimestamp()
                       if (r[content].set) {
                       embed.addField(`Set`, `${r[content].set}`, true);
                       }
                       if (r[content].series) {
                         embed.addField(`Series`, `${r[content].series.name}`, true)
                       }
                           if (r[content].id) {
                           embed.addField(`ID`, `${r[content].id}`)
                           }
                           if (r[content].path) {
                           embed.addField(`Path`, `${r[content].path}`, true)
                           }
                           if (r[content].variants) {
                             r[content].variants.forEach(v => {
                               // ${res.data.variants[0].options[0].image}
                               embed.addField(
                                 `(${v.type}) Variants (${v.channel})`,
                                 v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
                               );
                             });
                           }

                           if (r[content].gameplayTags) {
                             embed.addField(`Tags`, `\`\`\`css\n${r[content].gameplayTags.join("\n")}\`\`\``)
                           }

                           if (r[content].rarity === "Common") {
                             embed.setColor("#000000");
                           }
                           if (r[content].rarity === "Uncommon") {
                             embed.setColor("#17ff00");
                           }
                           if (r[content].rarity === "Rare") {
                             embed.setColor("#008fff");
                           }
                           if (r[content].rarity === "Epic") {
                             embed.setColor("#ff00e7");
                           }
                           if (r[content].rarity === "Legendary") {
                             embed.setColor("#fff205");
                           }
                           if (r[content].rarity === "Icon Series") {
                             embed.setColor("#008fff");
                           }
                          return message.channel.send(embed)
                         }


                     else
                      embed = new Discord.MessageEmbed()
                      .setTitle("Error")
                      .setColor("#ffdf00")
                      .setDescription(`${collected.first().content} is not a valid option.`)
                      .setTimestamp()
                      return message.channel.send(embed);
                 }).catch((err) => {
                         console.log(err)
                 });
      } else {


          let embed = new Discord.MessageEmbed()
          .setThumbnail(r[0].icons.icon)
          .setTitle(`Cosmetic`)
          embed.addField(`Name`, `${r[0].name}`, true)
          embed.addField(`Description`, `${r[0].description}`, true)
          embed.addField(`Rarity`, `${r[0].rarity}`, true)
          embed.setTimestamp()

      if (r[0].set) {
      embed.addField(`Set`, `${r[0].set}`, true);
      }
      if (r[0].series) {
        embed.addField(`Series`, `${r[0].series.name}`, true)
      }
          embed.addField(`ID`, `${r[0].id}`)
          embed.addField(`Path`, `${r[0].path}`, true)
          if (r[0].variants) {
            r[0].variants.forEach(v => {
              // ${res.data.variants[0].options[0].image}
              embed.addField(
                `(${v.type}) Variants (${v.channel})`,
                v.options.map((o, index) => `${index + 1}. [${o.name}](${o.image}) (${o.tag})`).join(`\n`)
              );
            });
          }
       if (r[0].gameplayTags) {
         embed.addField(`Tags`, `\`\`\`css\n${r[0].gameplayTags.join("\n")}\`\`\``)
       }

          if (r[0].rarity === "Common") {
            embed.setColor("#000000");
          }
          if (r[0].rarity === "Uncommon") {
            embed.setColor("#17ff00");
          }
          if (r[0].rarity === "Rare") {
            embed.setColor("#008fff");
          }
          if (r[0].rarity === "Epic") {
            embed.setColor("#ff00e7");
          }
          if (r[0].rarity === "Legendary") {
            embed.setColor("#fff205");
          }
          if (r[0].rarity === "Icon Series") {
            embed.setColor("#008fff");
          }

          message.channel.send(embed)
    }}).catch(e => {
      console.log(e)
      message.channel.send(`No cosmetic was found for: ${content}`)
    })
}
}
  
});

client.login(process.env.BOT_TOKEN);
