## npm-yarn-runtime-installer

This is the typesafe module to install/uninstall module with yarn/npn on node.js runtime programmatically.

```typescript

import { install, uninstall } from "npm-yarn-runtime-installer";

install(["react", "react-dom"], false, "yarn", (err) => {
    throw new Error(err)
})

uninstall(["react", "react-dom"], "yarn", (err) => {
    throw new Error(err)
})
```

This Returns the child process.

### install

|property|value|
|:--:|:--:|
|modules|stirng[]|
|saveDevs|boolean|
|manager|"yarn" \| "npm"|
|errHandles|(err: string) => void|

### uninstall

|property|value|
|:--:|:--:|
|modules|stirng[]|
|manager|"yarn" \| "npm"|
|errHandles|(err: string) => void|


