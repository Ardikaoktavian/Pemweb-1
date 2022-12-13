// mengambil semua element a dengan looping
document.querySelector("#option a").forEach((a) =>{
    // jika di klik akan menjalankan fungsi computerchoice( )
    a.addEventListener("click", (element) => {
        computerChoice(element);
    } )
})
function computerChoice(element) {
    //tangkap pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random( ) * choices.length) ]
    pilihanComputer = pilihanComputer.innerHTML ; 

    // jika pilihan komputer sama dengan pilihan user(draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }

    // jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert(" YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert(" YOU WIN");
    }else {
        alert("TIDAK ADA PILIHAN");
    }

     // jika pilihan komputer yang menang
     if (pilihanUser == "Rock" && pilihanComputer == "Paper") {
        alert(" YOU LOSE");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("YOU LOSE");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert(" YOU LOSE");
    }else {
        alert("TIDAK ADA PILIHAN");
    }
}