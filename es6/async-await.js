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

async function f() {
	throw new Error('error')
}

f().then(
	v => console.log('v', v),
	e => console.log('e', e)
)