export const getMatches = (context, matches) => {
    let count = 11
    matches.matches.forEach(match => {
        axios.get(`https://api.playbattlegrounds.com/shards/${matches.region}/matches/${match.id}`,
            {
                mode: "no-cors",
                headers: {
                    "Authorization": "---",
                    "Accept": "application/vnd.api+json"
                },
                crossDomain: true
            }
        ).then(res => {
            //limit to last 10 matches
            count--
            if(count > 0){
                context.commit('setMatches', res)
            }
            else {

            }
        })
    })
};
export const postPlayer = (player) => {
    let names = []
    let id = null

    db
        .collection("topPlayers")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                names.push(doc.data().player.name)

                if (doc.data().player.name == player.name) {
                    id = doc.id
                }
            });

            if (names.includes(player.name)) {
                //update data
                db.collection("topPlayers")
                    .doc(id).set({
                        player: player
                    })
            } else {
                //add data
                db.collection("topPlayers")
                    .add({
                        player: player
                    })
            }
        });
};