const CONTRACT_ADDRESS = '0x91F7f05435f1d70C894E2469d8fC1DBc9B40F5cD';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageUri: characterData.imageUri,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
