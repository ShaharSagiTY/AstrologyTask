const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const statuses = [
    'Your stars are aligned vertically this week',
    'The moon casts it\'s shadow on your stars-system',
    'The sun purifies your moons and stars this month',
    'There is a meteor-shower heading your sign the next few days'
]
const recommendations = [
    'It is adviced to stay at home the next weekend',
    'You should think twice before making a big purchase this month',
    'Feel easy when making decisions this week',
    'Great uncertainty is in your scope...'
]
const output = `I can sense that your zodiac sign is ${zodiacSigns[Math.floor(Math.random()* zodiacSigns.length)]}.
${statuses[Math.floor(Math.random()* statuses.length)]}...
${recommendations[Math.floor(Math.random()* recommendations.length)]}.`
console.log(output)