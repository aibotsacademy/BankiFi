# ð¤ BankiFi Bot

> Telegram Bot + Rarible Protocol: Discover Assets API ð 

---

### Prerequisite
Before you begin this guide youâll need the following:

- Node.js installed.
- npm installed.
- Sublime Text or VS installed.
- Use of CLI.
- A Telegram account.

# Let's start!

> npm init

install the telegraf library

> npm install telegraf

> cd AriBot-NFT

# create app.js


>//method for invoking start command
 
>bot.command('start', ctx => {
 >   console.log(ctx.from)
  >  bot.telegram.sendMessage(ctx.chat.id, 'ð Hola, te saluda Ava, la asistente virtual del BankiFi ð¤

>Let's start!', {
 >   })
>})

# bot launch

> //method to start get the script to pulling updates for telegram 

> bot.launch();

# run bot in the terminal
> node app.js
