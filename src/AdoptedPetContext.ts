import { createContext } from 'react'
import { Pet } from './APIRersponsesTypes'
const AdoptedPetContext = createContext<
	[Pet | null, (adoptedPet: Pet) => void]
>([
	{
		id: 212,
		name: 'Fido',
		animal: 'dog',
		description: 'dasdasdasd',
		breed: 'asd',
		images: [],
		city: 'seatele',
		state: 'WA',
	},
	() => {},
])

export default AdoptedPetContext
