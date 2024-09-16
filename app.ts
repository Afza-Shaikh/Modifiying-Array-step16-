let guest_list : string [] = ['ali','farhan','raza','ayesha'];
for (let i=0; i < guest_list.length; i ++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we invited you on dinner tomorrow.\n\nThank You');
}
let not_present : string = 'farhan';
let new_guest : string = 'Babar Azam';
guest_list[1] = new_guest;
for(let i=0; i < guest_list.length; i ++){
    console.log( 'Respected Sir/Madam ' + guest_list[i] + ',\n We invited you on dinner tomorrow.\n Thank You ');

}
console.log(`Mr . ${not_present} will be not coming tomorrow dinner.`)

guest_list.unshift(`Ronaldo`);
guest_list.splice(guest_list.length/2,2 , "Messi" );
guest_list.push("Shahid Afridi");
for(let i=0; i < guest_list.length; i ++){
    console.log( 'Respected Sir/Madam ' + guest_list[i] + ',\n We invited you on dinner tomorrow.\n Thank You ');
}
console.log(`we have found a bigger dinner table so we invited more guest`);
