# samirapi

`samirapi` is a comprehensive API wrapper for various services, including AI models, image generation, downloaders, and more. This module provides easy-to-use functions to interact with these services.

## Installation

```bash
npm install samirapi
```

## Usage

### CommonJS (CJS)

```javascript
const samirapi = require('samirapi');
```

### ES Modules (MJS)

```javascript
import samirapi from 'samirapi';
```

## Available Functions

### LLM (Language Model) Functions

<details>
<summary><code>palm(text)</code> - Sends a request to the PaLM AI model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.palm("What is the capital of France?")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.palm("What is the capital of France?");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>liner(prompt)</code> - Generates a response using the Liner AI model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.liner("Write a short poem about spring")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.liner("Write a short poem about spring");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>gpt(content)</code> - Interacts with the GPT model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.gpt("Explain quantum computing in simple terms")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.gpt("Explain quantum computing in simple terms");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>llama3(prompt, system_prompt)</code> - Uses the Llama 3 model for text generation.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.llama3("Tell me a joke", "You are a comedian")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.llama3("Tell me a joke", "You are a comedian");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>mixtral142B(prompt, system_prompt)</code> - Interacts with the Mixtral 142B model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.mixtral142B("Summarize the plot of Romeo and Juliet", "You are a literature expert")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.mixtral142B("Summarize the plot of Romeo and Juliet", "You are a literature expert");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>bing({ message, mode, uid })</code> - Sends a request to the Bing AI.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.bing({ message: "What's the weather like today?", mode: "creative", uid: "user123" })
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.bing({ message: "What's the weather like today?", mode: "creative", uid: "user123" });
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>gemini(text, uid)</code> - Interacts with the Gemini AI model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.gemini("Tell me about the solar system", "user456")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.gemini("Tell me about the solar system", "user456");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>stoicai(query)</code> - Sends a query to the Stoic AI.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.stoicai("What would Marcus Aurelius say about modern technology?")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.stoicai("What would Marcus Aurelius say about modern technology?");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>stoicgpt(query)</code> - Interacts with the Stoic GPT model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.stoicgpt("How can I practice Stoicism in daily life?")
  .then(response => console.log(response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.stoicgpt("How can I practice Stoicism in daily life?");
  console.log(response);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>generatePrompt(text)</code> - Generates a prompt based on the input text.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.generatePrompt("Create a story about a time traveler")
  .then(prompt => console.log("Generated prompt:", prompt))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const prompt = await samirapi.generatePrompt("Create a story about a time traveler");
  console.log("Generated prompt:", prompt);
} catch (error) {
  console.error(error);
}
```
</details>

### Image Generation Functions

<details>
<summary><code>artify(url)</code> - Applies an artistic effect to the image at the given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.artify("https://example.com/image.jpg")
  .then(imageBuffer => {
    fs.writeFileSync('artified_image.png', imageBuffer);
    console.log("Artified image saved as artified_image.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.artify("https://example.com/image.jpg");
  writeFileSync('artified_image.png', imageBuffer);
  console.log("Artified image saved as artified_image.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>togta(url)</code> - Transforms the image at the given URL into a GTA-style image.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.togta("https://example.com/image.jpg")
  .then(imageBuffer => {
    fs.writeFileSync('gta_style_image.png', imageBuffer);
    console.log("GTA-style image saved as gta_style_image.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.togta("https://example.com/image.jpg");
  writeFileSync('gta_style_image.png', imageBuffer);
  console.log("GTA-style image saved as gta_style_image.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>imagine(prompt)</code> - Generates an image based on the given prompt.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.imagine("A futuristic city with flying cars")
  .then(imageBuffer => {
    fs.writeFileSync('futuristic_city.png', imageBuffer);
    console.log("Image saved as futuristic_city.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.imagine("A futuristic city with flying cars");
  writeFileSync('futuristic_city.png', imageBuffer);
  console.log("Image saved as futuristic_city.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>animagine(prompt, resolution, model, qualitytag)</code> - Generates an anime-style image based on the given parameters.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.animagine("A magical girl with a wand", "512x512", "v2", "best")
  .then(imageBuffer => {
    fs.writeFileSync('magical_girl.png', imageBuffer);
    console.log("Image saved as magical_girl.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.animagine("A magical girl with a wand", "512x512", "v2", "best");
  writeFileSync('magical_girl.png', imageBuffer);
  console.log("Image saved as magical_girl.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>niji(prompt, resolution)</code> - Generates an image using the Niji model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.niji("A serene Japanese garden", "1024x1024")
  .then(imageBuffer => {
    fs.writeFileSync('japanese_garden.png', imageBuffer);
    console.log("Image saved as japanese_garden.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.niji("A serene Japanese garden", "1024x1024");
  writeFileSync('japanese_garden.png', imageBuffer);
  console.log("Image saved as japanese_garden.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>mageDef(prompt)</code> - Generates an image using the MageDef model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.mageDef("A wizard casting a powerful spell")
  .then(imageBuffer => {
    fs.writeFileSync('wizard_spell.png', imageBuffer);
    console.log("Image saved as wizard_spell.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.mageDef("A wizard casting a powerful spell");
  writeFileSync('wizard_spell.png', imageBuffer);
  console.log("Image saved as wizard_spell.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>flux(prompt)</code> - Generates an image using the Flux model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.flux("A vibrant abstract painting")
  .then(imageBuffer => {
    fs.writeFileSync('abstract_painting.png', imageBuffer);
    console.log("Image saved as abstract_painting.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.flux("A vibrant abstract painting");
  writeFileSync('abstract_painting.png', imageBuffer);
  console.log("Image saved as abstract_painting.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>marjia(prompt)</code> - Generates an image using the Marjia model.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.marjia("A beautiful landscape with mountains and a lake")
  .then(imageBuffer => {
    fs.writeFileSync('landscape.png', imageBuffer);
    console.log("Image saved as landscape.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.marjia("A beautiful landscape with mountains and a lake");
  writeFileSync('landscape.png', imageBuffer);
  console.log("Image saved as landscape.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>tozombie(url)</code> - Transforms the image at the given URL into a zombie-style image.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.tozombie("https://example.com/image.jpg")
  .then(imageBuffer => {
    fs.writeFileSync('zombie_image.png', imageBuffer);
    console.log("Zombie image saved as zombie_image.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.tozombie("https://example.com/image.jpg");
  writeFileSync('zombie_image.png', imageBuffer);
  console.log("Zombie image saved as zombie_image.png");
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>remBackground(url)</code> - Removes the background from the image at the given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.remBackground("https://example.com/image.jpg")
  .then(imageBuffer => {
    fs.writeFileSync('no_background.png', imageBuffer);
    console.log("Image with removed background saved as no_background.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.remBackground("https://example.com/image.jpg");
  writeFileSync('no_background.png', imageBuffer);
  console.log("Image with removed background saved as no_background.png");
} catch (error) {
  console.error(error);
}
```
</details>

### Downloader Functions

<details>
<summary><code>tiktok(url)</code> - Downloads content from a TikTok URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.tiktok("https://www.tiktok.com/@username/video/1234567890123456789")
  .then(data => console.log("TikTok video data:", data))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const data = await samirapi.tiktok("https://www.tiktok.com/@username/video/1234567890123456789");
  console.log("TikTok video data:", data);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>facebook(url)</code> - Downloads content from a Facebook video URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.facebook("https://www.facebook.com/watch?v=1234567890123456")
  .then(data => console.log("Facebook video data:", data))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const data = await samirapi.facebook("https://www.facebook.com/watch?v=1234567890123456");
  console.log("Facebook video data:", data);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>spotifydl(url)</code> - Downloads content from a Spotify URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.spotifydl("https://open.spotify.com/track/1234567890123456")
  .then(data => console.log("Spotify track data:", data))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const data = await samirapi.spotifydl("https://open.spotify.com/track/1234567890123456");
  console.log("Spotify track data:", data);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>Twitter(url)</code> - Downloads content from a Twitter URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.Twitter("https://twitter.com/username/status/1234567890123456789")
  .then(data => console.log("Twitter content data:", data))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const data = await samirapi.Twitter("https://twitter.com/username/status/1234567890123456789");
  console.log("Twitter content data:", data);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>Instagram(url)</code> - Downloads content from an Instagram URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.Instagram("https://www.instagram.com/p/abcdefghijk/")
  .then(data => console.log("Instagram content data:", data))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const data = await samirapi.Instagram("https://www.instagram.com/p/abcdefghijk/");
  console.log("Instagram content data:", data);
} catch (error) {
  console.error(error);
}
```
</details>

### Meme Functions

<details>
<summary><code>pet(url)</code> - Applies a "pet" effect to the image at the given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

samirapi.pet("https://example.com/image.jpg")
  .then(imageBuffer => {
    fs.writeFileSync('pet_effect.gif', imageBuffer);
    console.log("Pet effect GIF saved as pet_effect.gif");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const imageBuffer = await samirapi.pet("https://example.com/image.jpg");
  writeFileSync('pet_effect.gif', imageBuffer);
  console.log("Pet effect GIF saved as pet_effect.gif");
} catch (error) {
  console.error(error);
}
```
</details>

### HTML to Image Function

<details>
<summary><code>html2image(html)</code> - Converts HTML to an image.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');
const fs = require('fs');

const html = '<div style="background-color: blue; color: white; padding: 20px;">Hello, World!</div>';
samirapi.html2image(html)
  .then(imageBuffer => {
    fs.writeFileSync('html_image.png', imageBuffer);
    console.log("HTML converted to image and saved as html_image.png");
  })
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';
import { writeFileSync } from 'fs';

try {
  const html = '<div style="background-color: blue; color: white; padding: 20px;">Hello, World!</div>';
  const imageBuffer = await samirapi.html2image(html);
  writeFileSync('html_image.png', imageBuffer);
  console.log("HTML converted to image and saved as html_image.png");
} catch (error) {
  console.error(error);
}
```
</details>

### Temp-Number Functions

<details>
<summary><code>countries()</code> - Retrieves a list of available countries for temporary numbers.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.countries()
  .then(countries => console.log("Available countries:", countries))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const countries = await samirapi.countries();
  console.log("Available countries:", countries);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>numbers(country)</code> - Retrieves available temporary numbers for a given country.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.numbers("US")
  .then(numbers => console.log("Available numbers for US:", numbers))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const numbers = await samirapi.numbers("US");
  console.log("Available numbers for US:", numbers);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>messages(number)</code> - Retrieves messages for a given temporary number.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.messages("+1234567890")
  .then(messages => console.log("Messages for +1234567890:", messages))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const messages = await samirapi.messages("+1234567890");
  console.log("Messages for +1234567890:", messages);
} catch (error) {
  console.error(error);
}
```
</details>

### Anilist API Functions

<details>
<summary><code>anilistUser(username)</code> - Retrieves information about an Anilist user.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.anilistUser("exampleUser")
  .then(userData => console.log("Anilist user data:", userData))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const userData = await samirapi.anilistUser("exampleUser");
  console.log("Anilist user data:", userData);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>view(username)</code> - Retrieves view information for an Anilist user.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.view("exampleUser")
  .then(viewData => console.log("Anilist user view data:", viewData))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const viewData = await samirapi.view("exampleUser");
  console.log("Anilist user view data:", viewData);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>animeDetails(title)</code> - Retrieves details about an anime by its title.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.animeDetails("Attack on Titan")
  .then(animeData => console.log("Anime details:", animeData))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const animeData = await samirapi.animeDetails("Attack on Titan");
  console.log("Anime details:", animeData);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>animeTop(category)</code> - Retrieves top anime in a given category.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.animeTop("airing")
  .then(topAnime => console.log("Top airing anime:", topAnime))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const topAnime = await samirapi.animeTop("airing");
  console.log("Top airing anime:", topAnime);
} catch (error) {
  console.error(error);
}
```
</details>

### URL Shortener Functions

<details>
<summary><code>uploadToTelegraph(url, senderId)</code> - Uploads an image to Telegraph and returns a shortened URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.uploadToTelegraph("https://example.com/image.jpg", "user123")
  .then(shortUrl => console.log("Shortened Telegraph URL:", shortUrl))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const shortUrl = await samirapi.uploadToTelegraph("https://example.com/image.jpg", "user123");
  console.log("Shortened Telegraph URL:", shortUrl);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>shortenUrl(url)</code> - Shortens a given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.shortenUrl("https://www.example.com/very/long/url")
  .then(shortUrl => console.log("Shortened URL:", shortUrl))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const shortUrl = await samirapi.shortenUrl("https://www.example.com/very/long/url");
  console.log("Shortened URL:", shortUrl);
} catch (error) {
  console.error(error);
}
```
</details>


### Text Bin Functions

<details>
<summary><code>pastebin(text)</code> - Uploads text to Pastebin and returns the URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.pastebin("This is some sample text.")
  .then(url => console.log("Pastebin URL:", url))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const url = await samirapi.pastebin("This is some sample text.");
  console.log("Pastebin URL:", url);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>paste(text)</code> - Uploads text to a paste service and returns the URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.paste("This is some sample text.")
  .then(url => console.log("Paste URL:", url))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const url = await samirapi.paste("This is some sample text.");
  console.log("Paste URL:", url);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>hastebin(text)</code> - Uploads text to Hastebin and returns the URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.hastebin("This is some sample text.")
  .then(url => console.log("Hastebin URL:", url))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const url = await samirapi.hastebin("This is some sample text.");
  console.log("Hastebin URL:", url);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>nekobin(code)</code> - Uploads code to Nekobin and returns the URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.nekobin("console.log('Hello, world!');")
  .then(url => console.log("Nekobin URL:", url))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const url = await samirapi.nekobin("console.log('Hello, world!');");
  console.log("Nekobin URL:", url);
} catch (error) {
  console.error(error);
}
```
</details>

### Facebook Cover Function

<details>
<summary><code>generateAvatar(name, id, subname, color)</code> - Generates a Facebook-style avatar image.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.generateAvatar("John Doe", "1234", "Developer", "blue")
  .then(avatar => console.log("Generated Avatar:", avatar))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const avatar = await samirapi.generateAvatar("John Doe", "1234", "Developer", "blue");
  console.log("Generated Avatar:", avatar);
} catch (error) {
  console.error(error);
}
```
</details>

### Pinterest Function

<details>
<summary><code>searchPinterest(query, number = 6)</code> - Searches Pinterest for images.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.searchPinterest("beautiful landscapes")
  .then(images => console.log("Pinterest Images:", images))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const images = await samirapi.searchPinterest("beautiful landscapes");
  console.log("Pinterest Images:", images);
} catch (error) {
  console.error(error);
}
```
</details>

### Lyrics Function

<details>
<summary><code>getLyrics(query)</code> - Retrieves lyrics for a given song query.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getLyrics("Imagine")
  .then(lyrics => console.log("Lyrics:", lyrics))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const lyrics = await samirapi.getLyrics("Imagine");
  console.log("Lyrics:", lyrics);
} catch (error) {
  console.error(error);
}
```
</details>

### Tempmail Functions

<details>
<summary><code>getTempMail()</code> - Generates a temporary email address.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getTempMail()
  .then(email => console.log("Temporary Email:", email))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const email = await samirapi.getTempMail();
  console.log("Temporary Email:", email);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>getInbox(email)</code> - Retrieves the inbox for a given temporary email address.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getInbox("example@tempmail.com")
  .then(inbox => console.log("Inbox:", inbox))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const inbox = await samirapi.getInbox("example@tempmail.com");
  console.log("Inbox:", inbox);
} catch (error) {
  console.error(error);
}
```
</details>

### JavaScript Obfuscator Function

<details>
<summary><code>obfuscate(query)</code> - Obfuscates the given JavaScript code.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.obfuscate("function hello() { console.log('Hello'); }")
  .then(obfuscated => console.log("Obfuscated Code:", obfuscated))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const obfuscated = await samirapi.obfuscate("function hello() { console.log('Hello'); }");
  console.log("Obfuscated Code:", obfuscated);
} catch (error) {
  console.error(error);
}
```
</details>

### Weather Function

<details>
<summary><code>getWeather(city)</code> - Retrieves weather information for a given city.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getWeather("London")
  .then(weather => console.log("Weather Information:", weather))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const weather = await samirapi.getWeather("London");
  console.log("Weather Information:", weather);
} catch (error) {
  console.error(error);
}
```
</details>

### News Function

<details>
<summary><code>news()</code> - Retrieves current news headlines.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.news()
  .then(headlines => console.log("News Headlines:", headlines))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const headlines = await samirapi.news();
  console.log("News Headlines:", headlines);
} catch (error) {
  console.error(error);
}
```
</details>

### QR Code Functions

<details>
<summary><code>generateQRCode(text)</code> - Generates a QR code for the given text.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.generateQRCode("https://www.example.com")
  .then(qrCode => console.log("QR Code Image:", qrCode))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const qrCode = await samirapi.generateQRCode("https://www.example.com");
  console.log("QR Code Image:", qrCode);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>readQRCode(url)</code> - Reads and decodes a QR code from the given image URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.readQRCode("https://www.example.com/qrcode.png")
  .then(decodedText => console.log("Decoded QR Code Text:", decodedText))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const decodedText = await

 samirapi.readQRCode("https://www.example.com/qrcode.png");
  console.log("Decoded QR Code Text:", decodedText);
} catch (error) {
  console.error(error);
}
```
</details>

### AI Detector Function

<details>
<summary><code>detectHumanAI(inputText)</code> - Detects whether the input text was written by a human or AI.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.detectHumanAI("This is a sample text to check.")
  .then(detection => console.log("AI Detection Result:", detection))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const detection = await samirapi.detectHumanAI("This is a sample text to check.");
  console.log("AI Detection Result:", detection);
} catch (error) {
  console.error(error);
}
```
</details>

### Emoji Mix Function

<details>
<summary><code>emojimix(emoji1, emoji2)</code> - Combines two emojis into a single image.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.emojimix("🙂", "😎")
  .then(mixedEmoji => console.log("Mixed Emoji Image:", mixedEmoji))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const mixedEmoji = await samirapi.emojimix("🙂", "😎");
  console.log("Mixed Emoji Image:", mixedEmoji);
} catch (error) {
  console.error(error);
}
```
</details>

### Search Functions

<details>
<summary><code>spotifySearch(query)</code> - Searches Spotify for tracks, albums, or artists.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.spotifySearch("Imagine Dragons")
  .then(results => console.log("Spotify Search Results:", results))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const results = await samirapi.spotifySearch("Imagine Dragons");
  console.log("Spotify Search Results:", results);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>googleImageSearch(query)</code> - Performs a Google image search.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.googleImageSearch("beautiful landscapes")
  .then(images => console.log("Google Image Search Results:", images))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const images = await samirapi.googleImageSearch("beautiful landscapes");
  console.log("Google Image Search Results:", images);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>unsplashSearch(query)</code> - Searches Unsplash for images.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.unsplashSearch("sunsets")
  .then(images => console.log("Unsplash Search Results:", images))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const images = await samirapi.unsplashSearch("sunsets");
  console.log("Unsplash Search Results:", images);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>tiktokSearch(query)</code> - Searches TikTok for videos.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.tiktokSearch("funny videos")
  .then(videos => console.log("TikTok Search Results:", videos))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const videos = await samirapi.tiktokSearch("funny videos");
  console.log("TikTok Search Results:", videos);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>npmInfo(pkg)</code> - Retrieves information about an npm package.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.npmInfo("express")
  .then(info => console.log("NPM Package Info:", info))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const info = await samirapi.npmInfo("express");
  console.log("NPM Package Info:", info);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>playstoreSearch(query)</code> - Searches the Google Play Store for apps.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.playstoreSearch("weather apps")
  .then(apps => console.log("Play Store Search Results:", apps))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const apps = await samirapi.playstoreSearch("weather apps");
  console.log("Play Store Search Results:", apps);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>stackOverflowSearch(query)</code> - Searches Stack Overflow for questions.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.stackOverflowSearch("React hooks")
  .then(questions => console.log("Stack Overflow Search Results:", questions))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const questions = await samirapi.stackOverflowSearch("React hooks");
  console.log("Stack Overflow Search Results:", questions);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>stackOverflowQuestion(find)</code> - Retrieves a specific Stack Overflow question.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.stackOverflowQuestion("12345678")
  .then(question => console.log("Stack Overflow Question:", question))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const question = await samirapi.stackOverflowQuestion("12345678");
  console.log("Stack Overflow Question:", question);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>pypiSearch(query)</code> - Searches PyPI for Python packages.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.pypiSearch("requests")
  .then(packages => console.log("PyPI Search Results:", packages))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const packages = await samirapi.pypiSearch("requests");
  console.log("PyPI Search Results:", packages);
} catch (error) {
  console.error(error);
}
```
</details>

### Note Function

<details>
<summary><code>note(text)</code> - Generates an image of a note with the given text.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.note("This is a note.")
  .then(noteImage => console.log("Note Image:", noteImage))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const noteImage = await samirapi.note("This is a note.");
  console.log("Note Image:", noteImage);
} catch (error) {
  console.error(error);
}
```
</details>

### MAL (MyAnimeList) Functions

<details>
<summary><code>malAnimeSearch(query)</code> - Searches MyAnimeList for anime.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.malAnimeSearch("Naruto")
  .then(anime => console.log("MyAnimeList Anime Search Results:", anime))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const anime = await samirapi.malAnimeSearch("Naruto");
  console.log("MyAnimeList Anime Search Results:", anime);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>malMangaSearch(query)</code> - Searches MyAnimeList for manga.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.malMangaSearch("One Piece")
  .then(manga => console.log("MyAnimeList Manga Search Results:", manga))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samir

api';

try {
  const manga = await samirapi.malMangaSearch("One Piece");
  console.log("MyAnimeList Manga Search Results:", manga);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>malTopAiring()</code> - Retrieves the top airing anime from MyAnimeList.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.malTopAiring()
  .then(topAiring => console.log("Top Airing Anime:", topAiring))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const topAiring = await samirapi.malTopAiring();
  console.log("Top Airing Anime:", topAiring);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>malUpcoming(type)</code> - Retrieves upcoming anime or manga from MyAnimeList.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.malUpcoming("anime")
  .then(upcoming => console.log("Upcoming Anime:", upcoming))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const upcoming = await samirapi.malUpcoming("anime");
  console.log("Upcoming Anime:", upcoming);
} catch (error) {
  console.error(error);
}
```
</details>

### Dictionary Function

<details>
<summary><code>dictionary(word)</code> - Looks up the definition of a word.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.dictionary("serendipity")
  .then(definition => console.log("Word Definition:", definition))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const definition = await samirapi.dictionary("serendipity");
  console.log("Word Definition:", definition);
} catch (error) {
  console.error(error);
}
```
</details>

### Image Measurement Function

<details>
<summary><code>measure(imageUrl)</code> - Measures the dimensions of an image at the given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.measure("https://www.example.com/image.png")
  .then(dimensions => console.log("Image Dimensions:", dimensions))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const dimensions = await samirapi.measure("https://www.example.com/image.png");
  console.log("Image Dimensions:", dimensions);
} catch (error) {
  console.error(error);
}
```
</details>

### Font Style Function

<details>
<summary><code>stylize(text)</code> - Applies various font styles to the given text.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.stylize("Hello World!")
  .then(stylizedText => console.log("Stylized Text:", stylizedText))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const stylizedText = await samirapi.stylize("Hello World!");
  console.log("Stylized Text:", stylizedText);
} catch (error) {
  console.error(error);
}
```
</details>

### Mobile Legends Function

<details>
<summary><code>mobileLegendsHero(query)</code> - Retrieves information about a Mobile Legends hero.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.mobileLegendsHero("Aldous")
  .then(heroInfo => console.log("Mobile Legends Hero Info:", heroInfo))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const heroInfo = await samirapi.mobileLegendsHero("Aldous");
  console.log("Mobile Legends Hero Info:", heroInfo);
} catch (error) {
  console.error(error);
}
```
</details>

### Language Detection Function

<details>
<summary><code>detectLanguage(text)</code> - Detects the language of the given text.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.detectLanguage("Bonjour tout le monde")
  .then(language => console.log("Detected Language:", language))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const language = await samirapi.detectLanguage("Bonjour tout le monde");
  console.log("Detected Language:", language);
} catch (error) {
  console.error(error);
}
```
</details>

### Hentai Function

<details>
<summary><code>hentai()</code> - Retrieves hentai-related content (NSFW).</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.hentai()
  .then(content => console.log("Hentai Content:", content))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const content = await samirapi.hentai();
  console.log("Hentai Content:", content);
} catch (error) {
  console.error(error);
}
```
</details>

### GSM Phone Info Functions

<details>
<summary><code>phonelink(search)</code> - Searches for phone information.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.phonelink("Samsung Galaxy S21")
  .then(info => console.log("Phone Info:", info))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const info = await samirapi.phonelink("Samsung Galaxy S21");
  console.log("Phone Info:", info);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>phoneinfo(url)</code> - Retrieves detailed information about a phone from a given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.phoneinfo("https://www.example.com/phoneinfo")
  .then(info => console.log("Phone Details:", info))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const info = await samirapi.phoneinfo("https://www.example.com/phoneinfo");
  console.log("Phone Details:", info);
} catch (error) {
  console.error(error);
}
```
</details>

### Stalk Functions

<details>
<summary><code>tikstalk(username)</code> - Retrieves information about a TikTok user.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.tikstalk("user123")
  .then(userInfo => console.log("TikTok User Info:", userInfo))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const userInfo = await samirapi.tikstalk("user123");
  console.log("TikTok User Info:", userInfo);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>tweetStalk(username)</code> - Retrieves information about a Twitter user.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.tweetStalk("twitteruser")
  .then(userInfo => console.log("Twitter User Info:", userInfo))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const userInfo = await samirapi.tweetStalk("twitteruser");
  console.log("Twitter User Info:", userInfo);
} catch (error) {
  console.error(error);
}
```
</details>

### Currency Exchange Function

<details>
<summary><code>convert(amount, from, to)</code> - Converts currency from one type to another.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.convert(100, "USD", "EUR")
  .then(convertedAmount => console.log("Converted Amount:", convertedAmount))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const convertedAmount = await samirapi.convert(100, "USD", "EUR");
  console.log("Converted Amount:", convertedAmount);
} catch (error) {
  console.error(error);
}
```
</details>

### IP Lookup Functions

<details>
<summary><code>ipdetect()</code> - Detects the user's IP address.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.ipdetect()
  .then(ip => console.log("Detected IP Address:", ip))
  .catch(error => console

.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const ip = await samirapi.ipdetect();
  console.log("Detected IP Address:", ip);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>ipwhois(ip)</code> - Retrieves WHOIS information for a given IP address.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.ipwhois("103.204.209.113")
  .then(info => console.log("IP WHOIS Info:", info))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const info = await samirapi.ipwhois("103.204.209.113");
  console.log("IP WHOIS Info:", info);
} catch (error) {
  console.error(error);
}
```
</details>


### Transcribe Functions

<details>
<summary><code>ytTranscript(url)</code> - Transcribes a YouTube video.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.ytTranscript("https://www.youtube.com/watch?v=example")
  .then(transcript => console.log("Transcript:", transcript))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const transcript = await samirapi.ytTranscript("https://www.youtube.com/watch?v=example");
  console.log("Transcript:", transcript);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>transcribe(url)</code> - Transcribes audio from a given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.transcribe("https://www.example.com/audiofile")
  .then(transcript => console.log("Transcript:", transcript))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const transcript = await samirapi.transcribe("https://www.example.com/audiofile");
  console.log("Transcript:", transcript);
} catch (error) {
  console.error(error);
}
```
</details>

### Audio Remover Function

<details>
<summary><code>vocalRev(url)</code> - Removes vocals from an audio track.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.vocalRev("https://www.example.com/audiofile")
  .then(audioWithoutVocals => console.log("Audio without vocals:", audioWithoutVocals))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const audioWithoutVocals = await samirapi.vocalRev("https://www.example.com/audiofile");
  console.log("Audio without vocals:", audioWithoutVocals);
} catch (error) {
  console.error(error);
}
```
</details>

### Waifu TTS Functions

<details>
<summary><code>waifuTTS(text, number)</code> - Converts text to speech using a waifu voice.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.waifuTTS("Hello, world!", 1)
  .then(audio => console.log("Waifu TTS audio:", audio))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const audio = await samirapi.waifuTTS("Hello, world!", 1);
  console.log("Waifu TTS audio:", audio);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>waifuVoicelist()</code> - Retrieves a list of available waifu voices.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.waifuVoicelist()
  .then(voicelist => console.log("Waifu voice list:", voicelist))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const voicelist = await samirapi.waifuVoicelist();
  console.log("Waifu voice list:", voicelist);
} catch (error) {
  console.error(error);
}
```
</details>

### Movie Clips Function

<details>
<summary><code>clips(text)</code> - Searches for movie clips based on the given text.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.clips("action scene")
  .then(clips => console.log("Movie clips:", clips))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const clips = await samirapi.clips("action scene");
  console.log("Movie clips:", clips);
} catch (error) {
  console.error(error);
}
```
</details>

### NGL Function

<details>
<summary><code>ngl(username, message)</code> - Sends an anonymous message to an NGL.link user.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.ngl("exampleuser", "Hello, this is a message!")
  .then(response => console.log("NGL response:", response))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const response = await samirapi.ngl("exampleuser", "Hello, this is a message!");
  console.log("NGL response:", response);
} catch (error) {
  console.error(error);
}
```
</details>

### Code Snippet Functions

<details>
<summary><code>snippetLanguages()</code> - Retrieves a list of supported programming languages for code snippets.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.snippetLanguages()
  .then(languages => console.log("Supported languages:", languages))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const languages = await samirapi.snippetLanguages();
  console.log("Supported languages:", languages);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>snippetThemes()</code> - Retrieves a list of available themes for code snippets.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.snippetThemes()
  .then(themes => console.log("Available themes:", themes))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const themes = await samirapi.snippetThemes();
  console.log("Available themes:", themes);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>snippet(code, theme, language, lineNumbers, scale, backgroundColor, backgroundImage, showBackground)</code> - Generates a code snippet image with the given parameters.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.snippet(
  "const x = 10;",
  "dracula",
  "javascript",
  true,
  1,
  "#ffffff",
  "path/to/image.png",
  true
)
  .then(image => console.log("Code snippet image:", image))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const image = await samirapi.snippet(
    "const x = 10;",
    "dracula",
    "javascript",
    true,
    1,
    "#ffffff",
    "path/to/image.png",
    true
  );
  console.log("Code snippet image:", image);
} catch (error) {
  console.error(error);
}
```
</details>




# Thank You for Exploring!

We appreciate your interest in this package. What matters most to us is creating and innovating to meet your needs.

If you have any questions, feedback, or suggestions, please don’t hesitate to reach out:

- **Telegram Channel:** [Architectdevs](https://t.me/Architectdevs)
- **Telegram Chat Group:** [ArchitectdevsChat](https://t.me/ArchitectdevsChat)
- **Facebook Group:** [Architectdevs Group](https://facebook.com/groups/761805065901067/)
- **Discord:** [samirxpikachu](https://discord.com/users/samirxpikachu)
  
