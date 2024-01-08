import Headers from "./components/Layout/Headers";

let DUMMY_ITEMS=[
  {
    name:'Shushi',
    description:'Finest fish and veggie',
    prize:'$11.99'
  },
  {
    name:'Schitzel',
    description:'A german specialty',
    prize:'$16.99'
  },
  {
    name:'Barbecue Burger',
    description:'American, raw,meaty',
    prize:'$19.44'
  },
  {
    name:'Green Bowl',
    description:'Healthy...and green...',
    prize:'$22.33'
  }
]

function App() {
  return (
    <>
      <Headers />
      <ul>
        {
          DUMMY_ITEMS.map((item)=>{
            return <li>
              <span>{item.name}</span>
              <span>{item.description}</span>
              <span>{item.prize}</span>
            </li>
          })
        }
      </ul>
    </>
  );
}

export default App;