const albumsArray = [
    { name: 'Elvis Presley', year: 1956 },
    { name: 'A Hard Day\'s Night', year: 1964 },
    { name: 'Thriller', year: 1982 },
    { name: 'Like a Virgin', year: 1984 },
    { name: 'Whitney Houston', year: 1985 },
    { name: 'Dangerously in Love', year: 2003 },
    { name: 'x (Multiply)', year: 2014 },
    { name: 'When We All Fall Asleep, Where Do We Go?', year: 2019 },
  ];
  
export default function Album()
{
    return(
        <ul>

        {albumsArray.map((obj)=>(
            <li>Name:{obj.name} Year:{obj.year}</li>
        ))}
        </ul>
    )
}  