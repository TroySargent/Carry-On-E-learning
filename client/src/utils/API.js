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
    deleteBook: function(id) {
        fetch(`/api/books/${id}`,{
            method: 'DELETE',
        }).then(response => response.json());
    },
    updateBook: function(id, data) {
        fetch(`/api/books/${id}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
                },
        }).then(response => response.json()).then(res => console.log(res));
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
    },
    updateVideo: function(id, data) {
        fetch(`/api/videos/${id}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
                },
        }).then(response => response.json()).then(res => console.log(res));
    },
    deleteVideo: function(id) {
        fetch(`/api/videos/${id}`,{
            method: 'DELETE',
        }).then(response => response.json());
    }
}

export default API;