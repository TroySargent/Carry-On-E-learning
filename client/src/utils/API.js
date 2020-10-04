const API = {
    getSavedBooks: async function() {
        let data = await fetch('/api/books/',{
            method: 'GET'
        }).then(response => response.json());
        return data;
    },
    saveBook: function(data) {
        fetch('/api/books/',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'

            },
        }).then(response => response.json());
    },
    getSavedVideos: async function() {
        let data = await fetch('/api/videos/',{
            method: 'GET'
        }).then(response => response.json());
        return data;
    },
    saveVideo: function(data) {
        fetch('/api/videos/',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'

            },
        }).then(response => response.json());
    }
}

export default API;