function generateApiUrl(keyword) {
  return 'https://www.googleapis.com/youtube/v3/search?order=date&part=id%2Csnippet&q=' + keyword + '&maxResults=4&key=AIzaSyDEyElQvxM8AxMcCsYQvAtfA_nitsm8A6M'
}

module.exports = {
  generateApiUrl: generateApiUrl
}
