// Задача 1
   function cachingDecoratorNew(func) {
   	let cache = [];

   	function wrapper(...args) {
   		const hash = md5(args);

   		const objectInCache = cache.find((item) => item.hash === hash);
   		if (objectInCache) {
   			console.log("Из кэша: " + objectInCache.result);
   			return "Из кеша: " + objectInCache.result;
   		} else {
   			let result = func(...args);
   			cache.push({
   				hash,
   				result
   			});
   			if (cache.length > 5) {
   				cache.shift();
   			}
   			console.log("Вычисляем: " + result);
   			return "Вычисляем: " + result;
   		}

   	}
   	return wrapper;
   }


//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeout = null;
	wrapper.count = 0;
    wrapper.allCount = 0;

	function wrapper(...args) {
		wrapper.allCount++;

		if (timeout) {
			clearTimeout(timeout);
		} else {
			func(args);
			wrapper.count++;
		}

		timeout = setTimeout(() => {
			func(args), wrapper.count++
		}, delay)
	}

	return wrapper;
}