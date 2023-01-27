const hello = async (event, context) => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': 'Hola mundo - erverless framework en aws'})
    }
}

module.exports = {
    hello
}