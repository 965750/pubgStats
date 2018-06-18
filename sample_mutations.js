export const setMatches = (state, fullMatches) => {

    fullMatches.data.included.forEach(player => {
        if (player.type == "participant") {
            if (player.attributes.stats.playerId == state.player[0].id) {

                state.matchesAll.push({
                    matchStats: fullMatches.data.data.attributes,
                    playerStats: player.attributes.stats
                })
            }
        }
    })
    state.lazyLoad = false;
};

export const setPlayer = (state, resPlayer) => {
    state.player.push({
        id: resPlayer.id,
        attri: resPlayer.attributes,
        matches: resPlayer.relationships.matches
    })
};