/**
 * The 30 is an arbitrary number, you can pick any token length you want
 * The 36 is the maximum radix number you can pass to numeric.toString(), which means all numbers and a-z lowercase letters
 * The 2 is used to pick the 3rd index from the random string which looks like this: "0.mfbiohx64i", we could take any index after 0.
 */
export const randomString = ():string =>[...Array(16)].map(() => Math.random().toString(36)[2]).join('')