const addToDb = id => {
    let exerciseCart;
    localStorage.setItem('exercise-cart', JSON.stringify(exerciseCart));
}

export { addToDb }