function increment(team, amount){
    const teamScore = document.getElementById(team + '-score');
    teamScore.textContent = parseInt(teamScore.textContent) + amount;
}

function restart() {
    document.getElementById('home-score').textContent = 0;
    document.getElementById('guest-score').textContent = 0;
}