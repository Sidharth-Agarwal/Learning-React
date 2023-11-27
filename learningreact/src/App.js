import './App.css';
import Item from './components/Item.js';
import ItemDate from './components/ItemDate.js';
import Card from './components/Card.js';

function App() {
  // const itemTwoName = "Excel";
  // <Item name={itemTwoName}></Item>
  // Another way of writing elements

  const respone = [
    {
      itemName : "Nirma",
      itemData : "1",
      itemMonth : "Jan",
      itemYear : "2000"
    },
    {
      itemName : "surf excel",
      itemData : "2",
      itemMonth : "Feb",
      itemYear : "2001"
    },
    {
      itemName : "555",
      itemData : "3",
      itemMonth : "Mar",
      itemYear : "2002"
    },
  ]

  return (
    <Card>
      <Item name={respone[0].itemName}>
        This is the first item of the component.
      </Item>
      <ItemDate date={respone[0].itemData} month={respone[0].itemMonth} year={respone[0].itemYear}></ItemDate>

      <Item name="Surf Excel"></Item>
      <ItemDate date="21" month="Feb" year="2002"></ItemDate>

      <Item name="555"></Item>
      <ItemDate date="22" month="Mar" year="2003"></ItemDate>
      <div className="App">Hello React</div>
    </Card>
  );
}

export default App;