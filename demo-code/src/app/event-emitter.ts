type SubscriptionFn = (data: any) => void;

interface ISubscriptions {
  [eventName: string]: SubscriptionFn[];
}

class MyEventEmitter {
  subscriptions: ISubscriptions = {};

  subscribe(eventName: string, cb: SubscriptionFn) {
    this.subscriptions[eventName] =
      (this.subscriptions[eventName] || []).concat(cb);
  }

  emit(eventName: string, data: any) {
    (this.subscriptions[eventName] || []).forEach(cb => cb(data));
  }
}


const evtEmitter = new MyEventEmitter();
evtEmitter.subscribe('connected', (data) => console.log(data, 'connected 1'));
evtEmitter.subscribe('connected', (data) => console.log(data, 'connected 2'));


setTimeout(() => {
  evtEmitter.emit('connected', { a: 'a', b: 'b' });
}, 5000);
