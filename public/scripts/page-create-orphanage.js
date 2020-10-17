const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//add marker
map.on('click', (event) => {


    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

//add photo to upload

function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //copy last image you uploaded
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //verify if the field is empty
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return 
    }

    //clean newfieldsContainer
    input.value = ""
    //push a copy to image container
    container.appendChild(newFieldContainer)
}
//clean field
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //clean
        span.parentNode.children[0].value = ""
        return
    }

    //delete
    span.parentNode.remove()


}

//select option yes ou No
function toggleSelect(event) {
    //turn off active class
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    //turn on active class
    const button = event.currentTarget
    button.classList.add('active')
    //change the value in input hidden
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value

}

    if(input.includes('')) {
    
        alert('Todos os campos deve ser preenchidos!')
    }


/*  challenge
function validade(event) {
    const needsLatAndLng = true;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa")
    }
}

*/
