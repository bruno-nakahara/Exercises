const { EventEmitter } = require("events")

const ev = new EventEmitter()

ev.on('saySomething', () => {
    console.log('ouvindo')
})

ev.emit('saySomething')
console.log(ev)