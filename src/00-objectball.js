function gameObject(){
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players":{
                "Alan Anderson":{
                    "number" : 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans":{
                    "number" : 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brooke Lopez":{
                    "number" : 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason plumlee":{
                    "number" : 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry":{
                    "number" : 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
              "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
              },
              "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10,
              },
              "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
              },
              "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
              },
              "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
              },
            }
        }
    }
}


// function numPointsScored

function numPointsScored(playerName) {
    const game = gameObject(); // Get the game object
    
    // Iterate through both home and away teams
    const teams = ['home', 'away'];

    for (let team of teams) {
        const players = game[team].players; // Get players for the current team

        // Check if the player exists in the current team's players
        if (players && players[playerName]) {
            return players[playerName].points; // Return the player's points
        }
    }

    return "Player not found"; // If player is not found in any team
}

// Example 
console.log(numPointsScored("Alan Anderson")); // Returns 22
console.log(numPointsScored("Reggie Evans")); // Returns 12
console.log(numPointsScored("Brooke Lopez"));  // Returns 17
console.log(numPointsScored("Nonexistent Player")); // Returns "Player not found"

//function shoeSize
function shoeSize(playerName) {
    const game = gameObject(); // Get the game object

    // Iterate through both home and away teams
    const teams = ['home', 'away'];

    for (let team of teams) {
        const players = game[team].players; // Get players for the current team

        // Check if the player exists in the current team's players
        if (players[playerName]) {
            return players[playerName].shoe; // Return the player's shoe size
        }
    }

    return "Player not found"; // If player is not found in any team
}

//function teamNames
function teamNames() {
    const game = gameObject(); // Get the game object
    const teams = [game.home.teamName, game.away.teamName]; // Get both team names
    return teams;
}

//function teamColors
function teamColors(teamName) {
    const game = gameObject(); // Get the game object

    // Check if the team exists in the home or away
    if (game.home.teamName === teamName) {
        return game.home.colors; // Return the home team's colors
    } else if (game.away.teamName === teamName) {
        return game.away.colors; // Return the away team's colors (if available)
    } else {
        return "Team not found"; // If team is not found
    }
}

//function playerNumbers
function playerNumbers(teamName) {
    const game = gameObject(); // Get the game object
    const numbers = [];
    
    // Check if the team exists in the home or away
    if (game.home.teamName === teamName) {
        for (let player in game.home.players) {
            numbers.push(game.home.players[player].number); // Push jersey numbers from home team
        }
    } else if (game.away.teamName === teamName) {
        for (let player in game.away.players) {
            numbers.push(game.away.players[player].number); // Push jersey numbers from away team
        }
    } else {
        return "Team not found"; // If team is not found
    }

    return numbers; // Return the array of jersey numbers
}

//function playerStats
function playerStats(playerName) {
    const game = gameObject(); // Get the game object

    // Iterate through both home and away teams
    const teams = ['home', 'away'];

    for (let team of teams) {
        const players = game[team].players; // Get players for the current team

        // Check if the player exists in the current team's players
        if (players[playerName]) {
            return players[playerName]; // Return the player's stats object
        }
    }

    return "Player not found"; // If player is not found in any team
}


console.log(shoeSize("Alan Anderson"));  // Returns 16
console.log(teamColors("Brooklyn Nets")); // Returns ["Black", "White"]
console.log(teamNames()); // Returns ["Brooklyn Nets", ""]
console.log(playerNumbers("Brooklyn Nets")); // Returns [0, 30, 11]
console.log(playerStats("Alan Anderson")); // Returns the stats object for Alan Anderson


function bigShoeRebounds() {
    const game = gameObject();  // Get the game object
    let largestShoeSize = 0;   // Variable to keep track of the largest shoe size
    let playerWithLargestShoe = '';  // Variable to keep track of the player with the largest shoe size

    // Iterate through both home and away teams to find the player with the largest shoe size
    const teams = ['home', 'away'];
    for (let team of teams) {
        const players = game[team].players;  // Get players for the current team

        for (let player in players) {
            const shoeSize = players[player].shoe;  // Get the shoe size of the current player
            
            if (shoeSize > largestShoeSize) {
                largestShoeSize = shoeSize;  // Update largest shoe size
                playerWithLargestShoe = player;  // Update player with largest shoe size
            }
        }
    }

    // After finding the player with the largest shoe size, return their rebounds
    if (playerWithLargestShoe && game.home.players[playerWithLargestShoe]) {
        return game.home.players[playerWithLargestShoe].rebounds;  // Return rebounds for that player
    } else {
        return "No players found";  // In case no player is found (edge case)
    }
}
console.log(bigShoeRebounds());  // Returns 19 (Brooke Lopez's rebounds)


// Function find the player with the most points
function mostPointsScored() {
    const game = gameObject();  // Get the game object
    let maxPoints = 0;  // Variable to store the maximum points
    let playerWithMaxPoints = '';  // Variable to store the name of the player with the most points

    // Iterate through both home and away teams
    const teams = ['home', 'away'];
    for (let team of teams) {
        const players = game[team].players;  // Get players for the current team

        for (let player in players) {
            const points = players[player].points;  // Get the points of the current player

            // If the current player has more points, update the maxPoints and playerWithMaxPoints
            if (points > maxPoints) {
                maxPoints = points;
                playerWithMaxPoints = player;
            }
        }
    }

    return playerWithMaxPoints;  // Return the name of the player with the most points
}

// Function to find the team with the most points
function winningTeam() {
    const game = gameObject();  // Get the game object
    let homePoints = 0;  // Variable to store the total points of the home team
    let awayPoints = 0;  // Variable to store the total points of the away team

    // Calculate the total points for the home team
    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    // Calculate the total points for the away team
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    // Compare the points and return the team with the most points
    if (homePoints > awayPoints) {
        return game.home.teamName;  // Return home team name if they have more points
    } else if (awayPoints > homePoints) {
        return game.away.teamName;  // Return away team name if they have more points
    } else {
        return "It's a tie!";  // Return a tie message if both teams have the same points
    }
}

// Function to find the player with the longest name
function playerWithLongestName() {
    const game = gameObject();  // Get the game object
    let longestName = '';  // Variable to store the longest name
    let maxLength = 0;  // Variable to store the length of the longest name

    // Iterate through both home and away teams
    const teams = ['home', 'away'];
    for (let team of teams) {
        const players = game[team].players;  // Get players for the current team

        for (let player in players) {
            const playerNameLength = player.length;  // Get the length of the player's name

            // If the current player's name is longer than the longestName, update the variables
            if (playerNameLength > maxLength) {
                maxLength = playerNameLength;
                longestName = player;
            }
        }
    }

    return longestName;  // Return the name of the player with the longest name
}

console.log("mostPointsScored: "+mostPointsScored());  // Outputs the player with the most points
console.log("winningTeam: "+winningTeam());  // Outputs the team with the most points
console.log("playerWithLongestName: "+playerWithLongestName());  // Outputs the player with the longest name


function doesLongNameStealATon() {
    const game = gameObject();  // Get the game object
    let longestName = '';  // Variable to store the longest name
    let maxLength = 0;  // Variable to store the length of the longest name
    let maxSteals = 0;  // Variable to store the maximum steals
    let longestNameSteals = 0;  // Variable to store the steals of the player with the longest name

    // Iterate through both home and away teams
    const teams = ['home', 'away'];
    for (let team of teams) {
        const players = game[team].players;  // Get players for the current team

        for (let player in players) {
            const playerNameLength = player.length;  // Get the length of the player's name
            const steals = players[player].steals;  // Get the steals for the current player

            // Check for the player with the longest name
            if (playerNameLength > maxLength) {
                maxLength = playerNameLength;
                longestName = player;
                longestNameSteals = steals;  // Store the steals for the player with the longest name
            }

            // Check for the player with the most steals
            if (steals > maxSteals) {
                maxSteals = steals;
            }
        }
    }

    // Return true if the player with the longest name has the most steals
    return longestNameSteals === maxSteals;
}

console.log("doesLongNameStealATon: "+doesLongNameStealATon());  // Returns true or false depending on the game object
