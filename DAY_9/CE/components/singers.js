const singersArray = [
    { name: 'Elvis Presley', year: 1954 },
    { name: 'The Beatles', year: 1960 },
    { name: 'Michael Jackson', year: 1969 },
    { name: 'Madonna', year: 1982 },
    { name: 'Whitney Houston', year: 1985 },
    { name: 'Beyoncé', year: 1997 },
    { name: 'Ed Sheeran', year: 2011 },
    { name: 'Billie Eilish', year: 2015 },
  ];
export default function Singers()
{
    return(
        <ul>

        {singersArray.map((obj)=>(
            <li>Name:{obj.name} Year:{obj.year}</li>
        ))}
        </ul>
    )
}  