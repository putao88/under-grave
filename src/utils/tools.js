function heroType (type) {
  const hero = {
    1: '法师',
    2: '战士',
    3: '剑客'
  }

  return hero[type]
}

export { heroType }