const advice = document.getElementById('advice');
const adviseID = document.getElementById('adviseID');
const adviceBtn = document.getElementById('adviceBtn');

const generateJokes = async () => {

    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    advice.innerHTML = `"${data.slip.advice}"`;
    adviseID.innerHTML = `Advice #${data.slip.id}`;
}
adviceBtn.addEventListener('click', generateJokes);

generateJokes();