const BASEAPI = 'https://jsonplaceholder.typicode.com/albums'

const apiFetchGet = async () => {

    const res = await fetch(`${BASEAPI}`)
                        .catch(function(error) {
                            console.log('Deu problema no fetch do Albums: ' + error.message);
                        });

    const json = await res.json();

    return json;

}

const AlbumsAPI = {

    getAlbums:async () => {
        const json = await apiFetchGet();
        return json;
    }

}

export default () => AlbumsAPI;