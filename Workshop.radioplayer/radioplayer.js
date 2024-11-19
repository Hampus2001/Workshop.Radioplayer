// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const responsePromise = fetch("https://api.sr.se/api/v2/channels/?format=json");

const dataPromise = responsePromise.then((response) => {
  return response.json();
});
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
const channelsParent = document.querySelector("#channels");

dataPromise.then((data) => {
  data.channels.forEach((element) => {
    //create a div for the channel
    const channelDiv = document.createElement("div");
    channelDiv.setAttribute("id", element.id);
    channelDiv.style.backgroundColor = `#${element.color}`;

    // get channel photo
    const channelPhoto = document.createElement("img");
    channelPhoto.src = element.image;

    // get channel name
    const channelName = document.createElement("h1");
    channelName.textContent = element.name;

    // create audio  with controls in html
    const channelAudio = document.createElement("audio");
    channelAudio.controls = true;

    // get audio and add it to channelAudio
    audioSrc = document.createElement("source");
    audioSrc.src = element.liveaudio.url;
    channelAudio.appendChild(audioSrc);
    channelName.appendChild(channelAudio);

    // insert in html
    channelDiv.appendChild(channelPhoto);
    channelDiv.appendChild(channelName);

    channelsParent.appendChild(channelDiv);
  });
});
// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
