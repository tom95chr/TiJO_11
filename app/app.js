function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    var result = start;
    for (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
    }
    return result;
}

function volumeSphera(radius) {
    if (radius > 0) {
        fieldSphere = Math.PI * radius * radius;
    } else {
        System.out.println("zla wartosc");
    }
}
    return fieldSphere;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers
    volumeSphera: volumeSphera

};



