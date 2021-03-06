# Example MDX
This is markdown from an MDX.

## Heart Emoji
Below here should be a heart rendered from 
:heart:, however :heart: isn't loading because the plugin can't be loaded.

### Attempt 1
See branch feature/next.config.js
Placing the code below in [next.config.js](./next.config.js)
```javascript
const withMDXPlugin = require('@next/mdx'); 
const emoji = require('remark-emoji');
```
produces the error below:
```bash
error - Failed to load next.config.js, see more info here https://nextjs.org/docs/messages/next-config-error
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: ~/Projects/nextjs-remark-plugins/node_modules/remark-emoji/index.js
require() of ES modules is not supported.
```

### Attempt 2
See branch feature/next.config.mjs
One would think we could leverage [next.config.mjs](./next.config.mjs)
```javascript
import * as withMDXPlugin from '@next/mdx';
import emoji from 'remark-emoji';
```
however that produces the error below:
```bash
ReferenceError: module is not defined in ES module scope
    at ~/Projects/nextjs-remark-plugins/next.config.mjs:22:1
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadConfig [as default] (~/Projects/nextjs-remark-plugins/node_modules/next/dist/server/config.js:412:36)
    at async NextServer.loadConfig (~/Projects/nextjs-remark-plugins/node_modules/next/dist/server/next.js:116:22)
    at async NextServer.prepare (~/Projects/nextjs-remark-plugins/node_modules/next/dist/server/next.js:98:24)
    at async ~/Projects/nextjs-remark-plugins/node_modules/next/dist/cli/next-dev.js:130:9
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```