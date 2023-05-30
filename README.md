# @h4v0c/event-emitter
A simple Event Emitter class.

## Usage:
```javascript
    import { EventEmitter } from '@h4v0c/event-emitter';

    const eventEmitter = new EventEmitter();

    eventEmitter.on('test', (arg) => console.debug('test event emitted:', arg));
    eventEmitter.emit(test, 'MyArg');
```

### Output:
`test event emitted: MyArg`
