# bindKey

# install

```
npm i -S bind-keys
```

# example
```
import { unbindKey }, bindKey from 'bind-keys';

const listener = bindKey('ctrl-h', function() { console.log('ctrl-h clicked!')});

// unbind
unbindKey(listener);
```
