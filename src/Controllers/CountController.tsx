import { countSingal } from "../Modals/CountModal"


const getCount = (): number => {
    return countSingal.value;
}

const incrementCount = () => {
    countSingal.value++;
}

const decreseCount = () => {
    countSingal.value--;
}

const resetCount = () => {
    countSingal.value = 0;
}


export {getCount,incrementCount,decreseCount,resetCount};