function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}

function makeHalfPrice(price) {
    return price * 0.5;
}

function countBooks(books) {
    return books.length;
}

function isInStock(bookshelf) {
    for (let i = 0; i < bookshelf.length; i++) {
    if (bookshelf.quantity >= 1) {
        return true;
    }
}
return false;
}


module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock
};