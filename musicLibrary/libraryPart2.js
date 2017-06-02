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
             },
  printPlaylists: function () {
    var keys = Object.keys(this.playlists);
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      console.log(key + ':' + this.playlists[key].name + " - " + this.playlists[key].tracks.length + " tracks");
    }
  },

  printTracks: function () {
    var keys = Object.keys(this.tracks);
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var album = this.tracks[key].album;
      console.log(this.tracks[key].id + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " " + "(" + album + ")");
    }
  }
  // ...
};
console.log(library.printPlaylists());
console.log(library.printTracks());
