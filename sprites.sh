INDEX=1
for POKEMON in $(cat /mnt/c/Users/Josh/Projects/pokesprite/data/pokemon.json | jq -r 'to_entries[] | "\(.value | .slug.eng) \n "')
do
    if [ "$INDEX" -gt "905" ]
    then
        exit 0
    else
        echo $POKEMON
        cp /mnt/c/Users/Josh/Projects/pokesprite/pokemon-gen8/regular/$POKEMON.png /mnt/c/Users/Josh/Projects/Living-Pokedex-Create-React-App/public/sprites/
        ((INDEX++))
    fi
done
