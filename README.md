# bindKey

# install

```
npm i -S bind-key
```

# example
```
import { unbindKey }, bindKey from 'bind-key';

const listener = bindKey('ctrl-h', function() { console.log('ctrl-h clicked!')});

// unbind
unbindKey(listener);
```
