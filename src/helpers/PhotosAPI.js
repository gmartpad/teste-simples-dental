const BASEAPI = 'https://jsonplaceholder.typicode.com/photos'

const apiFetchGet = async () => {

    const res = await fetch(`${BASEAPI}`);

    const json = await res.json();

    return json;

}

const PhotosAPI = {

    getPhotos:async () => {
        const json = await apiFetchGet();
        return json;
    }

}

export default () => PhotosAPI;