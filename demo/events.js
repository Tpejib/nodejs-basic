const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log('ON Anything:',data);
// })

// emitter.emit('anything', {a:1, b:2, c:3})

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('ON: aa --', data);
})

dis.dispatch('aa', {c:1, b:2})