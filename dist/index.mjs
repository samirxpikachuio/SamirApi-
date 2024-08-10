import axios from 'axios';

const baseUrl = "https://www.samirxpikachu.run.place/";

const fetchData = async (endpoint, params = {}, isPathParam = false, method = 'GET', data = null, responseType = 'json') => {
  let url = `${baseUrl}${endpoint}`;
  if (params && !isPathParam) {
    url += `?${new URLSearchParams(params)}`;
  } else if (params && isPathParam) {
    url = url.replace(/{[^}]+}/, params);
  }
  
  const config = {
    method,
    url,
    data,
    responseType,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const response = await axios(config);
  return response.data;
};

const fetchImage = async (endpoint, params = {}) => {
  const url = `${baseUrl}${endpoint}?${new URLSearchParams(params)}`;
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  return Buffer.from(response.data, 'binary');
};

const samirapi = {
  fetchJson: (endpoint, params, isPathParam = false, method = 'GET', data = null) => {
    return fetchData(endpoint, params, isPathParam, method, data, 'json');
  },

  fetchBinary: (endpoint, params, isPathParam = false, method = 'GET', data = null) => {
    return fetchData(endpoint, params, isPathParam, method, data, 'arraybuffer');
  },

  // LLM part
  palm: a => fetchData("palm", { text: a }),
  liner: a => fetchData("liner", { prompt: a }),
  gpt: a => fetchData("gpt", { content: a }),
  llama3: (prompt, system_prompt) => fetchData("llama3", { prompt, system_prompt }),
  mixtral142B: (prompt, system_prompt) => fetchData("Mixtral/142B", { prompt, system_prompt }),
  bing: ({ message, mode, uid }) => fetchData("bing", { message, mode, uid }),
  gemini: (text, uid) => fetchData("Gemini", { text, uid }),
  stoicai: a => fetchData("stoicai", { query: a }),
  stoicgpt: a => fetchData("stoicgpt", { query: a }),
  generatePrompt: (text) => {
    if (!text) {
      throw new Error('Text parameter is required');
    }
    return fetchData("prompt", { text });
  },

  // Image generator part
  artify: url => fetchImage("artify", { url }),
  togta: url => fetchImage("gta", { url }),
  imagine: prompt => fetchImage("Imagine", { prompt }),
  animagine: (prompt, resolution, model, qualitytag) => fetchImage("animagine", { prompt, resolution, model, qualitytag }),
  niji: (prompt, resolution) => fetchImage("niji", { prompt, resolution }),
  mageDef: prompt => fetchImage("mageDef", { prompt }),
  flux: prompt => fetchImage("flux", { prompt }),
  marjia: prompt => fetchImage("marjia", { prompt }),
  tozombie: url => fetchImage("zombie", { imgurl: url }),
  remBackground: url => fetchImage("rbg", { url }),

  // Downloader part
  tiktok: a => fetchData("tiktok", { url: a }),
  facebook: a => fetchData("fbdl", { vid_url: a }),
  spotifydl: a => fetchData("spotifydl", { url: a }),
  Twitter: a => fetchData("Twitter", { url: a }),
  Instagram: a => fetchData("igdl", { url: a }),

  // Meme part
  pet: url => fetchImage("pet", { url }),

  html2image: a => fetchImage("html2image", { html: a }),

  // Temp-Number part
  countries: () => fetchData("api/countries"),
  numbers: (country) => fetchData(`api/numbers/${encodeURIComponent(country)}`),
  messages: (number) => fetchData(`api/messages/${encodeURIComponent(number)}`),

  // Anilist API
  anilistUser: (username) => fetchData(`anilist/user/${encodeURIComponent(username)}`),
  view: (username) => fetchData(`view/${encodeURIComponent(username)}`),
  animeDetails: (title) => fetchData(`anime/details/${encodeURIComponent(title)}`),
  animeTop: (category) => fetchData(`anime/top/${encodeURIComponent(category)}`),

  // URL shortener
  uploadToTelegraph: (url, senderId) => fetchData('telegraph', { url, senderId }),
  shortenUrl: (url) => fetchData('api/shorten', { url }),

  // Text bin
  pastebin: (text) => fetchData("pastebin", { text }),
  paste: (text) => fetchData("paste", { text }),
  hastebin: (text) => fetchData("Hastebin", { text }),
  nekobin: (code) => fetchData("nekobin", { code }),

  // Facebook cover
  generateAvatar: async (name, id, subname, color) => {
    const params = { name, id };
    if (subname) params.subname = subname;
    if (color) params.color = color;
    return fetchImage("avatar", params);
  },

  // Pinterest
  searchPinterest: (query, number = 6) => {
    return fetchData("pinterest", { query, number });
  },

  // Get song lyrics
  getLyrics: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData("lyrics", { query });
  },

  // Tempmail generator
  getTempMail: () => {
    return fetchData("tempmail/get");
  },

  getInbox: (email) => {
    if (!email) {
      throw new Error('Email parameter is required');
    }
    return fetchData("tempmail/inbox/{email}", email, true);
  },

  // JavaScript obfuscator
  obfuscate: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData("obfuscate", null, false, 'POST', { query });
  },

  // Weather
  getWeather: (city) => {
    if (!city) {
      throw new Error('City parameter is required');
    }
    return fetchData("weather/{city}", city, true);
  },

  // News
  news: () => fetchData("news"),

  // QR code gen and read
  generateQRCode: (text) => {
    if (!text) {
      throw new Error('Text parameter is required');
    }
    return fetchData("qr", { text });
  },

  readQRCode: (url) => {
    if (!url) {
      throw new Error('URL parameter is required');
    }
    return fetchData("qr/read", { url });
  },

  // AI detector
  detectHumanAI: (inputText) => {
    if (!inputText) {
      throw new Error('Input text parameter is required');
    }
    return fetchData("ai/detect", { input_text: inputText });
  },

  // Emoji mix
  emojimix: (emoji1, emoji2) => {
    if (!emoji1 || !emoji2) {
      throw new Error('Both emoji1 and emoji2 parameters are required');
    }
    return fetchData("emojimix2", { emoji1, emoji2 });
  },

  // Search
  spotifySearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData("spotifysearch", { q: query });
  },
  googleImageSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData("google/imagesearch", { q: query });
  },
  unsplashSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData("unsplash", { q: query });
  },
  tiktokSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData(`tiktok/search/${encodeURIComponent(query)}`);
  },
  npmInfo: (pkg) => {
    if (!pkg) {
      throw new Error('Package name is required');
    }
    return fetchData(`npm-info/${encodeURIComponent(pkg)}`);
  },
  playstoreSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData(`playstore/search/${encodeURIComponent(query)}`);
  },
  stackOverflowSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData(`stackoverflow/search`, { q: query });
  },
  stackOverflowQuestion: (find) => {
    if (!find) {
      throw new Error('Find parameter is required');
    }
    return fetchData(`stackoverflow/question`, { find });
  },
  pypiSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData(`pypi/search`, { q: query });
  },

  // Note
  note: text => fetchImage("note", { text }),

  // MAL anime API
  malAnimeSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData(`mal/search/anime`, { q: query });
  },
  malMangaSearch: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData(`mal/search/manga`, { q: query });
  },
  malTopAiring: () => {
    return fetchData('mal/top/airing');
  },
  malUpcoming: (type) => {
    if (!type) {
      throw new Error('Type parameter is required');
    }
    return fetchData('mal/upcoming', { type });
  },

  // Word dictionary
  dictionary: (word) => {
    if (!word) {
      throw new Error('Word parameter is required');
    }
    return fetchData(`dictionary/${encodeURIComponent(word)}`, null, true);
  },

  // Image measurements
  measure: (imageUrl) => {
    if (!imageUrl) {
      throw new Error('Image URL parameter is required');
    }
    return fetchData('measure', { imageUrl }, false, 'POST');
  },

  // Font style
  stylize: (text) => {
    if (!text) {
      throw new Error('Text parameter is required');
    }
    return fetchData('api/stylize', { text });
  },

  // MLBB
  mobileLegendsHero: (query) => {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return fetchData('mobile-legends/hero/' + encodeURIComponent(query), null, true);
  },

  // Detected Lang
  detectLanguage: (text) => {
    if (!text) {
      throw new Error('Text parameter is required');
    }
    return fetchData('detect/lang', { text });
  },

  // Hentai
  hentai: () => {
    return fetchData('hentai');
  },

  // GSM phone info
  phonelink: (search) => {
    if (!search) {
      throw new Error('Search parameter is required');
    }
    return fetchData('phonelink', { search });
  },
  phoneinfo: (url) => {
    if (!url) {
      throw new Error('URL parameter is required');
    }
    return fetchData('phoneinfo', { url });
  },

  // Stalk
  tikstalk: (username) => {
    if (!username) {
      throw new Error('Username parameter is required');
    }
    return fetchData('tikstalk', { username });
  },
  tweetStalk: (username) => {
    if (!username) {
      throw new Error('Username parameter is required');
    }
    return fetchData('tweet/stalk', { username });
  },

  // Currency exchange value
  convert: (amount, from, to) => {
    if (amount == null || !from || !to) {
      throw new Error('Amount, from currency, and to currency parameters are required');
    }
    const data = { amount, from, to };
    return fetchData('convert', {}, false, 'POST', data);
  },

  // IP lookup
  ipdetect: () => {
    return fetchData('ipdetect', {}, false, 'GET');
  },
  iplookup: () => {
    return fetchData('iplookup', {}, false, 'POST', {});
  },

  // Transcribe
  ytTranscript: (url) => {
    if (!url) {
      throw new Error('URL parameter is required');
    }
    return fetchData('yt/transcript', { url });
  },
  transcribe: (url) => {
    if (!url) {
      throw new Error('URL parameter is required');
    }
    return fetchData('transcribe', { url });
  },

  // Audio remover
  vocalRev: (url) => {
    if (!url) {
      throw new Error('URL parameter is required');
    }
    return fetchData('vocalrev', { url });
  },

  // Waifu TTS
  waifuTTS: (text, number) => {
    if (text === undefined || number === undefined) {
      throw new Error('Text and number parameters are required');
    }
    return samirapi.fetchBinary('waifu-tts', { text, number });
  },
  waifuVoicelist: () => {
    return samirapi.fetchJson('waifu-voicelist');
  },

  // Movie clips
  clips: (text) => {
    if (!text) {
      throw new Error('Text parameter is required');
    }
    return fetchData('clips', { text });
  },

  // NGL
  ngl: (username, message) => {
    if (username === undefined || message === undefined) {
      throw new Error('Username and message parameters are required');
    }
    return fetchData('ngl', { username, message });
  },

  // Snippet
  snippetLanguages: () => {
    return fetchData('snippet/languages');
  },
  snippetThemes: () => {
    return fetchData('snippet/themes');
  },
  snippet: (code, theme, language, lineNumbers, scale, backgroundColor, backgroundImage, showBackground) => {
    if (!code) {
      throw new Error('Code parameter is required');
    }
    return fetchImage('snippet', { 
      code, 
      theme, 
      language, 
      'line-numbers': lineNumbers, 
      scale, 
      'background-color': backgroundColor, 
      'background-image': backgroundImage, 
      'show-background': showBackground 
    });
  },
};

export default samirapi;
