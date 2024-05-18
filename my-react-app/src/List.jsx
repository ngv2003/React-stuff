
function List(){

    const fruits = ["apple","banana","orange","coconut"];

    fruits.sort();
    const listItems = fruits.map(fruits => <li>{fruits}</li>);

    return(<ol>{listItems}</ol>);
}   

export default List;