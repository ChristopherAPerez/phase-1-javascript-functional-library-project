function myEach(collection, callback){

    let original = collection

    if(typeof collection === 'object'){

        collection = Object.values(collection)
    }

    collection.forEach(e => {
        callback(e)
    });

    return original
}

function myMap(collection, callback){

    if(typeof collection === 'object'){

        collection = Object.values(collection)
    }

    let newArray = collection.map(e => {
        return callback(e)
    });

    return newArray
}

function myReduce(collection, callback, acc){

    if(typeof collection === 'object'){
        collection = Object.values(collection)
    }

    if(!acc){
        acc = collection[0]

        collection = collection.slice(1)
    }

    collection.forEach(e => acc = callback(acc, e, collection))

    return acc
}

function myFind(collection, predicate){

    if(typeof collection === 'object'){
        collection = Object.values(collection)
    }

    let found = collection.find(function(f){
        return predicate(f)
    })

    return found
}

function myFilter(collection, predicate){

    if(typeof collection === 'object'){
        collection = Object.values(collection)
    }

    let filtered = collection.filter(function(f){
        return predicate(f)
    })

    return filtered
}

function mySize(collection){

    if(typeof collection === 'object'){
        collection = Object.values(collection)
    }

    return collection.length
}

function myFirst(array, num){

    if(!num){
        return array[0]
    }

    return array.slice(0, num)
}

function myLast(array, num){
    
    if(!num){
       return array[array.length - 1]
    }

    return array.slice(-num)
}

function myKeys(obj){

    obj = Object.keys(obj)

    return obj
}

function myValues(obj){

    obj = Object.values(obj)

    return obj
}