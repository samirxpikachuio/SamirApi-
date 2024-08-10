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
```markdown
### Text Bin Functions

<details>
<summary><code>pastebin(text)</code> - Creates a paste on Pastebin.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.pastebin("This is a text paste.")
  .then(pasteUrl => console.log("Pastebin URL:", pasteUrl))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const pasteUrl = await samirapi.pastebin("This is a text paste.");
  console.log("Pastebin URL:", pasteUrl);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>paste(text)</code> - Creates a paste on Paste.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.paste("This is a paste.")
  .then(pasteUrl => console.log("Paste URL:", pasteUrl))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const pasteUrl = await samirapi.paste("This is a paste.");
  console.log("Paste URL:", pasteUrl);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>hastebin(text)</code> - Creates a paste on Hastebin.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.hastebin("This is a Hastebin paste.")
  .then(pasteUrl => console.log("Hastebin URL:", pasteUrl))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const pasteUrl = await samirapi.hastebin("This is a Hastebin paste.");
  console.log("Hastebin URL:", pasteUrl);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>nekobin(code)</code> - Creates a paste on Nekobin.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.nekobin("This is a Nekobin paste.")
  .then(pasteUrl => console.log("Nekobin URL:", pasteUrl))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const pasteUrl = await samirapi.nekobin("This is a Nekobin paste.");
  console.log("Nekobin URL:", pasteUrl);
} catch (error) {
  console.error(error);
}
```
</details>

### Facebook Cover Functions

<details>
<summary><code>generateAvatar(name, id, subname, color)</code> - Generates a Facebook cover avatar.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.generateAvatar("John Doe", "12345", "Developer", "#ff0000")
  .then(avatarImage => console.log("Generated Avatar Image:", avatarImage))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const avatarImage = await samirapi.generateAvatar("John Doe", "12345", "Developer", "#ff0000");
  console.log("Generated Avatar Image:", avatarImage);
} catch (error) {
  console.error(error);
}
```
</details>

### Pinterest Functions

<details>
<summary><code>searchPinterest(query, number = 6)</code> - Searches Pinterest for a given query.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.searchPinterest("nature", 5)
  .then(results => console.log("Pinterest Search Results:", results))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const results = await samirapi.searchPinterest("nature", 5);
  console.log("Pinterest Search Results:", results);
} catch (error) {
  console.error(error);
}
```
</details>

### Get Song Lyrics Functions

<details>
<summary><code>getLyrics(query)</code> - Retrieves lyrics for a given query.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getLyrics("Never Gonna Give You Up")
  .then(lyrics => console.log("Song Lyrics:", lyrics))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const lyrics = await samirapi.getLyrics("Never Gonna Give You Up");
  console.log("Song Lyrics:", lyrics);
} catch (error) {
  console.error(error);
}
```
</details>

### TempMail Functions

<details>
<summary><code>getTempMail()</code> - Retrieves a temporary email address.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getTempMail()
  .then(email => console.log("Temporary Email Address:", email))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const email = await samirapi.getTempMail();
  console.log("Temporary Email Address:", email);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>getInbox(email)</code> - Retrieves inbox messages for a given temporary email address.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getInbox("example@tempmail.com")
  .then(messages => console.log("Inbox Messages:", messages))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const messages = await samirapi.getInbox("example@tempmail.com");
  console.log("Inbox Messages:", messages);
} catch (error) {
  console.error(error);
}
```
</details>

### JavaScript Obfuscator

<details>
<summary><code>obfuscate(query)</code> - Obfuscates JavaScript code.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.obfuscate("console.log('Hello, World!');")
  .then(obfuscatedCode => console.log("Obfuscated Code:", obfuscatedCode))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const obfuscatedCode = await samirapi.obfuscate("console.log('Hello, World!');");
  console.log("Obfuscated Code:", obfuscatedCode);
} catch (error) {
  console.error(error);
}
```
</details>

### Weather Functions

<details>
<summary><code>getWeather(city)</code> - Retrieves the weather for a given city.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getWeather("New York")
  .then(weather => console.log("Weather Data:", weather))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const weather = await samirapi.getWeather("New York");
  console.log("Weather Data:", weather);
} catch (error) {
  console.error(error);
}
```
</details>

### News Functions

<details>
<summary><code>news()</code> - Retrieves the latest news.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.news()
  .then(news => console.log("Latest News:", news))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const news = await samirapi.news();
  console.log("Latest News:", news);
} catch (error) {
  console.error(error);
}
```
</details>

### QR Code Functions

<details>
<summary><code>generateQRCode(text)</code> - Generates a QR code for a given text.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.generateQRCode("https://www.example.com")
  .then(qrCodeImage => console.log("QR Code Image:", qrCodeImage))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const qrCodeImage = await samirapi.generateQRCode("https://www.example.com");
  console.log("QR Code Image:", qrCodeImage);
} catch (error) {
  console.error(error);
}
```
</details>

<details>
<summary><code>readQRCode(url)</code> - Reads a QR code from a given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.readQRCode("https://www.example.com/qr-code.png")
  .

then(decodedText => console.log("Decoded QR Code Text:", decodedText))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const decodedText = await samirapi.readQRCode("https://www.example.com/qr-code.png");
  console.log("Decoded QR Code Text:", decodedText);
} catch (error) {
  console.error(error);
}
```
</details>

### Snippet

<details>
<summary><code>getSnippet(url)</code> - Retrieves a code snippet from a given URL.</summary>

```javascript
// CommonJS (CJS)
const samirapi = require('samirapi');

samirapi.getSnippet("https://www.example.com/snippet")
  .then(snippet => console.log("Code Snippet:", snippet))
  .catch(error => console.error(error));

// ES Modules (MJS)
import samirapi from 'samirapi';

try {
  const snippet = await samirapi.getSnippet("https://www.example.com/snippet");
  console.log("Code Snippet:", snippet);
} catch (error) {
  console.error(error);
}
```
</details>
```



