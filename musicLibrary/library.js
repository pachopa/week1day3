var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (library) {

  var keys = Object.keys(library.playlists);
  //console.log(keys, "chris1");
  for(var i = 0; i < keys.length; i++) {
  var key = keys[i];
  //console.log(key, "chris2");
  //console.log(library.playlists[key]);
  console.log(key + ':' + library.playlists[key].name + " - " + library.playlists[key].tracks.length + " tracks");
  }
}
console.log(printPlaylists(library))

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var keys = Object.keys(library.tracks);
  //console.log(keys)
  for(var i = 0 ; i < keys.length; i++ ) {
    var key = keys[i];
    var album = library.tracks[key].album;
    //console.log(album);
    console.log(library.tracks[key].id + ": " + library.tracks[key].name + " by " + library.tracks[key].artist + " " + "(" + album + ")");
  }
}

console.log(printTracks())


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylists = function (song) {
  //console.log(song);
  var keys = Object.keys(library.playlists);
  
  // console.log(library.tracks, "chris1");
  //console.log(keys, "chris1");
  console.log(keys[0] + ':' + song.p01.name + " - " + song.p01.tracks.length + " tracks");
  for(var i = 0; i < song.p01.tracks.length; i++) {
     var key = keys[0];
    
    var track = library.playlists[key].tracks[i];
    //console.log(key, "key");
    //console.log(track, "track")
    console.log(library.playlists[key].tracks[i] + ': ' + library.tracks[track].name + " by " + library.tracks[track].artist + " (" + library.tracks[track].album + ")");
   }
};

console.log(printPlaylists(library.playlists));


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var keys = Object.keys(library.tracks);
  for( var i = 0; i < keys.length; i++) {
    var key = keys[i];
    playlistId[key] = library.tracks[key];
  }
  return playlistId;
};
console.log(addTrackToPlaylist(library.tracks, library.playlists));


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var uniqueId = uid();
  library.tracks[uniqueId] = {
    id: uniqueId,
    name: name,
    artist: artist,
    album: album
  }
  return library.tracks;
};

var Track = {
  name: "Listen",
  artist: "Beyeonce",
  album: "B'day"
};

console.log(addTrack(Track.name, Track.artist, Track.album));


// adds a playlist to the library

var addPlaylist = function (name) {
  var keys = Object.keys(library.tracks);
  var key = keys[3];
  var uniqueId = uid();
  library.playlists[uniqueId] = {
    id: uniqueId,
    name: name,
    tracks: [key]
  };
  return library.playlists;
};

var playListsName = "Listen Music";
console.log(addPlaylist(playListsName));

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}