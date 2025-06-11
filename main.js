require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { questionBank } = require('./questionBank');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages],
  partials: [Partials.Channel]
});

const token = process.env.TOKEN;

const userProgress = new Map();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!mbti') {
    userProgress.set(message.author.id, { 
      index: 0, 
      counts: { IE: 0, SN: 0, TF: 0, JP: 0 },
      channelId: message.channel.id 
    });
    await message.reply("Let's begin your MBTI test! Reply with 1 or 2 to answer.");
    askNextQuestion(message.author.id);
  }

  // Check if user is taking the test
  if (userProgress.has(message.author.id)) {
    const progress = userProgress.get(message.author.id);
    
    // Only process answers in the same channel where the test started
    if (message.channel.id === progress.channelId) {
      // If this is an answer to a question
      if (progress.index > 0) {
        const question = questionBank[progress.index - 1];
        const answer = message.content.trim();

        if (answer === '1' || answer === '2') {
          const choice = question.options[parseInt(answer) - 1];
          progress.counts[choice.dimension] += (choice.direction === choice.dimension[1] ? 1 : -1);
        } else {
          await message.reply("Please reply with `1` or `2`.");
          return;
        }

        if (progress.index < questionBank.length) {
          askNextQuestion(message.author.id);
        } else {
          const result = getMBTI(progress.counts);
          await message.reply(`✅ All done! Your MBTI type is: **${result}**`);
          userProgress.delete(message.author.id);
        }
      }
    }
  }
});

function askNextQuestion(userId) {
  const progress = userProgress.get(userId);
  const question = questionBank[progress.index];
  progress.index++;

  const channel = client.channels.cache.get(progress.channelId);
  const user = client.users.cache.get(userId);
  
  channel.send(`<@${userId}> **Q${progress.index}: ${question.question}**\n1️⃣ ${question.options[0].text}\n2️⃣ ${question.options[1].text}`);
}

function getMBTI(counts) {
  return [
    counts.IE >= 0 ? 'E' : 'I',
    counts.SN >= 0 ? 'S' : 'N',
    counts.TF >= 0 ? 'T' : 'F',
    counts.JP >= 0 ? 'J' : 'P',
  ].join('');
}

console.log('All environment variables:', process.env);
console.log('Using token:', token);
client.login(token);