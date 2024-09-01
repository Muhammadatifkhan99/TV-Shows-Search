const form = document.querySelector('#searchForm');
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    // console.log("Submitted");
    // console.dir(form);
    const searchTerm = form.elements.query.value;
    const config = { params: {q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    // console.log(res.data[0].show.image.medium);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}


//we can request the API on every character we type
//but it is a good practice not to overload their API 
//this can be done with our own API
//
