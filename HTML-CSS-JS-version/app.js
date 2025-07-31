const BASE_API_URL = "https://swapi.py4e.com/api/people/";
const VALID_CHARACTER_IDS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
  64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  83,
];

const AKABAB_IMAGE_API_URL = "https://akabab.github.io/starwars-api/api/id/";

function showLoader() {
  document.getElementById("looder").style.display = "block";
  document.getElementById("Hide").style.display = "none";
  document.getElementById("bg-image").style.display = "none";
}

function hideLoader() {
  document.getElementById("looder").style.display = "none";
  document.getElementById("Hide").style.display = "flex";
  document.getElementById("bg-image").style.display = "none";
}

async function fetchCharacterData(characterId) {
  showLoader();

  try {
    const swapiResponse = await fetch(`${BASE_API_URL}${characterId}/`);
    if (!swapiResponse.ok) {
      throw new Error(
        `SWAPI error! status: ${swapiResponse.status} for ID ${characterId}`
      );
    }
    const data = await swapiResponse.json();
    console.log("SWAPI Data:", data);

    let imageUrl = "images/placeholder.jpg";
    try {
      const akababResponse = await fetch(
        `${AKABAB_IMAGE_API_URL}${characterId}.json`
      );
      if (akababResponse.ok) {
        const akababData = await akababResponse.json();
        if (akababData.image) {
          imageUrl = akababData.image;
        } else {
          console.warn(
            `Akabab data for ID ${characterId} does not contain an image URL. Using placeholder.`
          );
        }
      } else {
        console.warn(
          `Could not fetch image from Akabab API for ID ${characterId}. Status: ${akababResponse.status}. Using placeholder.`
        );
      }
    } catch (imageFetchError) {
      console.warn(
        `Error fetching image from Akabab for ID ${characterId}:`,
        imageFetchError
      );
    }

    document.getElementById("title").textContent = data.name;
    document.getElementById("year").textContent = data.birth_year;

    const characterImage = document.getElementById("img");
    characterImage.src = imageUrl;
    characterImage.alt = data.name;
    characterImage.style.display = "block";

    characterImage.onerror = function () {
      this.src = "images/placeholder.jpg";
      this.alt = "Image not available";
      console.error(
        `Failed to load image for ${data.name} from URL: ${this.src}`
      );
    };

    document.getElementById("released").textContent = data.created.substring(
      0,
      10
    );
    document.getElementById("genre").textContent = "Sci-Fi, Adventure";
    document.getElementById("language").textContent = "Galactic Basic";
    document.getElementById("type").textContent = "Character";
    document.getElementById("gender").textContent = data.gender;
    document.getElementById("hairColor").textContent = data.hair_color;
    document.getElementById("skinColor").textContent = data.skin_color;
    document.getElementById("eyeColor").textContent = data.eye_color;
    document.getElementById("height").textContent = data.height + " cm";
    document.getElementById("mass").textContent = data.mass + " kg";
    document.getElementById("homeworld").textContent = data.homeworld;
  } catch (error) {
    console.error("Main fetch error:", error);
    document.getElementById("title").textContent = "Error loading character.";
    document.getElementById("year").textContent = "N/A";
    
    document.getElementById("released").textContent = "N/A";
    document.getElementById("genre").textContent = "N/A";
   
    document.getElementById("language").textContent = "N/A";
    document.getElementById("country").textContent = "N/A";
    document.getElementById("awards").textContent = "N/A";
    document.getElementById("type").textContent = "N/A";
    document.getElementById("gender").textContent = "N/A";
    document.getElementById("hairColor").textContent = "N/A";
    document.getElementById("skinColor").textContent = "N/A";
    document.getElementById("eyeColor").textContent = "N/A";
    document.getElementById("height").textContent = "N/A";
    document.getElementById("mass").textContent = "N/A";
    document.getElementById("homeworld").textContent = "N/A";
    document.getElementById("img").src = "images/placeholder.jpg";
    document.getElementById("Hide").style.display = "none";
  } finally {
    hideLoader();
  }
}

function chooseRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * VALID_CHARACTER_IDS.length);
  const randomId = VALID_CHARACTER_IDS[randomIndex];
  fetchCharacterData(randomId);
}

document.addEventListener("DOMContentLoaded", chooseRandomCharacter);
