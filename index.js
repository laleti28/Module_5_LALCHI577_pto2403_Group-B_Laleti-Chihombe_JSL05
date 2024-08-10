// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Enter Sandman", artist: "Metallica", genre: "Heavy Metal" },
    { title: "Chop Suey!", artist: "System of a Down", genre: " Heavy Metal" },
    { title: "Crazy Train", artist: "Ozzy Osbourne", genre: "Heavy Metal" },
    { title: "Pony", artist: "Ginuwine", genre: "RNB" },
    { title: "Ignition", artist: "R. Kelly", genre: "RNB" },
    { title: "Lost Without You", artist: "Robin Thicke", genre: "RNB" },
    { title: "The Way We Were", artist: "Barbra Streisand", genre: "Classic " },
    { title: "Unchained Melody", artist: "The Righteous Brothers", genre: "Classic "},
    { title: "Clair de Lune", artist: "Claude Debussy", genre: "Classical" },

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "drax": "Heavy Metal",
    "Rocket":"RNB",
    "Groot": "Classical",
};

// Function to generate playlist based on preferred genre 
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

    // clearing exisisting
    const playlistsDiv = document.getElementById('playlists');
playlistsDiv.innerHTML = ''; // clearing exisisting 


 // Creating a playlist for each guardian using map ()
 Object.keys(guardians).map(guardian => {
  const genre = guardians[guardian];
  const filteredSongs = songs.filter(song => song.genre === genre);
  
// Creating container for playlist
  const playlistContainer = document.createElement('div');
  playlistContainer.className = 'playlist';

  //adding hearder for guardians
  const heading = document.createElement('h2');
  heading.textContent = `${guardian}'s Playlist`;
  playlistContainer.appendChild(heading);
//Add songs to playlist
  filteredSongs.forEach(song => {
    const songDiv = document.createElement('div');
    songDiv.className = 'song';

    const songInfo = document.createElement('span');
    songInfo.className = 'song-info';
    songInfo.textContent = `${song.title} by ${song.artist}`;
    songDiv.appendChild(songInfo);


    playlistContainer.appendChild(songDiv);
  });

  playlistsDiv.appendChild(playlistContainer);
});




} 

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


