export const getImageUrl = (path)=>{
    return new URL(`/assests/${path}`, import.meta.url).href;
};