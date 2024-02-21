var gospel = [
    "02%20Track%202.mp3",
    "AUD-20230318-WA0218.mp3",
    "Ndi_Muntu_[performed_at_Buyende]_by_Stream_Of_Life,_Kennedy_Sec._School(256k)-1.mp3"
]

var genre = {
    'gospel':[
        "02%20Track%202.mp3",
        "AUD-20230318-WA0218.mp3",
        "Ndi_Muntu_[performed_at_Buyende]_by_Stream_Of_Life,_Kennedy_Sec._School(256k)-1.mp3"
    ],
    'accapella':[
        "AUD-20230318-WA0218.mp3",
        "Ndi_Muntu_[performed_at_Buyende]_by_Stream_Of_Life,_Kennedy_Sec._School(256k)-1.mp3"

    ]
}

var songsLoad = document.getElementById('load');
for(i=0;i<genre.accapella.length;i++){
    const tag = `<audio controls  loop>
    <source src="./${gospel[i]}" type="audio/mp3">
</audio>
<h5>Accapella</h5>`
    songsLoad.innerHTML += tag;
}
var row = {

}