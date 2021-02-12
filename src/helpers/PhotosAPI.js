const BASEAPI = 'https://jsonplaceholder.typicode.com/photos'

const apiFetchGet = async () => {

    const res = await fetch(`${BASEAPI}`)
                        .catch(function(error) {
                            console.log('Deu problema no fetch do Photos: ' + error.message);
                        });

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