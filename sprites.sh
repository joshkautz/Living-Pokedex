for POKEMON in $(cat src/pokemon.json | jq -r '.[].slug')
do
    echo $POKEMON
    curl -o "public/sprites/$POKEMON.avif" "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/$POKEMON.avif"
done
