const addToDb = breakTime => {
    localStorage.setItem('stored-break-time', breakTime.toString());
}

const getStoredTime = () => {
    const prevBreakTime = localStorage.getItem('stored-break-time');
    return prevBreakTime ? prevBreakTime : 0;
}
export { addToDb, getStoredTime }