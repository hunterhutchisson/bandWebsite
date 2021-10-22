const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');
let albumsArr = dataFile.albums


router.get('/albums', (req, res) => {
    let albumPhotos = []

    albumsArr.forEach(albumObj => {
        albumPhotos = albumPhotos.concat(albumObj.artwork)
    })
    res.render('albums', {
        artwork: albumPhotos,
        albumsArr: albumsArr,
        navAlbums: albumsArr,
        pageTitle: "Modest Moust -- Albums"
    })

})

router.get('/albums/:albumid', (req, res) => {
    //display 1 album
    let album = req.params.albumid;
    let photo = [];
    let albums = [];

    albumsArr.forEach(albumObj => {
        if(albumObj.shortname === album){
            photo = [...albumObj.artwork]
            albums.push(albumObj)
        }
    })

    res.render('albums', {
        artwork: photo,
        navAlbums: albumsArr,
        albumsArr: albums,
        pageTitle: `Modest Mouse -- ${albums[0].albumName}`
    })
})

module.exports = router;