import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// 
const numbersCollection  = new NumbersCollection([10, 3, -5, 0, 33, 25, 54])
numbersCollection.sort()
console.log(numbersCollection.data)
// 
const charactersCollection = new CharactersCollection('GalfxDRnstI')
charactersCollection.sort()
console.log(charactersCollection.data)
// 
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.add(2)
linkedList.add(-7)
linkedList.add(1)

linkedList.sort()
linkedList.print()
