function area(length,height)
{
    return parseInt(length) * parseInt(height)
}
function perimeter(length,height)
{
    return (2 * (parseInt(length) * parseInt(height)))
}
module.exports.area = area
module.exports.perimeter = perimeter