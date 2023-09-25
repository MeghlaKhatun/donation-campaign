const getLocalStorage=()=>{
    const getStorage=localStorage.getItem('donation-details');
    if(getStorage){
        return JSON.parse(getStorage)
    }
    else{
        return []
    }
}

const setLocalStorage= idInt =>{
    const getStorageId=getLocalStorage();
    const exists = getStorageId.find(cardId=>cardId === idInt);
    if(!exists){
        getStorageId.push(idInt);
        localStorage.setItem('donation-details', JSON.stringify(getStorageId));
    }

}

export {getLocalStorage,setLocalStorage}