Code Image
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Build & Deploy](https://github.com/jaywcjlove/code-image/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/code-image/actions/workflows/ci.yml)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/code-image?logo=docker)](https://hub.docker.com/r/wcjiang/code-image)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/code-image?logo=docker)](https://hub.docker.com/r/wcjiang/code-image)
[![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/code-image?logo=docker)](https://hub.docker.com/r/wcjiang/code-image)

Create beautiful images of your source code.

[![Code Image](https://user-images.githubusercontent.com/1680273/189277364-6c14be26-b7a4-41ba-bea7-5e8958345457.png)](https://jaywcjlove.github.io/code-image)

### Using

```jsx mdx:preview
import React from "react";
import CodeImage from '@wcj/code-image';

export default function App() {
  return (
    <CodeImage />
  );
}
```

## Docker

```bash
docker pull wcjiang/code-image
# Or
docker pull ghcr.io/jaywcjlove/code-image:latest
```

```bash
docker run --name code-image --rm -d -p 9612:3000 wcjiang/code-image:latest
# Or
docker run --name code-image -itd -p 9612:3000 wcjiang/code-image:latest
# Or
docker run --name wxmp -itd -p 9612:3000 ghcr.io/jaywcjlove/code-image:latest
```

Visit the following URL in your browser

```bash
http://localhost:9612/
```

## Development

1. Install

```bash
npm install
```

2. To develop, run the self-reloading build:

```bash
npm run build  # Compile packages      📦 @wcj/code-image
npm run watch  # Real-time compilation 📦 @wcj/code-image
```

3. Run Document Website Environment:

```bash
npm run start
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/code-image/graphs/contributors">
  <img src="https://jaywcjlove.github.io/code-image/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.