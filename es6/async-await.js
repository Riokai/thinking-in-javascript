//async function f() {
//	return await 123;
//}
//
//f().then(v => console.log(v))

//function* gen(x){
//	var y = yield x + 2;
//	return y;
//}
//
//var g = gen(1);
//console.log(g.next()) // { value: 3, done: false }
//console.log(g.next()); // { value: undefined, done: true }


//async function f() {
//	throw new Error('error')
//}
//
//f().then(
//	v => console.log('v', v),
//	e => console.log('e', e)
//)

//const fetch = require('node-fetch')
//
//async function getUrl(url) {
//	try {
//		const response = await fetch(url)
//		const html = await response.text()
//		
//		return html.match(/<title>([\s\S]+)<\/title>/i)[1]
//	} catch (e) {
//		console.log('e')
//	}
//}
//
//
//getUrl('http://www.baidu.com').then(console.log)

//async function delay(time) {
//	return await new Promise(resolve => setTimeout(() => resolve(), time))
//}

//delay(2000).then(() => console.log(2222))

const delay = time => new Promise(resolve => setTimeout(resolve, time))

const test = async () => {
	await delay(2000)
	
	return 22222
}

test().then(console.log)
