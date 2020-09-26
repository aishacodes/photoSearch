import axios from 'axios'

const accessKey = 'lMxkmp226q-3vxmQ29y24i22xbZtPwuL-FIKOPJIQaA'
const API_url = 'https://api.unsplash.com'

export const searchPics = (query) => new Promise((resolve, reject) => {
  const queryURL = `${API_url}/search/photos?query=${query}&per_page=30`

  axios.get(queryURL, {
    headers: {
      'Accept-Version': 'v1',
      'Authorization': `$Client-ID ${accessKey}`
    }
  })
    .then(response => {
      console.log({ response })
      resolve(response.data)
    })
    .catch(err => reject(err))
})

