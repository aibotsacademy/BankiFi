const Telegraf = require('telegraf');

const bot = new Telegraf('insert_bot_token_here');

bot.hears('art', ctx => {
    console.log(ctx.from)
    let artMessage = `Favor digite su cédula de identidad personal:`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, artMessage, {
        reply_markup: {
            inline_keyboard: [
               
})

//method OBP 

bot.action('${action}', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
return axios.get(`https://obp-apisandbox.bancohipotecario.com.sv/obp/v4.0.0/banks/BANK_ID/accounts${agent.params.type}/meta
`).then((response) => {
        var accountListResponceFormat = "Name";
        	response.data.map(accountObj => {
            	accountListResponceFormat += `Name: ${accountObj.name}.\nvalue:  ${accountObj.value}\nCreators: ${accountObj.creators}\nImage: ${accountObj.image}`;
            	accountListResponceFormat += `\n-----------------------------\n`;
        	});

    })

})


bot.hears('games', ctx => {
    console.log(ctx.from)
    let gamesMessage = `Great, here are the games collections:`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, artMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "📸 Photo",
                        callback_data: 'photo'
                    },
                    {
                        text: "🕹️ Games",
                        callback_data: 'games'
                    },
{
                        text: "🏷️ Domains",
                        callback_data: 'domains'
                    },
{
                        text: "More 🌈",
                        callback_data: 'more art'
                    }
                ],

            ]
        }
    })
})

//method that rarible collections 

bot.action('${action}', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
return axios.get(`https://obp-apisandbox.bancohipotecario.com.sv/obp/v4.0.0/banks/BANK_ID/accounts${agent.params.type}/meta
`).then((response) => {
        var accountListResponceFormat = "Name";
        	response.data.map(accountObj => {
            	accountListResponceFormat += `Name: ${accountObj.name}.\nvalue:  ${accountObj.value}\nCreators: ${accountObj.creators}\nImage: ${accountObj.image}`;
            	accountListResponceFormat += `\n-----------------------------\n`;
        	});

    })

})

bot.hears('photos', ctx => {
    console.log(ctx.from)
    let photosMessage = `Great, here are the photos collections:`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, artMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "📸 Photo",
                        callback_data: 'photo'
                    },
                    {
                        text: "🕹️ Games",
                        callback_data: 'games'
                    },
{
                        text: "🏷️ Domains",
                        callback_data: 'domains'
                    },
{
                        text: "More 🌈",
                        callback_data: 'more art'
                    }
                ],

            ]
        }
    })
})

//method that rarible collections 

bot.action('${action}', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
return axios.get(`https://obp-apisandbox.bancohipotecario.com.sv/obp/v4.0.0/banks/BANK_ID/accounts${agent.params.type}/meta
`).then((response) => {
        var accountListResponceFormat = "Name";
        	response.data.map(accountObj => {
            	accountListResponceFormat += `Name: ${accountObj.name}.\nvalue:  ${accountObj.value}\nCreators: ${accountObj.creators}\nImage: ${accountObj.image}`;
            	accountListResponceFormat += `\n-----------------------------\n`;
        	});

    })

})

bot.hears('domains', ctx => {
    console.log(ctx.from)
    let domainsMessage = `Great, here are the domains collections:`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, artMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "📸 Photo",
                        callback_data: 'photo'
                    },
                    {
                        text: "🕹️ Games",
                        callback_data: 'games'
                    },
{
                        text: "🏷️ Domains",
                        callback_data: 'domains'
                    },
{
                        text: "More 🌈",
                        callback_data: 'more art'
                    }
                ],

            ]
        }
    })
})

//method that rarible collections 

bot.action('${action}', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
return axios.get(`https://obp-apisandbox.bancohipotecario.com.sv/obp/v4.0.0/banks/BANK_ID/accounts${agent.params.type}/meta
`).then((response) => {
        var accountListResponceFormat = "Name";
        	response.data.map(accountObj => {
            	accountListResponceFormat += `Name: ${accountObj.name}.\nvalue:  ${accountObj.value}\nCreators: ${accountObj.creators}\nImage: ${accountObj.image}`;
            	accountListResponceFormat += `\n-----------------------------\n`;
        	});

    })

})

bot.launch();
