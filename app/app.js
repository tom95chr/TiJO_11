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

function volumeOfCylinder(cylDiameter, cylHeight) {
    if (typeof cylDiameter !== 'number' || typeof cylHeight !== 'number' || cylDiameter <0 || cylHeight < 0) {
        return false;
    }
    var radius = cylDiameter / 2;
    var volume = cylHeight * Math.PI * radius * radius;
    return volume;
}    ;

module.exports = {
    getDescendingNumbers: getDescendingNumbers,
    volumeOfCylinder: volumeOfCylinder
};
