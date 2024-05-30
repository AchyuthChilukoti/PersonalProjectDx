import { LightningElement } from 'lwc';

export default class HttpCallFromJS extends LightningElement {

    getCall(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(console.log)
    }

    postCallout(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        })
        .then(res => res.json())
        .then(console.log)
    }
}