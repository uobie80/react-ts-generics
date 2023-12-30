//Different ways to pass a type
function wrapInArray<Type>(input: Type): Type[] {
    return [input];
}

const strArray = wrapInArray<string>("hello generics");
const numArray = wrapInArray<number>(42);


//Constraining and extending trypes


interface ObjectArrayType {
    name: string;
    age: number;
    petNames: string[]
}[];

wrapInArray<ObjectArrayType>({
    name: "Rudi",
    age: 36,
    petNames: ["pepsi", "tricksie"],
    likeDogs: true
});

function wrapInArray2<Type extends ObjectArrayType>(input: Type): Type[] {
    return [input]
}

interface Drawable {
    draw: () => void;
}

function renderToScreen<Type extends Drawable>(input: Type[]) {
    input.forEach((i) => i.draw());
}

const objectsWithDraw = [{ draw: () => { }, reset: () => { } }, { draw: () => { } }]


