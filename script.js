const button = document.getElementById("btn");


// Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API access key
const accessKey = 'qX51dGXqUpowqLCqrQaoLfAizQOJEXEPXTc6osWLb_s';
//const country = 'India'; // Replace with any country name

button.onclick = async function getTourismPlaceImages() {
    const inputData = document.getElementById("inputdata");
    document.getElementById("image").innerHTML = "";
    if (inputData.value == "" || inputData.value == null) {
        window.alert("Please enter a city name");
    }
    else {
        const url = `https://api.unsplash.com/search/photos?query=${inputData.value}%20tourism&client_id=${accessKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.results.length > 0) {
                
                data.results.forEach(photo => {
                    const img = document.createElement('img');
                    img.src = photo.urls.small;
                    img.alt = photo.alt_description;
                    const div = document.createElement("div");
                    const h2 = document.createElement("h2");
                    h2.textContent = photo.alt_description;
                    div.appendChild(h2);
                    div.appendChild(img);
                    document.getElementById("image").appendChild(div);

                });
            } else {
                window.alert('No images found.');
            }
        } catch (error) {
            window.alert('Error fetching images:', error);
        }
    }
}
//getTourismPlaceImages(country);
