function randomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const affirmationData = {
    compliment: ['beautiful', 'kind', 'loving', 'hardworking', 'your best version of yourself', 'talented', 'amazing', 'unique'],
    today: ['calm', 'adventurous', 'unforgettable', 'peaceful', 'memorable', 'positive', 'full of smiles', 'surounded by kind people'],
    affirmation: ['You deserve nothing but the best!', 'I wake each morning with a smile.', 'Nobody but me decides how I feel.', 'I am in control of my emotions.', 'It’s okay to make mistakes.']
  }
  
  // Store the 'affirmation' in an array
  let personalAffirmation = []
  
  // Iterate over the object
  for(let prop in affirmationData) {
    let optionIdx = randomNumber(affirmationData[prop].length)
  
    // use the object's properties to customize the message being added to personalAffirmation 
    switch(prop) {
      case 'compliment':
        personalAffirmation.push(`You are: "${affirmationData[prop][optionIdx]}"!`)
        break
      case 'today':
        personalAffirmation.push(`Let today be: "${affirmationData[prop][optionIdx]}".`)
        break
      case 'affirmation':
        personalAffirmation.push(`Your affirmation for today is: "${affirmationData[prop][optionIdx]}".`)
        break
      default:
        personalAffirmation.push('There is not enough info.')
    }
  }
  
  function formatAffirmation(message) {
    const formatted = personalAffirmation.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalAffirmation);