const card_gen = require("./GICardGame/card_generator.js");
const ultils = require("./GICardGame/ultils.js");
const game = require("./GICardGame/game.js");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const log = console.log;

let current_game = new game();

let start_menu = () => {
    log("WELCOME TO GENSHIN IMPACT CARDGAME ON DISCORD!")
}

let game_loop = () => {
    rl.question('Command: ', (cmd) => {
        if(current_game.is_end() != -1) return rl.close(); 
        
        let current_turn = current_game.turn % 2;
        let current_player = current_game.players[current_turn];
        let other_player = current_game.players[1 - current_game];

        if(cmd == "random_deck"){
            current_player.deck = [card_gen.get_random_card(), card_gen.get_random_card(), 
                                   card_gen.get_random_card(), card_gen.get_random_card()];
            
            current_player.deck.forEach(card => {
                log(card.info);
            });
            
            
        }

        current_game.next_turn();

        game_loop();
    });
};

start_menu();

game_loop();