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
    userProgress.set(message.author.id, { index: 0, counts: { IE: 0, SN: 0, TF: 0, JP: 0 } });
    await message.author.send("Let's begin your MBTI test! Reply with 1 or 2 to answer.");
    askNextQuestion(message.author.id);
  }

  if (message.channel.type === 1 && userProgress.has(message.author.id)) {
    const progress = userProgress.get(message.author.id);
    const question = questionBank[progress.index - 1];
    const answer = message.content.trim();

    if (answer === '1' || answer === '2') {
      const choice = question.options[parseInt(answer) - 1];
      progress.counts[choice.dimension] += (choice.direction === choice.dimension[1] ? 1 : -1);
    } else {
      await message.channel.send("Please reply with `1` or `2`.");
      return;
    }

    if (progress.index < questionBank.length) {
      askNextQuestion(message.author.id);
    } else {
      const result = getMBTI(progress.counts);
      await message.channel.send(`✅ All done! Your MBTI type is: **${result}**`);
      userProgress.delete(message.author.id);
    }
  }
});

function askNextQuestion(userId) {
  const user = client.users.cache.get(userId);
  const progress = userProgress.get(userId);
  const question = questionBank[progress.index];
  progress.index++;

  user.send(`**Q${progress.index}: ${question.question}**\n1️⃣ ${question.options[0].text}\n2️⃣ ${question.options[1].text}`);
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