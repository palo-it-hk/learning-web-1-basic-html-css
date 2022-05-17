import { backendUrl } from './config'

export async function fetchData() {
  try {
    const response = await fetch(backendUrl, {
      mode: 'cors'
    })
    const body = await response.json()
    return body.message
  } catch(err) {
    console.log(err)
  }
}