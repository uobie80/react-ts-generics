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

renderToScreen([[{}], { draw: () => { } }])


//Working with multiple type parameters
function myMap<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func)
}

const strArr = ["1", "2", "3"]
const numArr = [1, 2, 3]
const mixedArr = [1, 2, 3, "a", "b", "c"]

const newVal = myMap(mixedArr, (val) => val);


function filter<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
    return arr.filter(func)
}
//Typing React Components
type FauxReactFunctionComponent<Props extends {}> = (
    props: Props,
    context?: any
) => FauxReactFunctionComponent<any> | null | JSX.Element

interface DateProps {
    iso8601Date: string;
    message: string
}

const DateComponent: FauxReactFunctionComponent<DateProps> = props => (
    <time dateTime={props.iso8601Date}>{props.message}</time>
)
