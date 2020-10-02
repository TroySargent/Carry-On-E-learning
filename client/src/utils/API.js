const API = {
    getSaved: async function() {
        let data = await fetch('/api/books/',{
            method: 'GET'
        }).then(response => response.json());
        return data;
    },
    saveItem: function(data) {
        fetch('/api/books/',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'

            },
        }).then(response => response.json());
    }
}

export default API;