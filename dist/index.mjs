import https from 'https';
import { URL } from 'url';

const BASE_URL = 'https://www.samirxpikachu.run.place/';

function makeRequest(endpoint, params = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint, BASE_URL);
    if (method === 'GET') {
      url.search = new URLSearchParams(params).toString();
    }
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            resolve(data);
          }
        } else {
          reject(new Error(`Request failed with status code ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on('error', (error) => { reject(error); });
    if (method === 'POST') {
      req.write(JSON.stringify(params));
    }
    req.end();
  });
}

function makeImageRequest(endpoint, params = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint, BASE_URL);
    url.search = new URLSearchParams(params).toString();
    https.get(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      } else {
        reject(new Error(`Image request failed with status code ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

const samirapi = {
  fetchJson: (endpoint, params, isPathParam = false, method = 'GET', data = null) => {
    if (isPathParam) {
      endpoint = endpoint.replace(/{[^}]+}/, params);
      params = {};
    }
    return makeRequest(endpoint, method === 'GET' ? params : data, method);
  },

  fetchBinary: (endpoint, params, isPathParam = false, method = 'GET', data = null) => {
    if (isPathParam) {
      endpoint = endpoint.replace(/{[^}]+}/, params);
      params = {};
    }
    return makeImageRequest(endpoint, params);
  },

  palm: a => makeRequest("palm", { text: a }),
  liner: a => makeRequest("liner", { prompt: a }),
  gpt: a => makeRequest("gpt", { content: a }),
  llama3: (prompt, system_prompt) => makeRequest("llama3", { prompt, system_prompt }),
  mixtral142B: (prompt, system_prompt) => makeRequest("Mixtral/142B", { prompt, system_prompt }),
  bing: ({ message, mode, uid }) => makeRequest("bing", { message, mode, uid }),
  gemini: (text, uid) => makeRequest("Gemini", { text, uid }),
  stoicai: a => makeRequest("stoicai", { query: a }),
  stoicgpt: a => makeRequest("stoicgpt", { query: a }),
  generatePrompt: (text) => makeRequest("prompt", { text }),

  artify: url => makeImageRequest("artify", { url }),
  togta: url => makeImageRequest("gta", { url }),
  imagine: prompt => makeImageRequest("Imagine", { prompt }),
  animagine: (prompt, resolution, model, qualitytag) => makeImageRequest("animagine", { prompt, resolution, model, qualitytag }),
  niji: (prompt, resolution) => makeImageRequest("niji", { prompt, resolution }),
  mageDef: prompt => makeImageRequest("mageDef", { prompt }),
  flux: prompt => makeImageRequest("flux", { prompt }),
  marjia: prompt => makeImageRequest("marjia", { prompt }),
  tozombie: url => makeImageRequest("zombie", { imgurl: url }),
  remBackground: url => makeImageRequest("rbg", { url }),

  tiktok: a => makeRequest("tiktok", { url: a }),
  facebook: a => makeRequest("fbdl", { vid_url: a }),
  spotifydl: a => makeRequest("spotifydl", { url: a }),
  Twitter: a => makeRequest("Twitter", { url: a }),
  Instagram: a => makeRequest("igdl", { url: a }),

  pet: url => makeImageRequest("pet", { url }),

  html2image: a => makeImageRequest("html2image", { html: a }),

  countries: () => makeRequest("api/countries"),
  numbers: (country) => makeRequest(`api/numbers/${encodeURIComponent(country)}`),
  messages: (number) => makeRequest(`api/messages/${encodeURIComponent(number)}`),

  anilistUser: (username) => makeRequest(`anilist/user/${encodeURIComponent(username)}`),
  view: (username) => makeRequest(`view/${encodeURIComponent(username)}`),
  animeDetails: (title) => makeRequest(`anime/details/${encodeURIComponent(title)}`),
  animeTop: (category) => makeRequest(`anime/top/${encodeURIComponent(category)}`),

  uploadToTelegraph: (url, senderId) => makeRequest('telegraph', { url, senderId }),
  shortenUrl: (url) => makeRequest('api/shorten', { url }),

  pastebin: (text) => makeRequest("pastebin", { text }),
  paste: (text) => makeRequest("paste", { text }),
  hastebin: (text) => makeRequest("Hastebin", { text }),
  nekobin: (code) => makeRequest("nekobin", { code }),

  generateAvatar: (name, id, subname, color) => {
    const params = { name, id };
    if (subname) params.subname = subname;
    if (color) params.color = color;
    return makeImageRequest("avatar", params);
  },

  searchPinterest: (query, number = 6) => makeRequest("pinterest", { query, number }),

  getLyrics: (query) => makeRequest("lyrics", { query }),

  getTempMail: () => makeRequest("tempmail/get"),
  getInbox: (email) => makeRequest(`tempmail/inbox/${encodeURIComponent(email)}`),

  obfuscate: (query) => makeRequest("obfuscate", { query }, 'POST'),

  getWeather: (city) => makeRequest(`weather/${encodeURIComponent(city)}`),

  news: () => makeRequest("news"),

  generateQRCode: (text) => makeRequest("qr", { text }),
  readQRCode: (url) => makeRequest("qr/read", { url }),

  detectHumanAI: (inputText) => makeRequest("ai/detect", { input_text: inputText }),

  emojimix: (emoji1, emoji2) => makeRequest("emojimix2", { emoji1, emoji2 }),

  spotifySearch: (query) => makeRequest("spotifysearch", { q: query }),
  googleImageSearch: (query) => makeRequest("google/imagesearch", { q: query }),
  unsplashSearch: (query) => makeRequest("unsplash", { q: query }),
  tiktokSearch: (query) => makeRequest(`tiktok/search/${encodeURIComponent(query)}`),
  npmInfo: (pkg) => makeRequest(`npm-info/${encodeURIComponent(pkg)}`),
  playstoreSearch: (query) => makeRequest(`playstore/search/${encodeURIComponent(query)}`),
  stackOverflowSearch: (query) => makeRequest(`stackoverflow/search`, { q: query }),
  stackOverflowQuestion: (find) => makeRequest(`stackoverflow/question`, { find }),
  pypiSearch: (query) => makeRequest(`pypi/search`, { q: query }),

  note: text => makeImageRequest("note", { text }),

  malAnimeSearch: (query) => makeRequest(`mal/search/anime`, { q: query }),
  malMangaSearch: (query) => makeRequest(`mal/search/manga`, { q: query }),
  malTopAiring: () => makeRequest('mal/top/airing'),
  malUpcoming: (type) => makeRequest('mal/upcoming', { type }),

  dictionary: (word) => makeRequest(`dictionary/${encodeURIComponent(word)}`),

  measure: (imageUrl) => makeRequest('measure', { imageUrl }, 'POST'),

  stylize: (text) => makeRequest('api/stylize', { text }),

  mobileLegendsHero: (query) => makeRequest(`mobile-legends/hero/${encodeURIComponent(query)}`),

  detectLanguage: (text) => makeRequest('detect/lang', { text }),

  hentai: () => makeRequest('hentai'),

  phonelink: (search) => makeRequest('phonelink', { search }),
  phoneinfo: (url) => makeRequest('phoneinfo', { url }),

  tikstalk: (username) => makeRequest('tikstalk', { username }),
  tweetStalk: (username) => makeRequest('tweet/stalk', { username }),

  convert: (amount, from, to) => makeRequest('convert', { amount, from, to }, 'POST'),

  ipdetect: () => makeRequest('ipdetect'),
  iplookup: () => makeRequest('iplookup', {}, 'POST'),

  ytTranscript: (url) => makeRequest('yt/transcript', { url }),
  transcribe: (url) => makeRequest('transcribe', { url }),

  vocalRev: (url) => makeRequest('vocalrev', { url }),

  waifuTTS: (text, number) => makeRequest('waifu-tts', { text, number }),
  waifuVoicelist: () => makeRequest('waifu-voicelist'),

  clips: (text) => makeRequest('clips', { text }),

  ngl: (username, message) => makeRequest('ngl', { username, message }),

  snippetLanguages: () => makeRequest('snippet/languages'),
  snippetThemes: () => makeRequest('snippet/themes'),
  snippet: (code, theme, language, lineNumbers, scale, backgroundColor, backgroundImage, showBackground) => 
    makeImageRequest('snippet', { 
      code, 
      theme, 
      language, 
      'line-numbers': lineNumbers, 
      scale, 
      'background-color': backgroundColor, 
      'background-image': backgroundImage, 
      'show-background': showBackground 
    }),
};

export { samirapi as default };
