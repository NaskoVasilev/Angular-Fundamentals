class HttpRequest {
    public response: string = 'undefined'
    public fulfilled: boolean = false; 

    constructor(
        public method: string,
        public uri: string,
        public version: string,
        public message: string,
    ) { }
}

let httpRequest = new HttpRequest('GET', 'http://google.com', 'HTTP/1.1', '');
