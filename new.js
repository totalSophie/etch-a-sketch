let player_input = prompt('What size grid?');
player_input = parseInt(player_input);
while (player_input < 0 || player_input > 100 || isNaN(player_input) ) //If the user number matches one of preset numbers
    {
        let player_input = prompt('What size grid?');
        player_input = parseInt(player_input);

        if((player_input > 0 && player_input < 100) || !isNaN(player_input))
        {
            console.log(player_input)
            break;
        }
    }

 console.log(player_input)