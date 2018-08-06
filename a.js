/**
 * Провеоряет что все карточки синии
 * @param {} cards 
 */
function CheckCards(cards){
    if (cards[0]!='blue'){
        return false
    }
    if (cards[1]!='blue'){
        return false
    }
    if (cards[2]!='blue'){
        return false
    }
    return true
}

console.log(CheckCards(['blue','blue','red']))