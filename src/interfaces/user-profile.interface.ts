export interface FactoryList {
  id: string,
  userId: string,
  name: string,
  territoryId: string,
  producingRecipeId: string,
  upgradeIdList: string[],
  inputMaterialList: string[]
}

export interface UserProfile {
  id: string,
  auth0Id: string,
  username: string,
  email: string,
  avatar: string,
  token: string,
  factoryList: FactoryList[]
}

